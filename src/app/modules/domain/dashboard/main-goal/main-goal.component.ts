import { Component, Input, OnInit } from '@angular/core';
import { MainGoal } from 'src/app/model/goal/main-goal';
import { Priority } from 'src/app/model/goal/priority.enum';
import { DashboardService } from '../dashboard.service';
import { MainGoalService } from './main-goal.service';

@Component({
    selector: 'app-main-goal',
    templateUrl: './main-goal.component.html',
    styleUrls: ['./main-goal.component.scss'],
    providers: [ MainGoalService ]
})
export class MainGoalComponent {

    @Input() item: MainGoal;

    constructor(
        public readonly mainGoalService: MainGoalService) {
    }


}
