export interface FeedbackProps {
  like: number;
  dislike: number;
  onLike: () => void;
  onDislike: () => void;
  resetResults: () => void;
}

