import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import MOCK_DATA from './data/user.json';

import MOCK_AGENT from './data/agents.json'

// import MOCK_TRANSCRIPT from './data/transcript-mock.data.json'

import MOCK_CALLS from './data/calls-mock-data.json'; 

import User from '../../models/user';

import Agent from '../../models/agent';



@Injectable()
export default class UserServiceMock {

    getCurrentLoggedInUser(): Observable<User | null> {
        return of(MOCK_DATA);
    }

    // Return All Agent from JSON_DATA
    getAllSystemAgents(): Observable<Agent | null>{
        return of(MOCK_AGENT);
    }

    // Return All Call JSON_DATA
    getAllCalls(): Observable<any>{
        return of(MOCK_CALLS);
    }

    // getAllTranscript(): Observable<any>{
    //     return of(MOCK_TRANSCRIPT);
    // }
}
