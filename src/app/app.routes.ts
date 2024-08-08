import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path:'about',component: AboutComponent},
    {path:'portfolio',component: PortfolioComponent},
    {path:'contact',component: ContactComponent},
    {path:'gallery',component: GalleryComponent},
    {path:'**',component:HomeComponent}
];
