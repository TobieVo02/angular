import { Component } from '@angular/core';
import { Item } from './models/item_model';
import { ItemService } from './Services/item.service';
import { ShopService } from './Services/shop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sum = 0;
  title = 'Firstdemo';
  count: number = 0;
  public date = Date.now();
  public classStyle = 'Hello';
  itemList : Item[] = [];
  changeColor(color: string){
    if(color== "red"){
      this.classStyle= 'hello'
    }else{
      this.classStyle= 'word';
    }
    this.style.color = color;
  }
  public style = {
    color: "red"
  }
  constructor(private itemService : ItemService,private shopService: ShopService){
    this.itemList = this.itemService.itemList
    this.itemService.print();
  }

  public tinhTien(){
    this.sum = this.shopService.tinhTien()
  }
  
}
