import { Injectable } from '@angular/core';
import { Priority } from 'src/app/model/goal/priority.enum';
import { GoalService } from '../service/goal-service';

@Injectable({
    providedIn: 'root'
})
export class SubGoalService extends GoalService<Priority> {
    constructor() {
        super();
    }

    achieve(): void {
        throw new Error('Method not implemented.');
    }

}
