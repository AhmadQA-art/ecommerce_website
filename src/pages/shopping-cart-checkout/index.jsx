import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProgressIndicator from "./components/ProgressIndicator";
import CartReview from "./components/CartReview";
import ShippingForm from "./components/ShippingForm";
import PaymentForm from "./components/PaymentForm";
import OrderSummary from "./components/OrderSummary";
import OrderConfirmation from "./components/OrderConfirmation";

const ShoppingCartCheckout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Cowboy 4 ST",
      variant: "Midnight Black / Medium",
      price: 2990,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Rear Carrier",
      variant: "Black",
      price: 99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);
  
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    notes: "",
  });
  
  const [paymentInfo, setPaymentInfo] = useState({
    method: "credit-card",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    saveInfo: false,
  });
  
  const [orderNumber, setOrderNumber] = useState("");
  
  // Calculate order totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.07;
  const total = subtotal + shipping + tax;
  
  useEffect(() => {
    // Set page title
    document.title = "Shopping Cart & Checkout - Cowboy";
    
    // Scroll to top when step changes
    window.scrollTo(0, 0);
  }, [currentStep]);
  
  const updateQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  
  const generateOrderNumber = () => {
    const randomPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const datePart = new Date().getTime().toString().slice(-6);
    return `COW-${datePart}-${randomPart}`;
  };
  
  const handleCompleteOrder = () => {
    // Generate a random order number
    setOrderNumber(generateOrderNumber());
    setCurrentStep(4);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          {currentStep < 4 && (
            <div className="max-w-5xl mx-auto mb-12">
              <ProgressIndicator currentStep={currentStep} />
            </div>
          )}
          
          <div className="max-w-6xl mx-auto">
            {currentStep < 4 ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column - Form Steps */}
                <div className="lg:col-span-2">
                  <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                      <CartReview
                        key="cart-review"
                        cartItems={cartItems}
                        updateQuantity={updateQuantity}
                        removeItem={removeItem}
                        onContinue={() => setCurrentStep(2)}
                      />
                    )}
                    
                    {currentStep === 2 && (
                      <ShippingForm
                        key="shipping-form"
                        shippingInfo={shippingInfo}
                        setShippingInfo={setShippingInfo}
                        onContinue={() => setCurrentStep(3)}
                        onBack={() => setCurrentStep(1)}
                      />
                    )}
                    
                    {currentStep === 3 && (
                      <PaymentForm
                        key="payment-form"
                        paymentInfo={paymentInfo}
                        setPaymentInfo={setPaymentInfo}
                        onComplete={handleCompleteOrder}
                        onBack={() => setCurrentStep(2)}
                      />
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Right Column - Order Summary */}
                <div className="lg:col-span-1">
                  <OrderSummary
                    cartItems={cartItems}
                    subtotal={subtotal}
                    shipping={shipping}
                    tax={tax}
                    total={total}
                  />
                </div>
              </div>
            ) : (
              <OrderConfirmation
                orderNumber={orderNumber}
                shippingInfo={shippingInfo}
                paymentInfo={paymentInfo}
              />
            )}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ShoppingCartCheckout;