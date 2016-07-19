"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var http_1 = require('@angular/http');
//import { XHRBackend } from '@angular/http';
//import { InMemoryBackendService,SEED_DATA } from 'angular2-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [app_routes_1.appRouterProviders, http_1.HTTP_PROVIDERS]); //{provide:XHRBackend,useClass:InMemoryBackendService},{provide:SEED_DATA,useClass:InMemoryDataService}
//# sourceMappingURL=main.js.map