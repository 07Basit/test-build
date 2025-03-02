import { Product } from '../../types/product';

export const featuredProducts: Product[] = [
  {
    id: "FP001",
    name: "Premium Alphonso Mangoes",
    category: "Fruits",
    categoryId: 1,
    mainImage: "https://images.unsplash.com/photo-1553279768-865429fa0078",
    images: [
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716",
      "https://images.unsplash.com/photo-1553279768-865429fa0078",
    ],
    shortDescription: "Sweet and juicy Alphonso mangoes",
    description: `Our premium Alphonso mangoes are sourced from the finest orchards in Maharashtra. These mangoes are distinguished by:

• Exceptional sweetness and aroma
• Rich golden color
• Perfect ripeness
• Smooth, fiber-free pulp

Each mango is carefully hand-picked and naturally ripened to ensure the best taste and quality. We follow strict quality control measures throughout the harvesting, packaging, and shipping process.

The Alphonso mango, known as the 'King of Mangoes', is renowned worldwide for its superior taste and texture. Our mangoes are exported fresh and are ideal for both direct consumption and processing.`,
    specifications: [
      { label: "Origin", value: "Maharashtra, India" },
      { label: "Season", value: "March to May" },
      { label: "Storage", value: "13-15°C" },
      { label: "Packaging", value: "4kg, 8kg boxes" }
    ]
  },
  {
    id: "FP002",
    name: "Organic Turmeric",
    category: "Spices",
    categoryId: 4,
    mainImage: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7",
    images: [
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7",
      "https://images.unsplash.com/photo-1615485290398-1f9c2fe2c70e",
    ],
    shortDescription: "Premium organic turmeric powder",
    description: `Our organic turmeric powder is produced from the finest turmeric roots, carefully processed to maintain its natural properties. Features include:

• High curcumin content (3.5%)
• Rich golden color
• Strong aroma
• Fine powder consistency

Each batch is tested for quality and purity. Our turmeric is grown in certified organic farms and processed in state-of-the-art facilities to ensure the highest quality standards.

Perfect for both culinary and therapeutic uses, our turmeric powder is known for its:
• Intense flavor
• Natural color
• Health benefits
• Versatility in cooking`,
    specifications: [
      { label: "Origin", value: "Kerala, India" },
      { label: "Curcumin Content", value: "3.5%" },
      { label: "Process", value: "Stone Ground" },
      { label: "Packaging", value: "100g, 500g, 1kg packs" }
    ]
  },
  {
    id: "FP003",
    name: "Premium Basmati Rice",
    category: "Rice",
    categoryId: 3,
    mainImage: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
    images: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c",
      "https://images.unsplash.com/photo-1550459716-8c75f92e8d73",
    ],
    shortDescription: "Aged premium basmati rice",
    description: `Our premium basmati rice is aged for 2 years to develop its distinctive characteristics:

• Extra-long grains
• Superior aroma
• Non-sticky texture
• Perfect elongation after cooking

Each grain is carefully selected and processed to maintain its quality. Our basmati rice undergoes rigorous quality checks to ensure:

• Uniform grain size
• No broken grains
• Pure white color
• Free from impurities

Ideal for biryanis, pulao, and other traditional dishes, our basmati rice is exported to premium markets worldwide.`,
    specifications: [
      { label: "Origin", value: "Punjab, India" },
      { label: "Aging", value: "2 Years" },
      { label: "Length", value: "8.4mm" },
      { label: "Packaging", value: "1kg, 5kg, 25kg bags" }
    ]
  }
];