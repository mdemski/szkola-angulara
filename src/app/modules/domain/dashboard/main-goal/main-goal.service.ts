import { Injectable } from '@angular/core';
import { Order } from 'src/app/model/goal/order.enum';
import { GoalService } from '../service/goal-service';

@Injectable()
export class MainGoalService extends GoalService<Order> {
    constructor() {
        super();
    }

    achieve(): void {
        throw new Error('Method not implemented.');
    }
}
