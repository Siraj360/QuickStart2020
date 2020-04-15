import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../../services/data.service";
import { GlobalState } from "../../../../global.state";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.html",
  providers: [DataService],
})
export class ProductListComponent implements OnInit {
  public products: any[] = [];
  public title: String = "Product Listing";

  constructor(
    private dataService: DataService,
    private globalState: GlobalState
  ) {
    this.globalState.notifyDataChanged("Header.title", this.title);
  }

  getData() {
    this.dataService.getProducts().then((data_products: any[]) => {
      this.products = data_products;
    });
  }

  ngOnInit() {
    this.getData();
  }
}
