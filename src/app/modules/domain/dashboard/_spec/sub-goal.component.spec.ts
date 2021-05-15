import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubGoalComponent } from '../sub-goal/sub-goal.component';

describe('SubGoalComponent', () => {
    let component: SubGoalComponent;
    let fixture: ComponentFixture<SubGoalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ SubGoalComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SubGoalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
