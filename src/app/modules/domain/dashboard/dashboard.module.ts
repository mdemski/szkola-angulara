import { NgModule } from '@angular/core';
import { MainGoalComponent } from './main-goal/main-goal.component';
import { DashboardComponent } from './dashboard.component';
import { SubGoalComponent } from './sub-goal/sub-goal.component';
import { UiModule } from '../../ui/ui.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        MainGoalComponent,
        DashboardComponent,
        SubGoalComponent,
    ],
    imports: [
        BrowserModule,
        UiModule
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule { }
