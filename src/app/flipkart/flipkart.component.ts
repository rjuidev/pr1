import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css'],
})
export class FlipkartComponent {
  products: any = [
    { productname: 'pen', price: 10, ratings: 3, Freedelivery: true },
    { productname: 'phone', price: 10000, ratings: 3, Freedelivery: true },
    { productname: 'shirt', price: 100, ratings: 4, Freedelivery: false },
    { productname: 'cap', price: 120, ratings: 2, Freedelivery: false },
    { productname: 'Mobilecase', price: 109, ratings: 3, Freedelivery: true },
    { productname: 'remote', price: 200, ratings: 5, Freedelivery: true },
  ];

  delete(i: number) {
    this.products.splice(i, 1);
  }

  text: string = '';

  search() {
    this.products = this.products.filter((product: any) =>
      product.productname.includes(this.text)
    );
  }

  freedelivery() {
    this.products = this.products.filter(
      (product: any) => product.Freedelivery == true
    );
  }
  sort1() {
    this.products.sort((a: any, b: any) => a.price - b.price);
  }
  sort2() {
    this.products.sort((a: any, b: any) => b.price - a.price);
  }
  sort3() {
    this.products.sort((a: any, b: any) => a.ratings - b.ratings);
  }
  sort4() {
    this.products.sort((a: any, b: any) => b.ratings - a.ratings);
  }

  discount() {
    this.products = this.products.map((product: any) => {
      product.price = product.price * 0.5;
      return product;
    });
  }

  del() {
    this.products = this.products.map((product: any) => {
      if (product.Freedelivery === false) {
        product.price = product.price + 30;
      }
      return product;
    });
  }

  totalprice() {
    let totalprice = this.products.reduce(
      (sum: any, product: any) => sum + product.price,
      0
    );
    alert(totalprice);
  }
  totalcart() {
    let totalItems = this.products.length;
    alert(totalItems);
  }
  productname: string = '';
  price: number = 0;
  ratings: number = 0;
  Freedelivery: boolean = false;  //we can add true or false as a default value

  add() {
    let product = {
      productname: this.productname,
      price: this.price,
      ratings: this.ratings,
      Freedelivery: this.Freedelivery,
    };
    this.products.unshift(product);
  }
}
