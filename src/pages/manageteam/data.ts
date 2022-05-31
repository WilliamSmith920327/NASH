import { DepartmentStats, Dispatch, Assistent, Driver } from './types';

const departmentStats: DepartmentStats[] = [
    {
        name: 'DEPARTMENT1',
        point: 15847,
        leader: 'leader1',
        dispatch: 4,
        assistent: 6,
        driver: 15,
        score: 4.3
    },
    {
        name: 'DEPARTMENT2',
        point: 57391,
        leader: 'leader2',
        dispatch: 5,
        assistent: 3,
        driver: 20,
        score: 5.4
    }
];

const dispatch: Dispatch[] =[
    {
        name: 'dispatch1',
        age: 28
    },
    {
        name: 'dispatch2',
        age: 33
    },
    {
        name: 'dispatch3',
        age: 23
    },
    {
        name: 'dispatch4',
        age: 33
    },
    {
        name: 'dispatch5',
        age: 31
    },
    {
        name: 'dispatch6',
        age: 40
    },
];

const assistent: Assistent[] =[
    {
        name: 'Assistent1'
    },
    {
        name: 'Assistent2'
    },
    {
        name: 'Assistent3'
    },
    {
        name: 'Assistent4'
    },
    {
        name: 'Assistent5'
    }
];

const driver: Driver[] =[
    {
        name: 'Driver1'
    },
    {
        name: 'Driver2'
    },
    {
        name: 'Driver3'
    },
    {
        name: 'Driver4'
    },
    {
        name: 'Driver5'
    }
]

export {departmentStats, dispatch, assistent, driver};