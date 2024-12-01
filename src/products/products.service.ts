
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products: { id: number; name: string; price: number }[] = [];

  create(createProductDto: { name: string; price: number }) {
    const product = { id: Date.now(), ...createProductDto };
    this.products.push(product);
    return product;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((product) => product.id === id);
  }

  update(id: number, updateProductDto: any) {
    const productIndex = this.products.findIndex((product) => product.id === id);
    if (productIndex >= 0) {
      this.products[productIndex] = { ...this.products[productIndex], ...updateProductDto };
      return this.products[productIndex];
    }
    return null;
  }

  remove(id: number) {
    const productIndex = this.products.findIndex((product) => product.id === id);
    if (productIndex >= 0) {
      const removedProduct = this.products.splice(productIndex, 1);
      return removedProduct;
    }
    return null;
  }
}
