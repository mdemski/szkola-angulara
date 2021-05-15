import { ItemNavBar } from './item-nav-bar';
import { MenuItemName } from './menu-item-name.enum';

export const menu: ItemNavBar[] = [
    {
        name: MenuItemName.dashboard,
        icon: 'dashboard'
    },
    {
        name: MenuItemName.todo,
        icon: 'date_range'
    },
    {
        name: MenuItemName.userInfo,
        icon: 'face'
    },
];
