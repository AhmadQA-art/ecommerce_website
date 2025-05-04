import React, { useState } from "react";
import Icon from "components/AppIcon";
import Image from "components/AppImage";

const CustomerReviews = ({ reviews, averageRating, totalReviews }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredReviews = activeFilter === "all" 
    ? reviews 
    : reviews.filter(review => review.rating === parseInt(activeFilter));

  // Calculate rating distribution
  const ratingCounts = [5, 4, 3, 2, 1].map(rating => {
    const count = reviews.filter(review => review.rating === rating).length;
    const percentage = (count / reviews.length) * 100;
    return { rating, count, percentage };
  });

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="heading-1 mb-2">Customer Reviews</h2>
        <div className="flex items-center mb-8">
          <div className="flex items-center mr-4">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={20}
                className={i < Math.round(averageRating) ? "text-warning" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-lg font-medium mr-2">{averageRating.toFixed(1)}</span>
          <span className="text-gray-500">({totalReviews} reviews)</span>
        </div>

        {/* Rating Distribution */}
        <div className="bg-white p-6 rounded-lg mb-8">
          <h3 className="heading-3 mb-4">Rating Distribution</h3>
          <div className="space-y-3">
            {ratingCounts.map(({ rating, count, percentage }) => (
              <div key={rating} className="flex items-center">
                <div className="flex items-center w-24">
                  <span className="mr-2">{rating}</span>
                  <Icon name="Star" size={16} className="text-warning" />
                </div>
                <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <div 
                    className="h-full bg-primary" 
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="text-gray-500 w-16">{count} reviews</span>
              </div>
            ))}
          </div>
        </div>

        {/* Review Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-4 py-2 rounded-full ${
                activeFilter === "all" ?"bg-primary text-white" :"bg-white text-gray-800 hover:bg-gray-200"
              }`}
              onClick={() => setActiveFilter("all")}
            >
              All Reviews
            </button>
            {[5, 4, 3, 2, 1].map(rating => (
              <button
                key={rating}
                className={`px-4 py-2 rounded-full flex items-center ${
                  activeFilter === rating.toString()
                    ? "bg-primary text-white" :"bg-white text-gray-800 hover:bg-gray-200"
                }`}
                onClick={() => setActiveFilter(rating.toString())}
              >
                {rating} <Icon name="Star" size={16} className="ml-1" />
              </button>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg">
              <div className="flex items-start">
                <div className="mr-4">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h4 className="font-medium mr-4">{review.name}</h4>
                    <span className="text-gray-500 text-sm">
                      {review.date}
                    </span>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={i < review.rating ? "text-warning" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  {review.title && (
                    <h5 className="font-medium mb-2">{review.title}</h5>
                  )}
                  <p className="text-gray-700 mb-4">{review.content}</p>
                  {review.images && review.images.length > 0 && (
                    <div className="flex gap-2 mb-4">
                      {review.images.map((image, index) => (
                        <div key={index} className="w-16 h-16 rounded-md overflow-hidden">
                          <Image
                            src={image}
                            alt={`Review image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center text-gray-500 text-sm">
                    <button className="flex items-center mr-4 hover:text-primary">
                      <Icon name="ThumbsUp" size={14} className="mr-1" />
                      Helpful ({review.helpfulCount})
                    </button>
                    <button className="hover:text-primary">Report</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Write Review Button */}
        <div className="mt-8 text-center">
          <button className="btn-primary py-3 px-8">
            Write a Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;