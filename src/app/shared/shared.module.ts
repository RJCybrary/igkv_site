import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { FooterComponent } from '../common-components/footer/footer.component';
import { BannerComponent } from '../common-components/banner/banner.component';
import { ActivityBannerComponent } from '../common-components/activity-banner/activity-banner.component';
import { OfficeCarouselComponent } from '../common-components/office-carousel/office-carousel.component';
import { ContactUsComponent } from '../common-components/contact-us/contact-us.component';
import { OverviewComponent } from '../common-components/overview/overview.component';
import { MessageComponent } from '../common-components/message/message.component';
import { CountComponent } from '../common-components/count/count.component';
import { StaffTestimonialComponent } from '../common-components/staff-testimonial/staff-testimonial.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivityCommonComponent } from '../common-components/activity-common/activity-common.component';
import { InfrastructureCommonComponent } from '../common-components/infrastructure-common/infrastructure-common.component';
import { AwardCommonComponent } from '../common-components/award-common/award-common.component';
import { HomeGallaryComponent } from '../common-components/home-gallary/home-gallary.component';
import { KvkEventsCommonComponent } from '../common-components/kvk-events-common/kvk-events-common.component';
import { EmployeeProfileComponent } from '../common-components/employee-profile/employee-profile.component';
import { SlideshowComponent } from '../common-components/slideshow/slideshow.component';
import { HomeNotificatonComponent } from '../common-components/home-notificaton/home-notificaton.component';
import { WhoIsWhoListComponent } from '../common-components/who-is-who-list/who-is-who-list.component';
import { HomeSliderComponent } from '../common-components/home-slider/home-slider.component';
import { ActivitesComponent } from '../about/activites/activites.component';
import { ActivitesDetailsComponent } from '../about/activites-details/activites-details.component';
import { GallaryComponent } from '../about/gallary/gallary.component';
import { GalleryDetailComponent } from '../common-components/gallery-detail/gallery-detail.component';
import { VcMenubarComponent } from '../about/vc-menubar/vc-menubar.component';
import { MaterialcomponentsModule } from '../materialcomponents/materialcomponents.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { LoderComponent } from '../common-components/loder/loder.component';
import { AntiRaggingCommitteeComponent } from '../common-components/anti-ragging-committee/anti-ragging-committee.component';
import { SmallNavbarComponent } from '../common-components/small-navbar/small-navbar.component';
import { TopbarComponent } from '../common-components/topbar/topbar.component';
import { SearchFilterComponent } from '../common-components/search-filter/search-filter.component';
import { SearchFilterNewsComponent } from '../common-components/search-filter-news/search-filter-news.component';
import { OfficeWiseProjectComponent } from './office-wise-project/office-wise-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from '../common-components/pagination/pagination.component';
import { UgcHeiComponent } from './ugc-hei/ugc-hei.component';
import { NoDataComponent } from '../common-components/no-data/no-data.component';
import { NIRFComponent } from './nirf/nirf.component';
import { PublicaionDashboardComponent } from './publicaion-dashboard/publicaion-dashboard.component';


@NgModule({
  declarations: [
    SharedComponent,
    TopbarComponent,
    FooterComponent,
    OfficeCarouselComponent,
    BannerComponent,
    ActivityBannerComponent,
    ContactUsComponent,
    OverviewComponent,
    MessageComponent,
    CountComponent,
    StaffTestimonialComponent,
    ActivityCommonComponent,
    InfrastructureCommonComponent,
    AwardCommonComponent,
    HomeGallaryComponent,
    KvkEventsCommonComponent,
    EmployeeProfileComponent,
    SlideshowComponent,
    HomeNotificatonComponent,
    WhoIsWhoListComponent,
    HomeSliderComponent,
    ActivitesComponent,
    ActivitesDetailsComponent,
    GallaryComponent,
    GalleryDetailComponent,
    VcMenubarComponent,
    AntiRaggingCommitteeComponent,
    LoderComponent,
    SmallNavbarComponent,
    SearchFilterComponent,
    SearchFilterNewsComponent,
    OfficeWiseProjectComponent,
    PaginationComponent,
    UgcHeiComponent,
    NoDataComponent,
    NIRFComponent,
    PublicaionDashboardComponent

  ],
  imports: [CommonModule,
     SharedRoutingModule,
      NgbModule,
      ReactiveFormsModule,
      MaterialcomponentsModule,
        // ngx-translate and the loader module
     TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    ],
  exports: [
    TopbarComponent,
    FooterComponent,
    BannerComponent,
    ActivityBannerComponent,
    OfficeCarouselComponent,
    ContactUsComponent,
    OverviewComponent,
    MessageComponent,
    CountComponent,
    StaffTestimonialComponent,
    ActivityCommonComponent,
    InfrastructureCommonComponent,
    AwardCommonComponent,
    HomeGallaryComponent,
    KvkEventsCommonComponent,
    SlideshowComponent,
    HomeNotificatonComponent,
    WhoIsWhoListComponent,
    HomeSliderComponent,
    ActivitesComponent,
    ActivitesDetailsComponent,
    GallaryComponent,
    GalleryDetailComponent,
    VcMenubarComponent,
    LoderComponent,
    SmallNavbarComponent,
    SearchFilterComponent,
    SearchFilterNewsComponent,
    PaginationComponent,
    NoDataComponent

  ],

  
})
export class SharedModule {}

// Translator required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}