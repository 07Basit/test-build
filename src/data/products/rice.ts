import { Product } from '../../types/product';

export const rice: Product[] = [
  {
    id: "R001",
    name: "Premium Basmati Rice",
    category: "Rice",
    categoryId: 3,
    mainImage: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
    images: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c",
      "https://images.unsplash.com/photo-1550459716-8c75f92e8d73",
    ],
    shortDescription: "Aged premium basmati rice",
    description: "Finest quality aged basmati rice with perfect aroma and length. Ideal for biryanis and pulao.",
    specifications: [
      { label: "Origin", value: "India" },
      { label: "Type", value: "Long Grain" },
      { label: "Age", value: "2 Years" },
      { label: "Packaging", value: "5kg, 10kg bags" }
    ]
  },
  {
    id: "R002", // Fixed duplicate ID
    name: "Kolam Rice",
    category: "Rice",
    categoryId: 3,
    mainImage: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
    images: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c",
      "https://images.unsplash.com/photo-1550459716-8c75f92e8d73",
    ],
    shortDescription: "Aged premium basmati rice",
    description: "Finest quality aged basmati rice with perfect aroma and length. Ideal for biryanis and pulao.",
    specifications: [
      { label: "Origin", value: "India" },
      { label: "Type", value: "Long Grain" },
      { label: "Age", value: "2 Years" },
      { label: "Packaging", value: "5kg, 10kg bags" }
    ]
  }
];