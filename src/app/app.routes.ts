import { Routes } from '@angular/router';
import { Quiz } from './quiz/quiz';
import { Payment } from './payment/payment';
import { Postcard } from './postcard/postcard';


export const routes: Routes = [
    {path: 'quiz', component: Quiz},
    {path: 'payment', component: Payment },
    {path: 'postcard', component: Postcard},
];
