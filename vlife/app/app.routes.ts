import { provideRouter,RouterConfig } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './login/profile.component';
import { PropertyComponent } from './login/property.component';

const routes:RouterConfig = [
	{
		path:'',
		redirectTo:'/login',
		pathMatch:'full'
	},
	{
		path:'login',
		component:LoginComponent
	},
	{
		path:'profile',
		component:ProfileComponent
	},
	{
		path:'property',
		component:PropertyComponent
	}
];

export const appRouterProviders = [
	provideRouter(routes)
];