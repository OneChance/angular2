import { provideRouter,RouterConfig } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './role/profile.component';
import { PropertyComponent } from './role/property.component';

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