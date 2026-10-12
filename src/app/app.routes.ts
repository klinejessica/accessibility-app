import { Routes } from '@angular/router';
import { Quiz } from './quiz/quiz';
import { Payment } from './payment/payment';
import { Spanish } from './spanish/spanish';


export const routes: Routes = [
    {path: 'quiz', component: Quiz},
    {path: 'payment', component: Payment },
    {path: 'spanish', component: Spanish }
];
