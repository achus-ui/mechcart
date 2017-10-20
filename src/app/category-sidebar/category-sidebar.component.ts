import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-sidebar',
  templateUrl: './category-sidebar.component.html'
})
export class CategorySidebarComponent implements OnInit {

  public scrollbarOptions = { axis: 'y', theme: 'minimal-dark' };

  constructor() { }

  ngOnInit() {
  }

}
