import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    console.log(this.item);
  }
  addToCart(items) {
    this.cartService.addItemsToCart(items);
  }
}
