export interface IGame {
  title: string;
  genre: string;
  img: string;
  content: string;
  price: number;
  favourite: boolean;
  sold: boolean;
  checked?: boolean;
}
