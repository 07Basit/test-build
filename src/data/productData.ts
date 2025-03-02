import { fruits } from './products/fruits';
import { vegetables } from './products/vegetables';
import { rice } from './products/rice';
import { spices } from './products/spices';
import { packedFood } from './products/packedFood';
import { mouthfreshner } from './products/mouthfreshner';
import { nuts } from './products/nuts';
import { featuredProducts } from '../components/FeaturedProducts/featuredProductsData';

// Combine all products including featured products
export const products = [
  ...featuredProducts,
  ...fruits, 
  ...vegetables, 
  ...rice, 
  ...spices, 
  ...packedFood, 
  ...mouthfreshner, 
  ...nuts
];