import { Component, Input } from '@angular/core';
import { ItemNavBar } from './model/item-nav-bar';
import { menu } from './model/menu';
import { MenuItemName } from './model/menu-item-name.enum';
import { NavBarService } from './nav-bar.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
    @Input() opened: boolean;

    menuItems: ItemNavBar[] = menu;
    itemNames = MenuItemName;

    constructor(private readonly service: NavBarService) {}

    selectMenu(item: ItemNavBar): void {
        this.service.select(item);
    }

    public get selectedItemName(): string {
        return this.service.selectedItem?.name;
    }
}
