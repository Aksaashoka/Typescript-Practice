import {
  rand,
  randAccessory,
  randBoolean,
  randColor,
  randImg,
  randNumber,
  randProductAdjective,
  randProductCategory,
  randProductDescription,
  randRecentDate,
  randUuid,
} from '@ngneat/falso';
import {
  addProduct,
  findProducts,
  getAllProducts,
  updateProduct,
} from './products/product.service';
for (let index = 0; index < 30; index++) {
  addProduct({
    title: randAccessory(),
    description: randProductDescription(),
    image: randImg(),
    color: randColor(),
    size: rand(['S', 'M', 'XL', 'L']),
    price: randNumber({ min: 1, max: 999 }),
    stock: randNumber({ min: 10, max: 100 }),
    isNew: randBoolean(),
    tags: randProductAdjective({ length: 3 }),
    categoryId: randUuid(),
  });
}
console.log(getAllProducts());
const product = products[0];
updateProduct(product.id.toString(), {
  title: 'New Tittle',
  stock: 80,
});
findProducts({
  title: 'carlitos',
  stock: 10,
});
