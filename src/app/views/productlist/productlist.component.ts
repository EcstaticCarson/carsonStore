import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  productList: IProduct[];
  // pokeFilter = [];

  constructor(private dService: DataService, private cartService: CartService) { }


  //   pokemon = [
  //     { id: '1', pName: 'Pokeball', price: '$200', img: 'assets/images/pokeBall.png' },
  //     { id: '2', pName: 'Great Ball', price: '$600', img: 'assets/images/greatBall.png' },
  // { id: '3', pName: 'Ultra Ball', price: '$1,200', img: 'assets/images/ultraBall.png' },
  // { id: '4', pName: 'Premier Ball', price: '$250', img: 'assets/images/premierBall.png' },
  // { id: '5', pName: 'Luxury Ball', price: '$3,000', img: 'assets/images/luxuryBall.png' },
  //   ];

  ngOnInit() {
    // attach our productList to the array in our Data Service.
    this.productList = this.dService.getProducts();
  }

  addToCart(items) {
    this.cartService.addItemsToCart(items);
  }
}
