export interface IProduct {
  product_id: number;
  product_name: string;
  product_description: string;
  number_of_pieces: number;
  product_hidden: number;
  add_date: string;
  product_price: number;
  price_after_discount: number;
  product_name_en: string;
  product_description_en: string;
  discount: number;
  product_image: string[];
}

export interface ICreateProduct {
  product_name: string;
  product_description: string;
  number_of_pieces: number;
  product_price: number;
  price_after_discount: number;
  discount: number;
  product_name_en: string;
  product_description_en: string;
  product_hidden: "yes" | "no";
}
