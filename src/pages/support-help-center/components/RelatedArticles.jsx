import React from "react";
import { Link } from "react-router-dom";
import Icon from "components/AppIcon";

const RelatedArticles = ({ articles }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-6 mb-8">
      <h3 className="heading-3 mb-4">Related Articles</h3>
      <ul className="space-y-3">
        {articles.map((article) => (
          <li key={article.id}>
            <Link
              to={article.link}
              className="flex items-start py-2 hover:text-primary transition-colors"
            >
              <Icon
                name="FileText"
                size={16}
                className="mr-3 mt-1 flex-shrink-0"
              />
              <span>{article.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedArticles;