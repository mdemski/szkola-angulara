import { IGoalable } from './i-goalable';
import { Order } from './order.enum';
import { SubGoal } from './sub-goal';

export type MainGoal = IGoalable<Order> & { subgoals: SubGoal[] };
