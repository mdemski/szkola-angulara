import { Component, Input } from '@angular/core';
import { SubGoal } from 'src/app/model/goal/sub-goal';

@Component({
    selector: 'app-sub-goal',
    templateUrl: './sub-goal.component.html',
    styleUrls: ['./sub-goal.component.scss']
})
export class SubGoalComponent {
    @Input() item: SubGoal;
}
