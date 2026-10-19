import { Routes } from '@angular/router';
import { Quiz } from './quiz/quiz';
import { Payment } from './payment/payment';
import { Spanish } from './spanish/spanish';
import { Animales } from './animales/animales';
import { Tenses } from './tenses/tenses';
import { Conjugations } from './conjugations/conjugations';
import { Contact } from './contact/contact';


export const routes: Routes = [
    {path: 'quiz', component: Quiz},
    {path: 'payment', component: Payment },
    {path: 'spanish', component: Spanish },
    {path: 'spanish/animales', component: Animales},
    {path: 'spanish/tenses', component: Tenses},
    {path: 'spanish/conjugations',component: Conjugations},
    {path: 'contact', component: Contact}
];
