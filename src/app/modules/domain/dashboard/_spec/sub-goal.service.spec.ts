import { TestBed } from '@angular/core/testing';

import { SubGoalService } from '../sub-goal/sub-goal.service';

describe('SubGoalService', () => {
    let service: SubGoalService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SubGoalService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
