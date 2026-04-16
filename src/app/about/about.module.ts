import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { WhoIsWhoComponent } from './who-is-who/who-is-who.component';
import { ChancellorComponent } from './chancellor/chancellor.component';
import { ViceChancellorComponent } from './vice-chancellor/vice-chancellor.component';
import { DepartmentComponent } from './academic-components/department/department.component';
import { StaffComponent } from './academic-components/staff/staff.component';
import { UnivActStatusComponent } from './univ-act-status/univ-act-status.component';
import { SharedModule } from '../shared/shared.module';
import { MedicalFacilityComponent } from './medical-facility/medical-facility.component';
import { AboutOverviewComponent } from './about-overview/about-overview.component';
import { CollegeHomeComponent } from './academic-components/college-home/college-home.component';
import { DepartmentDetailComponent } from './academic-components/department-detail/department-detail.component';
import { AdmissionOverviewComponent } from './academic-components/admission-overview/admission-overview.component';
import { HowToApplyComponent } from './academic-components/how-to-apply/how-to-apply.component';
import { FeeStructureComponent } from './academic-components/fee-structure/fee-structure.component';
import { AdmissionFaqComponent } from './academic-components/admission-faq/admission-faq.component';
import { MaterialcomponentsModule } from '../materialcomponents/materialcomponents.module';
import { ClgInfrastructureDetailsComponent } from './academic-components/clg-infrastructure-details/clg-infrastructure-details.component';
import { CollegeOverviewCommonComponent } from './academic-components/college-overview-common/college-overview-common.component';
import { OfficeEventCommonComponent } from './office-event-common/office-event-common.component';
import { ClgAwardCommonComponent } from './clg-award-common/clg-award-common.component';
import { MainNotificationComponent } from './main-notification/main-notification.component';
import { OfficeMasterComponent } from './office-master/office-master.component';
import { AdministrativeMemberComponent } from './administrative-member/administrative-member.component';
import { DegreeProgrammComponent } from './academic-components/degree-programm/degree-programm.component';
import { CollegeDetailMasterComponent } from './academic-components/college-detail-master/college-detail-master.component';
import { AcademinFacultyComponent } from './academic-components/academin-faculty/academin-faculty.component';
import { ClgDepartmentsComponent } from './academic-components/clg-departments/clg-departments.component';
import { ClgEventsCommonComponent } from './academic-components/clg-events-common/clg-events-common.component';
import { OfficeAwardsCommonComponent } from './office-awards-common/office-awards-common.component';
import { OfficeActivitiesCommonComponent } from './office-activities-common/office-activities-common.component';
import { VcVisitsComponent } from '../common-components/vc-visits/vc-visits.component';
import { FormerViceChancellorsComponent } from '../common-components/former-vice-chancellors/former-vice-chancellors.component';
import { KnowTheVcComponent } from '../common-components/know-the-vc/know-the-vc.component';
import { VcSpeechComponent } from './vc-speech/vc-speech.component';
import { VcNewsUpdatesComponent } from './vc-news-updates/vc-news-updates.component';
import { StudentCornerHomeComponent } from './student-corner-home/student-corner-home.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { VcActivityComponent } from './vc-activity/vc-activity.component';
import { VcAwardComponent } from './vc-award/vc-award.component';
import { VcEventsComponent } from './vc-events/vc-events.component';
import { DeptEventComponent } from './dept-event/dept-event.component';
import { DeptInfrastructureComponent } from './dept-infrastructure/dept-infrastructure.component';
import { DeptAwardsComponent } from './dept-awards/dept-awards.component';
import { VcGalleryComponent } from './vc-gallery/vc-gallery.component';
import { ClgContactusComponent } from './academic-components/clg-contactus/clg-contactus.component';
import { StudentListComponent } from './student-list/student-list.component';
import { PolicyComponent } from './policy/policy.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClgActivitiesComponent } from './academic-components/clg-activities/clg-activities.component';
import { ClgLabComponent } from './clg-lab/clg-lab.component';
import { ClgBannerComponent } from './academic-components/clg-banner/clg-banner.component';
import { EventCommonComponent } from './academic-components/event-common/event-common.component';
import { VideoGallaryComponent } from './video-gallary/video-gallary.component';
import { StudentCornerAwardsViewmoreComponent } from './student-corner-awards-viewmore/student-corner-awards-viewmore.component';
import { StudentCornerEventsViewmoreComponent } from './student-corner-events-viewmore/student-corner-events-viewmore.component';
import { StudentCornerActivitiesViewmoreComponent } from './student-corner-activities-viewmore/student-corner-activities-viewmore.component';
import { OfficeActivitiesViewmoreComponent } from './office-activities-viewmore/office-activities-viewmore.component';
import { OfficeAwardsViewmoreComponent } from './office-awards-viewmore/office-awards-viewmore.component';
import { OfficeEventsViewmoreComponent } from './office-events-viewmore/office-events-viewmore.component';
import { DirectorActivitiesViewmoreComponent } from './director-activities-viewmore/director-activities-viewmore.component';
import { DirectorEventsViewmoreComponent } from './director-events-viewmore/director-events-viewmore.component';
import { DirectorAwardsViewmoreComponent } from './director-awards-viewmore/director-awards-viewmore.component';
import { OtherNewsComponent } from './other-news/other-news.component';
import { ClgActivitiesViewmoreComponent } from './clg-activities-viewmore/clg-activities-viewmore.component';
import { ClgActivitiesDetailsComponent } from './clg-activities-details/clg-activities-details.component';
import { ClgAwardsViewmoreComponent } from './clg-awards-viewmore/clg-awards-viewmore.component';
import { ClgEventsViewmoreComponent } from './clg-events-viewmore/clg-events-viewmore.component';
import { DepartAwardsViewmoreComponent } from './academic-components/depart-awards-viewmore/depart-awards-viewmore.component';
import { DepartActivitiesDetailsComponent } from './academic-components/depart-activities-details/depart-activities-details.component';
import { DepartEventsViewmoreComponent } from './academic-components/depart-events-viewmore/depart-events-viewmore.component';
import { VcPrintMediaViewmoreComponent } from './vc-print-media-viewmore/vc-print-media-viewmore.component';
import { ClgInfrastrutureTypeComponent } from './academic-components/clg-infrastruture-type/clg-infrastruture-type.component';
import { ClgInfrastrutureListComponent } from './academic-components/clg-infrastruture-list/clg-infrastruture-list.component';
import { ClgCampusLifeComponent } from './academic-components/clg-campus-life/clg-campus-life.component';
import { ClgRecruitmentComponent } from './academic-components/clg-recruitment/clg-recruitment.component';
import { AnnualReportComponent } from './annual-report/annual-report.component';
import { AdvisoryNewsComponent } from './advisory-news/advisory-news.component';
import { IgkvAchievementsComponent } from './igkv-achievements/igkv-achievements.component';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    AboutComponent,
    WhoIsWhoComponent,
    ChancellorComponent,
    ViceChancellorComponent,
    DepartmentComponent,
    StaffComponent,
    UnivActStatusComponent,
    MedicalFacilityComponent,
    AboutOverviewComponent,
    CollegeHomeComponent,
    DepartmentDetailComponent,
    AdmissionOverviewComponent,
    HowToApplyComponent,
    FeeStructureComponent,
    AdmissionFaqComponent,
    ClgInfrastructureDetailsComponent,
    CollegeOverviewCommonComponent,
    OfficeEventCommonComponent,
    ClgAwardCommonComponent,
    MainNotificationComponent,
    OfficeMasterComponent,
    AdministrativeMemberComponent,
    MainNotificationComponent,
    OfficeMasterComponent,
    DegreeProgrammComponent,
    CollegeDetailMasterComponent,
    AcademinFacultyComponent,
    ClgDepartmentsComponent,
    ClgEventsCommonComponent,
    OfficeAwardsCommonComponent,
    OfficeActivitiesCommonComponent,
    VcVisitsComponent,
    FormerViceChancellorsComponent,
    KnowTheVcComponent,
    VcSpeechComponent,
    VcNewsUpdatesComponent,
    StudentCornerHomeComponent,
    GalleryListComponent,
    VcActivityComponent,
    VcAwardComponent,
    VcEventsComponent,
    DeptEventComponent,
    DeptInfrastructureComponent,
    DeptAwardsComponent,
    VcGalleryComponent,
    ClgContactusComponent,
    StudentListComponent,
    PolicyComponent,
    ClgActivitiesComponent,
    ClgLabComponent,
    ClgBannerComponent,
    EventCommonComponent,
    VideoGallaryComponent,
    StudentCornerAwardsViewmoreComponent,
    StudentCornerEventsViewmoreComponent,
    StudentCornerActivitiesViewmoreComponent,
    OfficeActivitiesViewmoreComponent,
    OfficeAwardsViewmoreComponent,
    OfficeEventsViewmoreComponent,
    DirectorActivitiesViewmoreComponent,
    DirectorEventsViewmoreComponent,
    DirectorAwardsViewmoreComponent,
    OtherNewsComponent,
    ClgActivitiesViewmoreComponent,
    ClgActivitiesDetailsComponent,
    ClgAwardsViewmoreComponent,
    ClgEventsViewmoreComponent,
    DepartAwardsViewmoreComponent,
    DepartActivitiesDetailsComponent,
    DepartEventsViewmoreComponent,
    VcPrintMediaViewmoreComponent,
    ClgInfrastrutureTypeComponent,
    ClgInfrastrutureListComponent,
    ClgCampusLifeComponent,
    ClgRecruitmentComponent,
    AnnualReportComponent,
    AdvisoryNewsComponent,
    IgkvAchievementsComponent,
    // ChatbotComponent
    
    
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    NgbModule,
    MaterialcomponentsModule,
    ReactiveFormsModule,
    TranslateModule
]
})
export class AboutModule { }