import { Product } from '../../types/product';

export const spices: Product[] = [
  {
    id: "S001",
    name: "Organic Turmeric Powder",
    category: "Spices",
    categoryId: 4,
    mainImage: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7",
    images: [
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7",
      "https://images.unsplash.com/photo-1615485290398-1f9c2fe2c70e",
    ],
    shortDescription: "Pure organic turmeric powder",
    description: "Premium quality organic turmeric powder with high curcumin content. Perfect for cooking and health benefits.",
    specifications: [
      { label: "Origin", value: "India" },
      { label: "Curcumin", value: "3.5%" },
      { label: "Process", value: "Stone Ground" },
      { label: "Packaging", value: "100g, 500g packs" }
    ]
  }
  // Continue with S002 to S015...
];