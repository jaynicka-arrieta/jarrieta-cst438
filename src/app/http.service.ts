import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

/* Will eventually be renamed to product.service.ts */

@Injectable({
  providedIn: "root"
})
export class HttpService {
  plushies: Plushie[] = [
    {
      name: "Pikachu",
      price: 15.99,
      description: "Ditto disguised as Pikachu.",
      img: "./assets/pikachu.jpg",
      inStock: true
    },
    {
      name: "Charmander",
      price: 11.99,
      description: "Ditto disguised as Charmander.",
      img: "./assets/charmander.jpg",
      inStock: true
    },
    {
      name: "Squirtle",
      price: 18.99,
      description: "Ditto disguised as Squirtle.",
      img: "./assets/squirtle.jpg",
      inStock: true
    },
    {
      name: "Bulbasaur",
      price: 14.99,
      description: "Ditto disguised as Bulbasaur.",
      img: "./assets/bulbasaur.jpg",
      inStock: true
    }
  ];

  constructor(private http: HttpClient) {}

  getPlushies(): Plushie[] {
    return this.plushies;
  }
}

interface Plushie {
  name: string;
  price: number;
  description: string;
  img: string;
  inStock: boolean;
}
