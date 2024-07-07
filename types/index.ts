export type customBtnProps = {
  className: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export type popularProps = {
  withImg?: boolean;
};

export type categoryProps = {
  id: string;
  title: string;
  slug: string;
  img: string;
};
