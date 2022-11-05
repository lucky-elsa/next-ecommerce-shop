type RatingT = {
  rating: number;
};

export const Rating = ({ rating }: RatingT) => {
  return <div>{rating}</div>;
};
