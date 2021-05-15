import { Component } from '@angular/core';
import { MainGoal } from 'src/app/model/goal/main-goal';
import { DashboardService } from './dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    constructor(private readonly service: DashboardService) {
    }

    public get mainGoals(): MainGoal[] {
        return this.service.mainGoals;
    }
}
