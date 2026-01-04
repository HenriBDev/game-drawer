import { Routes } from '@angular/router';

export class RouterConfig {

    private readonly routes: Routes;

    constructor() {
        this.routes = [];
    }

    public getRoutes(): Routes { return this.routes; }
}
