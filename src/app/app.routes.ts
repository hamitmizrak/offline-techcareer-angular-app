import { BlogPageComponent } from './../blog-page/blog-page.component';
import { BlogAboutComponent } from './../blog-about/blog-about.component';
import { BlogMainComponent } from '../blog-main/blog-main.component';
import { Routes } from '@angular/router';

export const routes: Routes = [

    {path:'index',component:BlogMainComponent},
    {path:'',redirectTo:'index', pathMatch:'full' },

    {path:'about',component:BlogAboutComponent},
    {path:'blog',component:BlogPageComponent},
];
