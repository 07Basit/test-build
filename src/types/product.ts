export interface Product {
  id: string; // Changed from number to string to support new ID format
  name: string;
  category: string;
  categoryId: number;
  mainImage: string;
  images: string[];
  shortDescription: string;
  description: string;
  specifications: {
    label: string;
    value: string;
  }[];
}