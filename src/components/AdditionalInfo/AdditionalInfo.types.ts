export type Review = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

export type AdditionalInfoProps = { experience: string; reviews: Review[] };
