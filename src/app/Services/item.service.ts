import { Injectable } from '@angular/core';
import { Item } from '../models/item_model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemList: Item[] = [{
    id: 1,
    name: "Air Max 97",
    price: 5000000,
    inStock: true,
    photo: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/23d6e455-011d-4625-a5e9-cde8b3643438/air-max-97-shoes-F3zQb2.png",
    quantity: 1000,
    soLuongMua: 0
  },
  {
    id: 2,
    name: "Air Max ",
    price: 4000000,
    inStock: false,
    quantity: 1000,
    soLuongMua: 0,
    photo:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2c8f45ad-015b-41b1-8e60-18ebefa75bd8/air-max-terrascape-97-shoes-Trbm6k.png",
  },
  {
    id: 3,
    name: "Nike Air",
    price: 3000000,
    inStock: true,
    quantity: 1000,
    soLuongMua: 0,

    photo:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/10a0f725-7627-45ed-a8c0-57c66320753c/air-max-97-shoes-4bx1Wn.png",
  },
  {
    id: 4,
    name: "Nike Air",
    price: 8000000,
    inStock: true,
    soLuongMua: 0,
    quantity: 1000,
    photo:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/10a0f725-7627-45ed-a8c0-57c66320753c/air-max-97-shoes-4bx1Wn.png",
  }]
  constructor() { }

  print(){
    console.log(this.itemList)
  }
}
