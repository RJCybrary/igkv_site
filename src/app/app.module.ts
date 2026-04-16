import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StartPageComponent } from './common-components/start-page/start-page.component';
import { HeaderComponent } from './common-components/header/header.component';
import { HomeNewsComponent } from './common-components/home-news/home-news.component';
import { HomeEventComponent } from './common-components/home-event/home-event.component';
import { HomeContentComponent } from './common-components/home-content/home-content.component';
import { SharedModule } from './shared/shared.module';
import { SliderComponent } from './common-components/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialcomponentsModule } from './materialcomponents/materialcomponents.module';
import { DirectorMasterComponent } from './common-components/director-master/director-master.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ErrorPageDataNotFoundComponent } from './common-components/error-page-data-not-found/error-page-data-not-found.component';
import { ComingSoonComponent } from './common-components/coming-soon/coming-soon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OfficeHeadComponent } from './common-components/office-head/office-head.component';
import { LeaderMessageComponent } from './common-components/leader-message/leader-message.component';
import { HomeResearchInfoComponent } from './common-components/home-research-info/home-research-info.component';
import { LetestNewsMarqeeComponent } from './common-components/letest-news-marqee/letest-news-marqee.component';
import { HappeningsEventComponent } from './common-components/happenings-event/happenings-event.component';
import { ChatbotComponent } from './common-components/chatbot/chatbot.component';
import { InfrastructureCommonDetailComponent } from './common-components/infrastructure-common-detail/infrastructure-common-detail.component';
import { MenuSearchComponent } from './common-components/menu-search/menu-search.component';
import { environment } from 'src/environments/environment';
import { HelpDeskComponent } from './common-components/help-desk/help-desk.component';
// import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  
  declarations: [
    AppComponent,
    StartPageComponent,
    HeaderComponent,
    HomeNewsComponent,
    HomeEventComponent,
    HomeContentComponent,
    SliderComponent,
    DirectorMasterComponent,
    ErrorPageDataNotFoundComponent,
    ComingSoonComponent,
    OfficeHeadComponent,
    LeaderMessageComponent,
    HomeResearchInfoComponent,
    LetestNewsMarqeeComponent,
    HappeningsEventComponent,
    ChatbotComponent,
    InfrastructureCommonDetailComponent,
    MenuSearchComponent,
    HelpDeskComponent,
    // StripHtmlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialcomponentsModule,
    ReactiveFormsModule ,
    // PdfViewerModule,
    //  ngx-translate and the loader module
     TranslateModule.forRoot({
         loader: {
             provide: TranslateLoader,
             useFactory: HttpLoaderFactory,
             deps: [HttpClient]
         }
     }),
  ],
  providers: [DatePipe,
    { provide: MAT_DATE_LOCALE, useValue:'en-GB' },

  ],
  bootstrap: [AppComponent]

})
export class AppModule { }


// Translator required for AOT compilation
// export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  
//   return new TranslateHttpLoader(http);
// }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  const basePath = environment.production ? '/site/assets/i18n/' : '/assets/i18n/';
  return new TranslateHttpLoader(http, basePath, '.json');
}