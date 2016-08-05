import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { HTTP_PROVIDERS,BrowserXhr } from '@angular/http';
import { disableDeprecatedForms,provideForms } from '@angular/forms';
import { CustomBrowserXhr } from './tool/custom.browserxhr';

bootstrap(AppComponent,[appRouterProviders,HTTP_PROVIDERS,disableDeprecatedForms(),provideForms(),{provide:BrowserXhr,useClass:CustomBrowserXhr}]).catch((err:any)=>console.error(err));