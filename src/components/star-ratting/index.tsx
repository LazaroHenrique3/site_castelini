import { FaStar, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number; // Número de estrelas preenchidas (0 a 5)
}

export const StarRating = ({ rating }: StarRatingProps) => {
  return (
    <div className="flex justify-center">
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {index < rating ? (
            <FaStar className="text-yellow-400" />
          ) : (
            <FaRegStar className="text-gray-400" />
          )}
        </span>
      ))}
    </div>
  );
};
