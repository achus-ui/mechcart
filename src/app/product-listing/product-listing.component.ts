import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html'
})
export class ProductListingComponent implements OnInit {
	public scrollbarOptions = { axis: 'y', theme: 'minimal-dark' };
	public datas = [
			{
			  category: "category1",
			  products: [{
				  	name: 'Product 1',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }, {
				  	name: 'Product 2',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }, {
				  	name: 'Product 3',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }, {
				  	name: 'Product 4',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }, {
				  	name: 'Product 5',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }, {
				  	name: 'Product 6',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }, {
				  	name: 'Product 7',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }, {
				  	name: 'Product 8',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }, {
				  	name: 'Product 9',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }, {
				  	name: 'Product 10',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }, {
				  	name: 'Product 11',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }, {
				  	name: 'Product 12',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }, {
				  	name: 'Product 13',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }
			  	]
			},
			{
			  category: "category2",
			  products: [{
				  	name: 'Product 1',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }, {
				  	name: 'Product 2',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }, {
				  	name: 'Product 3',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }, {
				  	name: 'Product 4',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }
			  	]
			},
			{
			  category: "category3",
			  products: [{
				  	name: 'Product 1',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }, {
				  	name: 'Product 2',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }, {
				  	name: 'Product 3',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }, {
				  	name: 'Product 4',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }
			  	]
			},
			{
			  category: "category4",
			  products: [{
				  	name: 'Product 1',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }, {
				  	name: 'Product 2',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }, {
				  	name: 'Product 3',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }, {
				  	name: 'Product 4',
				  	img: 'https://4.imimg.com/data4/PF/VG/MY-2120655/ms-bolt-nut-250x250.jpg'
				  }
			  	]
			}
		];
  constructor() { }

  ngOnInit() {
  }

}
