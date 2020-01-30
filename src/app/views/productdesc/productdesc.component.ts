import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-desc',
  templateUrl: './productdesc.component.html',
  styleUrls: ['./productdesc.component.scss']
})
export class ProductdescComponent implements OnInit {
  productDesc: IProduct;
  constructor(private dService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    const id = this.route.snapshot.paramMap.get('id');
    const productName = this.route.snapshot.paramMap.get('productName');

    this.dService.getProduct(id).subscribe(
      item => this.productDesc = item
    );
  }
}
