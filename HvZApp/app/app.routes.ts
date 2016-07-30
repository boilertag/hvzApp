import { provideRouter, RouterConfig }  from '@angular/router';
import { mainPageComponent } from './app.mainPage';
import { statsComponent } from './app.statistics';
import { mapComponent } from './app.gameMap';
import {rulesComponent} from './app.liveRules';
import {missionComponent} from './app.mission';
import {loginComponent} from './app.login';

const routes: RouterConfig = [
    {
        path: 'mainPage',
        component: mainPageComponent
    },
    {
        path: 'gameMap',
        component: mapComponent
    },
    {
        path: 'liveRules',
        component: rulesComponent
    },
    {
        path: 'mission',
        component: missionComponent
    },
    {
        path: 'stats',
        component: statsComponent
    },
    {
        path: 'login',
        component: loginComponent
    },
    {
        path: '',
        redirectTo: '/mainPage',
        pathMatch: 'full'
    },

];

export const appRouterProviders = [
    provideRouter(routes)
];
