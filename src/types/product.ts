interface Variants {
  id: number;
  price: string;
  title: string;
}

interface Images {
  id: number;
  src: string;
}

export interface Product {
  id: number;
  title: string;
  body_html: string;
  product_type: string;
  tags: string[];
  status: string;
  variants: Variants[];
  image: Images;
}
