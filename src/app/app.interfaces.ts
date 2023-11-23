export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity?: number
}


export interface RegistrationForm {
  id: number;
  image: string;
  username: string;
  email: string;
  password: string;
  confirm_password?: string;
}