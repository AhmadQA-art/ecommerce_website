import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "components/AppIcon";

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Frame Type",
      cruiser: "Step-through",
      sport: "Diamond",
      cruiserST: "Step-through",
    },
    {
      feature: "Range",
      cruiser: "Up to 70km",
      sport: "Up to 80km",
      cruiserST: "Up to 70km",
    },
    {
      feature: "Motor Power",
      cruiser: "250W",
      sport: "250W",
      cruiserST: "250W",
    },
    {
      feature: "Weight",
      cruiser: "16.9 kg",
      sport: "16.1 kg",
      cruiserST: "17.1 kg",
    },
    {
      feature: "Top Speed",
      cruiser: "25 km/h",
      sport: "25 km/h",
      cruiserST: "25 km/h",
    },
    {
      feature: "Charging Time",
      cruiser: "3.5 hours",
      sport: "3.5 hours",
      cruiserST: "3.5 hours",
    },
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-1 mb-4">Compare Models</h2>
          <p className="body-large text-gray-500 max-w-2xl mx-auto">
            Find the perfect Cowboy e-bike for your riding style by comparing
            our models side by side.
          </p>
        </motion.div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[768px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-6 text-left font-display text-gray-800">Features</th>
                  <th className="p-6 text-center font-display text-gray-800">Cruiser</th>
                  <th className="p-6 text-center font-display text-gray-800">Sport</th>
                  <th className="p-6 text-center font-display text-gray-800">Cruiser ST</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-6 text-left font-medium">{row.feature}</td>
                    <td className="p-6 text-center">{row.cruiser}</td>
                    <td className="p-6 text-center">{row.sport}</td>
                    <td className="p-6 text-center">{row.cruiserST}</td>
                  </tr>
                ))}
                <tr>
                  <td className="p-6 text-left font-medium">Price</td>
                  <td className="p-6 text-center font-bold">$2,790</td>
                  <td className="p-6 text-center font-bold">$3,290</td>
                  <td className="p-6 text-center font-bold">$2,990</td>
                </tr>
                <tr>
                  <td className="p-6"></td>
                  <td className="p-6 text-center">
                    <Link
                      to="/product-detail-page" className="btn-primary inline-block"
                    >
                      View Details
                    </Link>
                  </td>
                  <td className="p-6 text-center">
                    <Link
                      to="/product-detail-page" className="btn-primary inline-block"
                    >
                      View Details
                    </Link>
                  </td>
                  <td className="p-6 text-center">
                    <Link
                      to="/product-detail-page" className="btn-primary inline-block"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/test-ride-demo-booking" className="btn-secondary inline-flex items-center"
          >
            <Icon name="CalendarDays" size={18} className="mr-2" />
            Book a Test Ride
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;