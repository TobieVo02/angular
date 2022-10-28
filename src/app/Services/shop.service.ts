import { Injectable } from '@angular/core';
import { Item } from '../models/item_model';
import { ItemService } from './item.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  cart : Item[] = [];
  sum = 0;
  constructor(private itemService: ItemService) { }

  public tinhTien(){
    this.sum = 0;
    for(let i = 0; i < this.cart.length; i++){
      this.sum = this.sum + this.cart[i].soLuongMua*this.cart[i].price;
      for(let j = 0; j < this.itemService.itemList.length; j++){
        if(this.itemService.itemList[j].id == this.cart[i].id){
          this.itemService.itemList[j].quantity = this.itemService.itemList[j].quantity - this.cart[i].soLuongMua;
        }
      }
    }
    this.cart = [];
    return this.sum;
  }

  public boGio(item:Item){
    this.cart.push(item)
    console.log(this.cart);
  }
}
