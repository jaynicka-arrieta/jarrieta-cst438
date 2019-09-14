import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  plushies: Object;

  constructor(private product: HttpService) {}

  ngOnInit() {
    this.plushies = this.product.getPlushies();
  }
}
