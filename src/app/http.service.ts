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
      description: "",
      img:
        "https://www.pokemoncenter.com/wcsstore/PokemonCatalogAssetStore/images/catalog/products/P2931/701-00071/P2931_701-00071_01.jpg"
    },
    {
      name: "Charmander",
      price: 15.99,
      description: "",
      img:
        "https://www.pokemoncenter.com/wcsstore/PokemonCatalogAssetStore/images/catalog/products/P2931/701-00074/P2931_701-00074_01.jpg"
    },
    {
      name: "Squirtle",
      price: 15.99,
      description: "",
      img:
        "https://www.pokemoncenter.com/wcsstore/PokemonCatalogAssetStore/images/catalog/products/P2931/701-00073/P2931_701-00073_01.jpg"
    },
    {
      name: "Bulbasaur",
      price: 15.99,
      description: "",
      img:
        "https://www.pokemoncenter.com/wcsstore/PokemonCatalogAssetStore/images/catalog/products/P2931/701-00072/P2931_701-00072_01.jpg"
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
}
