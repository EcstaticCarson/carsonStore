import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { BehaviorSubject } from 'rxjs';
// import {  Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartItems: IProduct[] = [];
public $cartItems = new BehaviorSubject<IProduct[]>(this.cartItems);
// $cartItems2 = new Subject<IProduct[]>();

cartTotal = 0;
$cartTotal = new BehaviorSubject<number>(this.cartTotal);
cartQuantity = 0;
$cartQuantity = new BehaviorSubject<number>(this.cartQuantity);

  constructor() { }

  addItemsToCart(item: IProduct) {
    const cartItems = this.cartItems.find(x => x.id === item.id);
    if (cartItems) {
      cartItems.quantity++;
    } else {
      item.quantity = 1;
      this.cartItems.push(item);
    }
    this.cartQuantity++;
    console.log(this.cartItems);

    this.cartTotal += +item.price;
    this.broadcastSubjects();
    console.log('cartTotal is here', this.cartTotal);

    // this.$cartItems.next(this.cartItems);
    // this.$cartTotal.next(this.cartTotal);
    // this.$cartQuantity.next(this.cartQuantity);
  }

  removeProduct(item, index) {
    this.cartItems.splice(index, 1);
    const totalPrice = item.quantity * +item.price;
    this.cartTotal -= totalPrice;
    this.cartQuantity -= item.quantity;
    this.broadcastSubjects();
  }

  broadcastSubjects() {
    this.$cartItems.next(this.cartItems);
    this.$cartTotal.next(this.cartTotal);
    this.$cartQuantity.next(this.cartQuantity);
  }
}
