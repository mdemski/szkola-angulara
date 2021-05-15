import { Injectable } from '@angular/core';
import { ItemNavBar } from './model/item-nav-bar';

@Injectable({
    providedIn: 'root'
})
export class NavBarService {
    selectedItem: ItemNavBar;
    constructor() { }

    select(item: ItemNavBar): void {
        this.selectedItem = item;
    }

}
