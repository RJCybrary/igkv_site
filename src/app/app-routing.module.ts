import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './common-components/start-page/start-page.component';
import { ErrorPageDataNotFoundComponent } from './common-components/error-page-data-not-found/error-page-data-not-found.component';
import { ComingSoonComponent } from './common-components/coming-soon/coming-soon.component';
import { ClgLabComponent } from './about/clg-lab/clg-lab.component';
import { OfficeHeadComponent } from './common-components/office-head/office-head.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SmallNavbarComponent } from './common-components/small-navbar/small-navbar.component';
import { UgcHeiComponent } from './shared/ugc-hei/ugc-hei.component';
import { HelpDeskComponent } from './common-components/help-desk/help-desk.component';
import { NIRFComponent } from './shared/nirf/nirf.component';
import { PathLocationStrategy } from '@angular/common';


const routes: Routes =  [ { path: '', component: StartPageComponent},
  {path: 'login' , component:SmallNavbarComponent},
  {path: 'contact' , component:HelpDeskComponent},
  {path: 'UGC-HEI' , component:UgcHeiComponent,title:'IGKV-UGC-HEI' },
  {path: 'NIRF' , component:NIRFComponent},
{ path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
{ path: 'research', loadChildren: () => import('./research/research.module').then(m => m.ResearchModule) }, 
{ path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
{ path: 'error-page', component: ErrorPageDataNotFoundComponent },
{ path: 'coming-soon', component: ComingSoonComponent },
{path:'clg-labFacilities',component:ClgLabComponent},
{path:'**',component:ErrorPageDataNotFoundComponent},
{path: 'officeHead' , component:OfficeHeadComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }
