import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item_model';
import { ShopService } from 'src/app/Services/shop.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item !: Item;
  soLuongMua: number = 1;
  constructor(private shopService: ShopService) { 

  }

  ngOnInit(): void {

  }

  public addToCart(item:Item){
    item = {
      ...item,
      soLuongMua: this.soLuongMua
    }
    this.shopService.boGio(item);
  }

}
