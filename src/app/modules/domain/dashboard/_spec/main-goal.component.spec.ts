import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGoalComponent } from '../main-goal/main-goal.component';

describe('MainGoalComponent', () => {
    let component: MainGoalComponent;
    let fixture: ComponentFixture<MainGoalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ MainGoalComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MainGoalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
