import { TestBed } from '@angular/core/testing';

import { MainGoalService } from '../main-goal/main-goal.service';

describe('MainGoalService', () => {
    let service: MainGoalService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MainGoalService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
