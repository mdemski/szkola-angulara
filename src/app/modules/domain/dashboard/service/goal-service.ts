import { IGoalable } from '../../../../model/goal/i-goalable';

export abstract class GoalService<T> {
    protected editName(item: IGoalable<T>, newName: string): void {
        item.name = newName;
    }
    abstract achieve(): void;
}
