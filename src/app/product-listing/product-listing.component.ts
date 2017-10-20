import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html'
})
export class ProductListingComponent implements OnInit {
	public scrollbarOptions = { axis: 'y', theme: 'minimal-dark' };
  constructor() { }

  ngOnInit() {
  }

}
