import { provideRouter,RouterConfig } from '@angular/router';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';

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
	}
];

export const appRouterProviders = [
	provideRouter(routes)
];