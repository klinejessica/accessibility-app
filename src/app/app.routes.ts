import { Routes } from '@angular/router';
import { Quiz } from './quiz/quiz';
import { Payment } from './payment/payment';
import { Inputs } from './inputs/inputs';


export const routes: Routes = [
    {path: 'quiz', component: Quiz},
    {path: 'payment', component: Payment },
    {path: 'inputs', component: Inputs}
];
