import { Product } from './product.model';
import { findProducts } from './product.service';
export interface CreateProductDTO
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}
type examplePick = Pick<Product, 'color' | 'description'>;
export interface UpdateProductDto extends Partial<CreateProductDTO> {}
type exampleRequired = Required<Product>;
export interface FindProduct extends Readonly<Partial<Product>> {}
type expampleReadOnly = Readonly<Product>;
