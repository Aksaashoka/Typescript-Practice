import { Product } from './product.model';
import { CreateProductDTO, UpdateProductDto, FindProduct } from './product.dto';
import { randProductCategory, randRecentDate, randUuid } from '@ngneat/falso';
export const products: Product[] = [];
export const addProduct = (data: CreateProductDTO): Product => {
  //Esto lo haria al DB
  const newProduct = {
    ...data,
    id: randUuid(),
    createdAt: randRecentDate(),
    updatedAt: randRecentDate(),
    category: {
      id: data.categoryId,
      name: randProductCategory(),
      createdAt: randRecentDate(),
      updatedAt: randRecentDate(),
    },
  };
  // creamos el nuevo producto
  products.push(newProduct);
  return newProduct;
};
export const getProductbyID = (id: string) => {
  const response = products.find((item) => item.id === id);
  return response;
};
export const updateProduct = (
  id: string,
  changes: UpdateProductDto
): Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  const updateDate = new Date();
  products[index] = {
    ...prevData,
    ...changes,
    updatedAt: updateDate,
  };
  return products[index];
};
export const deleteProduct = () => {};
export const getAllProducts = () => products;

export const findProducts = (dto: FindProduct): Product[] => {
  // codigo de motor de busqueda
  return products;
};
