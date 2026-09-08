import { Routes } from '@angular/router';
import { GameSelectionPageComponent } from '@ui/adapter/input/app/components/pages/game-selection-page/game-selection-page.component';

import { IntroPageComponent } from '@ui/adapter/input/app/components/pages/intro-page/intro-page.component';

export class RouterConfig {

    private readonly routes: Routes;

    constructor() {
        this.routes = [
            { 
                path: '', 
                component: IntroPageComponent, 
                title: 'Game Drawer - Intro Page'
            },
            {
                path: 'game-selection',
                component: GameSelectionPageComponent,
                title: 'Game Drawer - Game Selection Page'
            },
            {
                path: '**',
                redirectTo: '',
                pathMatch: 'full'
            }
        ];
    }

    public getRoutes(): Routes { return this.routes; }
}
