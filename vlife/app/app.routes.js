"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var profile_component_1 = require('./role/profile.component');
var property_component_1 = require('./role/property.component');
var toreincarnate_component_1 = require('./role/toreincarnate.component');
var region_component_1 = require('./region/region.component');
var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent
    },
    {
        path: 'property',
        component: property_component_1.PropertyComponent
    }, {
        path: 'toreincarnate',
        component: toreincarnate_component_1.ToReincarnateComponent
    }, {
        path: 'region',
        component: region_component_1.RegionComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map