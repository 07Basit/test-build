import { Product } from '../../types/product';

export const packedFood: Product[] = [
  {
    id: "P001",
    name: "Organic Granola",
    category: "Packed Food",
    categoryId: 5,
    mainImage: "https://images.unsplash.com/photo-1517686668014-1740ede3d337",
    images: [
      "https://images.unsplash.com/photo-1517686668014-1740ede3d337",
      "https://images.unsplash.com/photo-1516749396351-ab17226d0c1e",
    ],
    shortDescription: "Healthy organic granola mix",
    description: "Premium organic granola made with carefully selected ingredients. Perfect for breakfast and snacking.",
    specifications: [
      { label: "Weight", value: "500g" },
      { label: "Ingredients", value: "Oats, Nuts, Seeds" },
      { label: "Shelf Life", value: "12 months" },
      { label: "Storage", value: "Cool and dry place" }
    ]
  }
  // Continue with P002 to P015...
];