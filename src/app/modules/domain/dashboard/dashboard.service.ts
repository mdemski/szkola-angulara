import { Injectable } from '@angular/core';
import { MainGoal } from '../../../model/goal/main-goal';
import { Priority } from '../../../model/goal/priority.enum';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    public mainGoals: MainGoal[];

    constructor() {
        this.mainGoals = this.fetchMainGoals();
    }

    fetchMainGoals(): MainGoal[] {
        // GET MainGoalList from API
        return [
            {
                name: 'Became Angular Master',
                deadline: new Date('2021-06-30'),
                priority: undefined,
                subgoals: [{
                    name: 'Subgoal1',
                    deadline: new Date('2021-05-30'),
                    priority: Priority.high
                },
                {
                    name: 'Subgoal2',
                    deadline: new Date('2021-06-30'),
                    priority: Priority.medium
                }]
            },
            {
                name: 'Cel2',
                deadline: new Date('2021-06-30'),
                priority: undefined,
                subgoals: [{
                    name: 'Subgoal1',
                    deadline: new Date('2021-05-30'),
                    priority: Priority.high
                },
                {
                    name: 'Subgoal2',
                    deadline: new Date('2021-06-30'),
                    priority: Priority.medium
                }]
            }];
    }
}
