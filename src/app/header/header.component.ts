import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { IProduct } from '../interfaces/iproduct';
import { CartService } from '../services/cart.service';
import {DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartCount = 0;
  cartItems: IProduct[] = [];
  showList = false;
  cartTotal = 0;
  signIn: boolean;
  // closeResult: string;

  constructor(private modalService: NgbModal, private cartService: CartService, private dataService: DataService) { }

  ngOnInit() {
    this.cartService.$cartItems.subscribe(items => {
      this.cartCount = items.length;
      this.cartItems = items;
    });
    this.cartService.$cartTotal.subscribe(total => {
      this.cartTotal = total;
    });
    this.cartService.$cartQuantity.subscribe(total => {
      this.cartCount = total;
    });
  }

  toggleList() {
    this.showList = !this.showList;
  }
  removeFromCart(item, index) {
    this.cartService.removeProduct(item, index);
  }
  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }

}
