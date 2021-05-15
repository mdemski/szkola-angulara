import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './modules/ui/ui.module';
import { NavBarModule } from './modules/nav-bar/nav-bar.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        UiModule,
        NavBarModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [],
    exports: []
})
export class AppModule { }
