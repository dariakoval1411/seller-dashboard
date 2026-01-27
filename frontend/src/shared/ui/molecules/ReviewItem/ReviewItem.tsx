import { Text, Badge } from "@/shared/ui/atoms";
import type { Review } from "../../../../mock/reviews";


function stars(rating: number) {
  const full = "★".repeat(Math.max(0, Math.min(5, rating)));
  const empty = "☆".repeat(5 - full.length);
  return full + empty;
}

function toneByRating(rating: number) {
  if (rating >= 4) return "success";
  if (rating === 3) return "warning";
  return "danger";
}

export function ReviewItem({ review }: { review: Review }) {
  return (
    <div className="review-item">
      <div className="review-item__top">
        <Text className="review-item__name">{review.customer}</Text>

        <div className="review-item__right">
          <Text style={{ opacity: 0.85 }}>{stars(review.rating)}</Text>
          <Badge label={`${review.rating}/5`} tone={toneByRating(review.rating)} />
        </div>
      </div>

      <Text className="review-item__comment" style={{ opacity: 0.85 }}>
        {review.comment}
      </Text>

      <Text className="review-item__date" style={{ opacity: 0.7 }}>
        {review.date}
      </Text>
    </div>
  );
}