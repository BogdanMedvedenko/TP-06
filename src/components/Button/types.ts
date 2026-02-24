export interface ButtonProps {
  name?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void
  isRed?: boolean;
  disabled?: boolean;
}


