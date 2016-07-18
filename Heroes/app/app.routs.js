"use strict";
var router_1 = require('@angular/router');
var hero_detail_component_1 = require('./hero-detail.component');
var routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routs.js.map