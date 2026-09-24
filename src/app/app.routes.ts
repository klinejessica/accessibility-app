import { Routes } from '@angular/router';
import { Quiz } from './quiz/quiz';
import { Payment } from './payment/payment';
import { Aria } from './aria/aria';


export const routes: Routes = [
    {path: 'quiz', component: Quiz},
    {path: 'payment', component: Payment },
    {path: 'aria', component: Aria}
];
