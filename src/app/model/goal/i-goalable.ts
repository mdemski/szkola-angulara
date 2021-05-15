export interface IGoalable<T> {
    name: string;
    deadline: Date;
    priority: T;
}
