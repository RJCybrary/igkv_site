import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearchComponent } from './research.component';
import { SponcerdProjectComponent } from './sponcerd-project/sponcerd-project.component';
import { PatentComponent } from './patent/patent.component';
import { MultiDiciplinaryComponent } from './multi-diciplinary/multi-diciplinary.component';
import { InternationalAdmissionComponent } from './international-admission/international-admission.component';
import { InternationalOverviewComponent } from './international-overview/international-overview.component';
import { AticComponent } from './atic/atic.component';
import { KisanMelaComponent } from './kisan-mela/kisan-mela.component';
import { FldComponent } from './fld/fld.component';
import { ExtentionBooksComponent } from './extention-books/extention-books.component';
import { ExtentionNewsLetterComponent } from './extention-news-letter/extention-news-letter.component';
import { ExtentionResearchPaperComponent } from './extention-research-paper/extention-research-paper.component';
import { LibraryOverviewComponent } from './campusLife-components/library-overview/library-overview.component';
import { FacilitiesOperationsComponent } from './campusLife-components/facilities-operations/facilities-operations.component';
import { PublicServiceComponent } from './campusLife-components/public-service/public-service.component';
import { KvkHomeComponent } from './kvk-home/kvk-home.component';
import { StudentsAffairsComponent } from './campusLife-components/students-affairs/students-affairs.component';
import { SportsComponent } from './campusLife-components/sports/sports.component';
import { NccComponent } from './campusLife-components/ncc/ncc.component';
import { NssComponent } from './campusLife-components/nss/nss.component';
import { AccommodationComponent } from './campusLife-components/accommodation/accommodation.component';
import { BoysHostelComponent } from './campusLife-components/boys-hostel/boys-hostel.component';
import { GirlsHostelComponent } from './campusLife-components/girls-hostel/girls-hostel.component';
import { VarietyReleasedComponent } from './variety-released/variety-released.component';
import { SuccesStoryComponent } from './succes-story/succes-story.component';
import { KvkDetailComponent } from './kvk-detail/kvk-detail.component';
import { DirectorMasterComponent } from '../common-components/director-master/director-master.component';
import { OurProjectComponent } from './our-project/our-project.component';
import { EmployeeProfileComponent } from '../common-components/employee-profile/employee-profile.component';
import { SafatySecurityComponent } from './campusLife-components/safaty-security/safaty-security.component';
import { CounterComponent } from './counter/counter.component';
import { StaffComponent } from '../about/academic-components/staff/staff.component';
import { SitemapComponent } from '../common-components/sitemap/sitemap.component';
import { ActivitesComponent } from '../about/activites/activites.component';
import { ActivitesDetailsComponent } from '../about/activites-details/activites-details.component';
import { GallaryComponent } from '../about/gallary/gallary.component';
import { GalleryDetailComponent } from '../common-components/gallery-detail/gallery-detail.component';
import { RLabFacilitiesComponent } from './r-lab-facilities/r-lab-facilities.component';
import { FarmingComponent } from './farming/farming.component';
import { IntProgrammFeeComponent } from './int-programm-fee/int-programm-fee.component';
import { IntWhowtoApplyComponent } from './int-whowto-apply/int-whowto-apply.component';
import { IntAdmissionRuleComponent } from './int-admission-rule/int-admission-rule.component';
import { IntPaymentProcedureComponent } from './int-payment-procedure/int-payment-procedure.component';
import { IntPreArrivalComponent } from './int-pre-arrival/int-pre-arrival.component';
import { COAComponent } from './coa/coa.component';
import { IntPostArrivalComponent } from './int-post-arrival/int-post-arrival.component';
import { IntVisaGuidlineComponent } from './int-visa-guidline/int-visa-guidline.component';
import { IntStudyAbrodOverviewComponent } from './int-study-abrod-overview/int-study-abrod-overview.component';
import { FacilitiesInfrastructureDetailsComponent } from './campusLife-components/facilities-infrastructure-details/facilities-infrastructure-details.component';
import { ArtCultureComponent } from './campusLife-components/art-culture/art-culture.component';
import { ArtCultureDetailsComponent } from './campusLife-components/art-culture-details/art-culture-details.component';
import { CopyTechComponent } from './copy-tech/copy-tech.component';
import { IntExamineInstructionComponent } from './int-examine-instruction/int-examine-instruction.component';
import { IntProgramsComponent } from './int-programs/int-programs.component';
import { NssDetailsComponent } from './campusLife-components/nss-details/nss-details.component';
import { PublicationComponent } from './publication/publication.component';
import { MobileAppsComponent } from './mobile-apps/mobile-apps.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { PhytosanitoryLabComponent } from './phytosanitory-lab/phytosanitory-lab.component';
import { ErrorPageDataNotFoundComponent } from '../common-components/error-page-data-not-found/error-page-data-not-found.component';
import { GuestHouseComponent } from './guest-house/guest-house.component';
import { DirectorActivitiesViewmoreComponent } from '../about/director-activities-viewmore/director-activities-viewmore.component';
import { DirectorEventsViewmoreComponent } from '../about/director-events-viewmore/director-events-viewmore.component';
import { DirectorAwardsViewmoreComponent } from '../about/director-awards-viewmore/director-awards-viewmore.component';
import { KvkAwardViewmoreComponent } from './kvk-award-viewmore/kvk-award-viewmore.component';
import { KvkActivitiesDetailsComponent } from './kvk-activities-details/kvk-activities-details.component';
import { KvkActivitiesViewmoreComponent } from './kvk-activities-viewmore/kvk-activities-viewmore.component';
import { KvkEventsViewmoreComponent } from './kvk-events-viewmore/kvk-events-viewmore.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { InfrastructureCommonDetailComponent } from '../common-components/infrastructure-common-detail/infrastructure-common-detail.component';
import { KvkFldComponent } from './kvk-fld/kvk-fld.component';
import { KvkTrainingComponent } from './kvk-training/kvk-training.component';
import { CopyrightsComponent } from './copyrights/copyrights.component';
import { OfficeWiseProjectComponent } from '../shared/office-wise-project/office-wise-project.component';
import { MainNotificationComponent } from '../about/main-notification/main-notification.component';
import { KvkInfrastrutureTypeComponent } from './kvk-infrastruture-type/kvk-infrastruture-type.component';
import { KvkInfrastrutureListComponent } from './kvk-infrastruture-list/kvk-infrastruture-list.component';
import { KvkInfrastrutureDetailsComponent } from './kvk-infrastruture-details/kvk-infrastruture-details.component';
import { KvkFarmerCornerComponent } from './kvk-farmer-corner/kvk-farmer-corner.component';
import { KvkRecruitmentComponent } from './kvk-recruitment/kvk-recruitment.component';
import { DRSPUBLICATIONComponent } from './drs-publication/drs-publication.component';
import { DesPublicationComponent } from './des-publication/des-publication.component';
import { FarmResStationComponent } from './farm-res-station/farm-res-station.component';
import { AdharVerificationComponent } from './adhar-verification/adhar-verification.component';

const routes: Routes = [{ path: '', component: ResearchComponent,
 children : [  
              {path: 'director/:id', component:DirectorMasterComponent},  
              {path: 'director/:id/activities', component:DirectorActivitiesViewmoreComponent},  
              {path: 'director/:id/events', component:DirectorEventsViewmoreComponent},  
              {path: 'director/:id/awards', component:DirectorAwardsViewmoreComponent},  
              {path: 'lab&Facilities/:id', component:RLabFacilitiesComponent},  
              {path: 'sponcerd-project', component:SponcerdProjectComponent}, 
              {path: 'patent', component:PatentComponent}, 
              {path: 'multi-diciplinary', component:MultiDiciplinaryComponent}, 
              {path: 'international-admission', component:InternationalAdmissionComponent}, 
              {path: 'international-overview', component:InternationalOverviewComponent}, 
              {path: 'atic', component:AticComponent}, 
              {path: 'adhar-varification', component:AdharVerificationComponent},  
              {path: 'kisan-mela', component:KisanMelaComponent}, 
              {path: 'fld/:id', component:FldComponent}, 
              {path: 'training/:id', component:FldComponent}, 
              {path: 'extention-research-paper', component:ExtentionBooksComponent},
              {path: 'extention-news-letter', component:ExtentionNewsLetterComponent}, 
              {path: 'extention-books', component:ExtentionResearchPaperComponent}, 
              {path: 'library-overview', component:LibraryOverviewComponent}, 
              {path: 'public-service', component:PublicServiceComponent}, 
              {path: 'public-service/ncc-overview', component:NccComponent}, 
              {path: 'public-service/nss-overview', component:NssComponent},
              {path: 'farm-Research/:id', component:FarmResStationComponent}, 
              {path: 'kvk-home', component:KvkHomeComponent}, 
              {path: 'publication/:id1/:id2', component:PublicationComponent },
              { path: 'kvk-home/kvk/:id', component: KvkDetailComponent, children: [
                {path: 'cont/staff-details/:id/employeeProfile/:id', component:EmployeeProfileComponent},
                {path: 'cont/employeeProfile/:id', component:EmployeeProfileComponent},
                {path: 'cont/staff-details/:id', component: StaffComponent },
                {path: 'cont/activities-details/:id', component: KvkActivitiesDetailsComponent },
                {path: 'cont/awards/:id', component:ActivitesComponent },
                {path: 'cont/awards-list', component:KvkAwardViewmoreComponent },
                {path: 'cont/activities-list', component:KvkActivitiesViewmoreComponent },
                {path: 'cont/events-list', component:KvkEventsViewmoreComponent },
                {path: 'cont/Events/:id', component:ActivitesComponent },
                {path: 'cont/Training/:id', component:KvkTrainingComponent },
                {path: 'cont/notification/:id1/:id2/:id3/:id4', component:MainNotificationComponent },
                {path: 'cont/notification/:id1', component:MainNotificationComponent },
                {path: 'cont/infrastruturetype/:id', component:KvkInfrastrutureTypeComponent},
                {path: 'cont/infrastruturelist/:id1/:id2', component:KvkInfrastrutureListComponent},
                {path: 'cont/details/:id1/:id2/:id3', component:KvkInfrastrutureDetailsComponent },
                {path: 'cont/farmer-corner/:id1/:id2', component:KvkFarmerCornerComponent },
                {path: 'cont/recruitment/:id', component:KvkRecruitmentComponent },

                // {path: 'cont/FLD/:id', component:ActivitesComponent },
                {path: 'cont/fld/:id', component:KvkFldComponent },
                {path: 'cont/project/:id', component:OfficeWiseProjectComponent },
                {path: 'cont/publication/:id1/:id2', component:PublicationComponent },
                {path: 'cont/awards/:id/awards-details/:id', component:ActivitesDetailsComponent },
                {path: 'activities-details/:id', component:ActivitesDetailsComponent },
                {path: 'cont/gallery/:id', component:GallaryComponent },
                {path: 'cont/gallery/gallery-detail/:id', component:GalleryDetailComponent },
                {path: 'cont/sucessStories', component:SuccesStoryComponent },
                {path:'cont/404',component:ErrorPageDataNotFoundComponent},
             ]},
              {path: 'students-affairs', component:StudentsAffairsComponent }, 
              {path: 'sports-overview', component:SportsComponent}, 
              {path: 'sports-overview/ActivityDetail/:id', component:ActivitesDetailsComponent}, 
              {path: 'ncc-overview', component:NccComponent}, 
              {path: 'nss-overview', component:NssComponent}, 
              {path: 'nss-program-details', component:NssDetailsComponent},
              {path: 'accommodation-overview', component:AccommodationComponent}, 
              {path: 'boys-hostel-overview', component:BoysHostelComponent}, 
              {path: 'girls-hostel-overview', component:GirlsHostelComponent}, 
              {path: 'varietyReleased', component:VarietyReleasedComponent}, 
              {path: 'succesStory', component:SuccesStoryComponent}, 
              {path: 'ourProject/:id', component:OurProjectComponent}, 
              {path: 'sponcerd-project/ourProject/:id', component:OurProjectComponent}, 
              {path: 'sponcerd-project/ourProject/:id/projectDetail/:id2', component:ProjectDetailComponent}, 
              {path: 'Mobile-apps/:id', component:MobileAppsComponent},  
              {path: 'safety-security', component:SafatySecurityComponent},
              {path: 'counter', component:CounterComponent},
              {path: 'sitemap', component:SitemapComponent},
              {path: 'publication/:id', component:PublicationComponent},
              {path: 'drs-publication/:id', component:DRSPUBLICATIONComponent},
              {path: 'des-publication/:id', component:DesPublicationComponent},
              {path: 'facilities-infrastructure', component:FacilitiesOperationsComponent},   
              {path: 'facilities-/details/:id1/:id2/:id3',component:FacilitiesInfrastructureDetailsComponent},  
              {path: 'infrastructure-common/details/:id1/:id2/:id3',component:FacilitiesInfrastructureDetailsComponent},  
              {path: 'infrastructure-common/details/:id1/:id2',component:InfrastructureCommonDetailComponent},  
              {path: 'art-culture', component:ArtCultureComponent},
              {path: 'art-culture/details/:id', component:ArtCultureDetailsComponent},
              {path: 'farming/:id', component:FarmingComponent},  
              {path: 'programfee', component:IntProgrammFeeComponent}, 
              {path: 'how-to-apply', component:IntWhowtoApplyComponent}, 
              {path: 'admission-rule', component:IntAdmissionRuleComponent},  
              {path: 'Payement-procedure', component:IntPaymentProcedureComponent},  
              {path: 'Pre-arrival', component:IntPreArrivalComponent},  
              {path: 'Post-arrival', component:IntPostArrivalComponent},
              {path: 'visa-guidlines', component:IntVisaGuidlineComponent},
              {path: 'abroad-overview', component:IntStudyAbrodOverviewComponent},
              {path: 'Examination', component:IntExamineInstructionComponent},
              {path: 'Programs', component:IntProgramsComponent},
              {path: 'Technologies-Developed', component:CopyTechComponent},
              {path: 'Copyright', component:CopyTechComponent},
              {path: 'Copy', component:CopyrightsComponent},
              {path: 'err404', component:ErrorPageDataNotFoundComponent},
              {path: 'coa/:id', component:COAComponent},  
              {path: 'phytosanitary-lab', component:PhytosanitoryLabComponent},  
              {path: 'guest-house', component:GuestHouseComponent},  
             

        ] },
    ];
      

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResearchRoutingModule { }