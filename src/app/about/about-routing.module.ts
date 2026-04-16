import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { ChancellorComponent } from './chancellor/chancellor.component';
import { ViceChancellorComponent } from './vice-chancellor/vice-chancellor.component';
import { MedicalFacilityComponent } from './medical-facility/medical-facility.component';
import { AboutOverviewComponent } from './about-overview/about-overview.component';
import { WhoIsWhoComponent } from './who-is-who/who-is-who.component';
import { UnivActStatusComponent } from './univ-act-status/univ-act-status.component';
import { CollegeHomeComponent } from './academic-components/college-home/college-home.component';
import { DepartmentComponent } from './academic-components/department/department.component';
import { StaffComponent } from './academic-components/staff/staff.component';
import { GallaryComponent } from './gallary/gallary.component';
import { GalleryDetailComponent } from '../common-components/gallery-detail/gallery-detail.component';
import { AdmissionOverviewComponent } from './academic-components/admission-overview/admission-overview.component';
import { HowToApplyComponent } from './academic-components/how-to-apply/how-to-apply.component';
import { FeeStructureComponent } from './academic-components/fee-structure/fee-structure.component';
import { AdmissionFaqComponent } from './academic-components/admission-faq/admission-faq.component';
import { EmployeeProfileComponent } from '../common-components/employee-profile/employee-profile.component';
import { DepartmentDetailComponent } from './academic-components/department-detail/department-detail.component';
import { WhoIsWhoListComponent } from '../common-components/who-is-who-list/who-is-who-list.component';
import { MainNotificationComponent } from './main-notification/main-notification.component';
import { OfficeMasterComponent } from './office-master/office-master.component';
import { AdministrativeMemberComponent } from './administrative-member/administrative-member.component';
import { DegreeProgrammComponent } from './academic-components/degree-programm/degree-programm.component';
import { CollegeDetailMasterComponent } from './academic-components/college-detail-master/college-detail-master.component';
import { AcademinFacultyComponent } from './academic-components/academin-faculty/academin-faculty.component';
import { ActivitesComponent } from './activites/activites.component';
import { ActivitesDetailsComponent } from './activites-details/activites-details.component';
import { KnowTheVcComponent } from '../common-components/know-the-vc/know-the-vc.component';
import { FormerViceChancellorsComponent } from '../common-components/former-vice-chancellors/former-vice-chancellors.component';
import { VcVisitsComponent } from '../common-components/vc-visits/vc-visits.component';
import { VcSpeechComponent } from './vc-speech/vc-speech.component';
import { VcNewsUpdatesComponent } from './vc-news-updates/vc-news-updates.component';
import { StudentCornerHomeComponent } from './student-corner-home/student-corner-home.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { VcGalleryComponent } from './vc-gallery/vc-gallery.component';
import { AntiRaggingCommitteeComponent } from '../common-components/anti-ragging-committee/anti-ragging-committee.component';
import { StudentListComponent } from './student-list/student-list.component';
import { PolicyComponent } from './policy/policy.component';
import { ClgLabComponent } from './clg-lab/clg-lab.component';
import { RLabFacilitiesComponent } from '../research/r-lab-facilities/r-lab-facilities.component';
import { PhytosanitoryLabComponent } from '../research/phytosanitory-lab/phytosanitory-lab.component';
import { ErrorPageDataNotFoundComponent } from '../common-components/error-page-data-not-found/error-page-data-not-found.component';
import { VideoGallaryComponent } from './video-gallary/video-gallary.component';
import { VcActivityComponent } from './vc-activity/vc-activity.component';
import { VcEventsComponent } from './vc-events/vc-events.component';
import { VcAwardComponent } from './vc-award/vc-award.component';
import { StudentCornerAwardsViewmoreComponent } from './student-corner-awards-viewmore/student-corner-awards-viewmore.component';
import { StudentCornerEventsViewmoreComponent } from './student-corner-events-viewmore/student-corner-events-viewmore.component';
import { StudentCornerActivitiesViewmoreComponent } from './student-corner-activities-viewmore/student-corner-activities-viewmore.component';
import { OfficeActivitiesViewmoreComponent } from './office-activities-viewmore/office-activities-viewmore.component';
import { OfficeAwardsViewmoreComponent } from './office-awards-viewmore/office-awards-viewmore.component';
import { OfficeEventsViewmoreComponent } from './office-events-viewmore/office-events-viewmore.component';
import { OtherNewsComponent } from './other-news/other-news.component';
import { ClgActivitiesDetailsComponent } from './clg-activities-details/clg-activities-details.component';
import { ClgActivitiesViewmoreComponent } from './clg-activities-viewmore/clg-activities-viewmore.component';
import { ClgAwardsViewmoreComponent } from './clg-awards-viewmore/clg-awards-viewmore.component';
import { ClgEventsViewmoreComponent } from './clg-events-viewmore/clg-events-viewmore.component';
import { DepartAwardsViewmoreComponent } from './academic-components/depart-awards-viewmore/depart-awards-viewmore.component';
import { DepartActivitiesDetailsComponent } from './academic-components/depart-activities-details/depart-activities-details.component';
import { DepartEventsViewmoreComponent } from './academic-components/depart-events-viewmore/depart-events-viewmore.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { OfficeCarouselComponent } from '../common-components/office-carousel/office-carousel.component';
import { VcPrintMediaViewmoreComponent } from './vc-print-media-viewmore/vc-print-media-viewmore.component';
import { OfficeWiseProjectComponent } from '../shared/office-wise-project/office-wise-project.component';
import { ClgInfrastrutureListComponent } from './academic-components/clg-infrastruture-list/clg-infrastruture-list.component';
import { ClgCampusLifeComponent } from './academic-components/clg-campus-life/clg-campus-life.component';
import { ClgInfrastructureDetailsComponent } from './academic-components/clg-infrastructure-details/clg-infrastructure-details.component';
import { ClgRecruitmentComponent } from './academic-components/clg-recruitment/clg-recruitment.component';
import { ClgInfrastrutureTypeComponent } from './academic-components/clg-infrastruture-type/clg-infrastruture-type.component';
import { PublicationComponent } from '../research/publication/publication.component';
import { SitemapComponent } from '../common-components/sitemap/sitemap.component';
import { AnnualReportComponent } from './annual-report/annual-report.component';
import { PublicaionDashboardComponent } from '../shared/publicaion-dashboard/publicaion-dashboard.component';
import { AdvisoryNewsComponent } from './advisory-news/advisory-news.component';
import { PathLocationStrategy } from '@angular/common';
import { IgkvAchievementsComponent } from './igkv-achievements/igkv-achievements.component';


const routes: Routes = [{ path: '', component: AboutComponent ,
children : [ {path: 'Chancellor', component:ChancellorComponent},
             {path: 'vice-chancellor', component:ViceChancellorComponent},
             {path: 'test', component:OfficeCarouselComponent},
             {path: 'medical-facility', component:MedicalFacilityComponent},
             {path: 'news/:id1/:id2/:id3/:id4', component:MainNotificationComponent},
             {path: 'news/:id1', component:MainNotificationComponent},
             {path:'other-news/:id',component:OtherNewsComponent},
             {path:'Mou/:id',component:MainNotificationComponent},
             {path:'ServiceRegulation/:id',component:MainNotificationComponent},
             {path: 'about-overview', component:AboutOverviewComponent},
             {path: 'sitemap', component:SitemapComponent},
             {path: 'advisory', component:AdvisoryNewsComponent},
              {path: 'igkv-achievement', component:IgkvAchievementsComponent},
             {path: 'who-is-who', component:WhoIsWhoComponent,
            children:[{path: 'members-list/:id', component:WhoIsWhoListComponent}]},
            {path: 'employeeProfile/:id', component:EmployeeProfileComponent},
            {path: 'Administrative/:id', component:AdministrativeMemberComponent},
            {path: 'Offices/:id', component:OfficeMasterComponent},
            {path: 'Offices/:id/activities', component:OfficeActivitiesViewmoreComponent},
            {path: 'Offices/:id/events', component:OfficeEventsViewmoreComponent},
            {path: 'Offices/:id/awards', component:OfficeAwardsViewmoreComponent},
             {path: 'univ-act', component:UnivActStatusComponent},
             {path: 'college-home', component:CollegeHomeComponent},
             {path:'college-home/college/:id',component:CollegeDetailMasterComponent,
            children:[
              {path: 'cont/staff-details/:id', component: StaffComponent },
              {path: 'cont/staff-details/:id/employeeProfile/:id', component:EmployeeProfileComponent},
              {path: 'cont/employeeProfile/:id', component:EmployeeProfileComponent},
              {path: 'cont/activities-details/:id', component:ClgActivitiesDetailsComponent },
              {path: 'cont/activities-list', component:ClgActivitiesViewmoreComponent },
              {path: 'cont/awards-list', component:ClgAwardsViewmoreComponent },
              {path: 'cont/events-list', component:ClgEventsViewmoreComponent },
              {path: 'cont/project/:id', component:OfficeWiseProjectComponent },
              // {path: 'cont/activities/:id/activities-details/:id', component:ClgActivitiesDetailsComponent },
              {path: 'cont/infrastruturelist/:id1/:id2', component:ClgInfrastrutureListComponent },
              {path: 'cont/notification/:id1/:id2/:id3/:id4', component:MainNotificationComponent },
              {path: 'cont/notification/:id1', component:MainNotificationComponent },
              {path: 'cont/recruitment/:id', component:ClgRecruitmentComponent },
              {path: 'cont/infrastruturetype/:id', component:ClgInfrastrutureTypeComponent},
              {path: 'cont/infrastruturelist/:id1/:id2', component:ClgInfrastrutureListComponent},
              {path: 'cont/publication/:id1/:id2', component:PublicationComponent },
              {path: 'cont/details/:id1/:id2/:id3', component:ClgInfrastructureDetailsComponent },
              {path: 'cont/campus-life/:id1/:id2', component:ClgCampusLifeComponent },
              {path: 'cont/gallery/:id', component:GallaryComponent },
              {path: 'cont/gallery/:id/gallery-detail/:id', component:GalleryDetailComponent },
              {path: 'cont/Lab-Facilities/:id', component:ClgLabComponent},
              {path:'cont/Lab-Facilities/:id/lab&Facilities/:id',component:RLabFacilitiesComponent},
              {path:'cont/Lab-Facilities/:id/phytosanitary-lab',component:PhytosanitoryLabComponent},
              {path:'cont/404',component:ErrorPageDataNotFoundComponent},
            ]},
             {path: 'department', component:DepartmentComponent },
             {path: 'department/departmentDetail/:id', component:DepartmentDetailComponent },
             {path: 'department/departmentDetail/:id/depart-award', component:DepartAwardsViewmoreComponent },
             {path: 'department/departmentDetail/:id/depart-event', component:DepartEventsViewmoreComponent },
             {path: 'department/departmentDetail/:id/activities-details/:id', component:DepartActivitiesDetailsComponent },
             {path: 'college-home/college/:id1/student-list/:id', component:StudentListComponent },
             {path: 'staff/:id', component:StaffComponent},
             {path: 'staff/:id/employeeProfile/:id', component:EmployeeProfileComponent},
             {path: 'employeeProfile/:id', component:EmployeeProfileComponent},
             {path: 'gallery/:id', component:GallaryComponent },
             {path: 'video-gallery/:id', component:VideoGallaryComponent },
             {path: 'gallery/:id/gallery-list/:id', component:GalleryListComponent },
             {path: 'gallery/:id/year/:id', component:GalleryListComponent },
             {path: 'gallery/:id/year/:id/gallery-detail/:id', component:GalleryDetailComponent },
             {path: 'gallery/:id/gallery-list/:id/gallery-detail/:id', component:GalleryDetailComponent },
             {path: 'gallery-detail/:id', component:GalleryDetailComponent},
             {path: 'activities/:id', component:ActivitesComponent },
             {path: 'activities/category/:id', component:ActivitesComponent },
             {path: 'awards-achieve/:id', component:ActivitesComponent },
             {path: 'activities/:id/activities-details/:id', component:ActivitesDetailsComponent },
             {path: 'activities-details/:id', component:ActivitesDetailsComponent },
             {path: 'vc/activities-details/:id', component:ActivitesDetailsComponent },
             {path: 'admission-overview', component:AdmissionOverviewComponent},
             {path: 'how-to-apply', component:HowToApplyComponent},
             {path: 'fee-structure', component:FeeStructureComponent},
             {path: 'faq', component:AdmissionFaqComponent},
             {path: 'mainNotification', component:MainNotificationComponent},
             {path: 'program/:id', component:DegreeProgrammComponent},
             {path:'department/departmentDetail/:id/college/:id',component:CollegeDetailMasterComponent},
             { path: 'faculty/:id', component:AcademinFacultyComponent },
             { path: 'faculty/:id/program/:id', component:DegreeProgrammComponent },
             { path: 'vice-chancellor/know-the-vc', component:KnowTheVcComponent },
             { path: 'vice-chancellor/former-vice-chancellors', component:FormerViceChancellorsComponent},
             { path: 'vice-chancellor/vc-visits', component:VcVisitsComponent},
             { path: 'vice-chancellor/vc-printMedia', component:VcPrintMediaViewmoreComponent},
             { path: 'vice-chancellor/vc-activities', component:VcActivityComponent},
             { path: 'vice-chancellor/vc-events', component:VcEventsComponent},
             { path: 'vice-chancellor/vc-awards', component:VcAwardComponent},
             {path: 'vice-chancellor/vc-gallary/:id', component:GalleryDetailComponent },
             { path: 'vice-chancellor/vc-speeches', component:VcSpeechComponent},
             { path: 'vice-chancellor/vc-updates', component:VcNewsUpdatesComponent},
             { path: 'vice-chancellor/vc-gallery', component:VcGalleryComponent},
             { path: 'vice-chancellor/vc-gallery/details/:id', component:GalleryDetailComponent},
             { path: 'student', component:StudentCornerHomeComponent},
             { path: 'student-awards', component:StudentCornerAwardsViewmoreComponent},
             { path: 'student-events', component:StudentCornerEventsViewmoreComponent},
             { path: 'student-activities', component:StudentCornerActivitiesViewmoreComponent},
             { path: 'anti-ragging-committee', component:AntiRaggingCommitteeComponent},
             { path : 'Policy', component:PolicyComponent},
             { path : 'annual-report', component:AnnualReportComponent},
              { path : 'publication-home', component:PublicaionDashboardComponent},
              ] },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AboutRoutingModule { }