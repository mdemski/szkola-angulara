import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardModule } from '../domain/dashboard/dashboard.module';
import { TodoModule } from '../domain/todo/todo.module';
import { UserInfoModule } from '../domain/user-info/user-info.module';
import { UiModule } from '../ui/ui.module';
import { NavBarComponent } from './nav-bar.component';

@NgModule({
    declarations: [
        NavBarComponent
    ],
    imports: [
        BrowserModule,
        UiModule,
        DashboardModule,
        TodoModule,
        UserInfoModule
    ],
    providers: [],
    entryComponents: [],
    exports: [NavBarComponent]
})
export class NavBarModule { }
