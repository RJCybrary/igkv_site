import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ResearchRoutingModule } from './research-routing.module';
import { ResearchComponent } from './research.component';
import { PatentComponent } from './patent/patent.component';
import { SharedModule } from '../shared/shared.module';
import { SponcerdProjectComponent } from './sponcerd-project/sponcerd-project.component';
import { InternationalAdmissionComponent } from './international-admission/international-admission.component';
import { InternationalOverviewComponent } from './international-overview/international-overview.component';
import { AticComponent } from './atic/atic.component';
import { KisanMelaComponent } from './kisan-mela/kisan-mela.component';
import { FldComponent } from './fld/fld.component';
import { TrainingComponent } from './training/training.component';
import { ExtentionResearchPaperComponent } from './extention-research-paper/extention-research-paper.component';
import { ExtentionBooksComponent } from './extention-books/extention-books.component';
import { ExtentionNewsLetterComponent } from './extention-news-letter/extention-news-letter.component';
import { SportsComponent } from './campusLife-components/sports/sports.component';
import { NccComponent } from './campusLife-components/ncc/ncc.component';
import { NssComponent } from './campusLife-components/nss/nss.component';
import { FacilitiesOperationsComponent } from './campusLife-components/facilities-operations/facilities-operations.component';
import { StudentsAffairsComponent } from './campusLife-components/students-affairs/students-affairs.component';
import { AccommodationComponent } from './campusLife-components/accommodation/accommodation.component';
import { GirlsHostelComponent } from './campusLife-components/girls-hostel/girls-hostel.component';
import { BoysHostelComponent } from './campusLife-components/boys-hostel/boys-hostel.component';
import { SafatySecurityComponent } from './campusLife-components/safaty-security/safaty-security.component';
import { LibraryOverviewComponent } from './campusLife-components/library-overview/library-overview.component';
import { PublicServiceComponent } from './campusLife-components/public-service/public-service.component';
import { KvkHomeComponent } from './kvk-home/kvk-home.component';
import { MaterialcomponentsModule } from '../materialcomponents/materialcomponents.module';
import { KvkEventDetailComponent } from './kvk-event-detail/kvk-event-detail.component';
import { KvkActivityCommonComponent } from './kvk-activity-common/kvk-activity-common.component';
import { KvkOverviewCommonComponent } from './kvk-overview-common/kvk-overview-common.component';
import { KvkAwardCommonComponent } from './kvk-award-common/kvk-award-common.component';
import { KvkAwardDetailComponent } from './kvk-award-detail/kvk-award-detail.component';
import { VarietyReleasedComponent } from './variety-released/variety-released.component';
import { SuccesStoryComponent } from './succes-story/succes-story.component';
import { KvkDetailComponent } from './kvk-detail/kvk-detail.component';
import { KvkDetailBannerComponent } from './kvk-detail-banner/kvk-detail-banner.component';
import { KvkContactUsComponent } from './kvk-contact-us/kvk-contact-us.component';
import { OurProjectComponent } from './our-project/our-project.component';
import { CounterComponent } from './counter/counter.component';
import { SitemapComponent } from '../common-components/sitemap/sitemap.component';
import { RLabFacilitiesComponent } from './r-lab-facilities/r-lab-facilities.component';
import { PublicationDetailComponent } from './publication-detail/publication-detail.component';
import { FarmingComponent } from './farming/farming.component';
import { IntWhowtoApplyComponent } from './int-whowto-apply/int-whowto-apply.component';
import { IntProgrammFeeComponent } from './int-programm-fee/int-programm-fee.component';
import { IntAdmissionRuleComponent } from './int-admission-rule/int-admission-rule.component';
import { IntPaymentProcedureComponent } from './int-payment-procedure/int-payment-procedure.component';
import { IntPreArrivalComponent } from './int-pre-arrival/int-pre-arrival.component';
import { IntPostArrivalComponent } from './int-post-arrival/int-post-arrival.component';
import { IntVisaGuidlineComponent } from './int-visa-guidline/int-visa-guidline.component';
import { IntExamineInstructionComponent } from './int-examine-instruction/int-examine-instruction.component';
import { IntStudyAbrodOverviewComponent } from './int-study-abrod-overview/int-study-abrod-overview.component';
import { IntProgramsComponent } from './int-programs/int-programs.component';
import { COAComponent } from './coa/coa.component';
import { IntRoutesComponent } from './int-routes/int-routes.component';
// import { FacilitiesInfrastructureDetailsComponent } from './campusLife-components/facilities-infrastructure-details/facilities-infrastructure-details.component';
import { ArtCultureComponent } from './campusLife-components/art-culture/art-culture.component';
import { ItCellComponent } from './campusLife-components/it-cell/it-cell.component';
import { ArtCultureDetailsComponent } from './campusLife-components/art-culture-details/art-culture-details.component';
import { CopyTechComponent } from './copy-tech/copy-tech.component';
// import { MobileAppsComponent } from './farmer-corner/mobile-apps/mobile-apps.component';
import { NssDetailsComponent } from './campusLife-components/nss-details/nss-details.component';
import { PublicationComponent } from './publication/publication.component';
import { MobileAppsComponent } from './mobile-apps/mobile-apps.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { PhytosanitoryLabComponent } from './phytosanitory-lab/phytosanitory-lab.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GuestHouseComponent } from './guest-house/guest-house.component';
import { FormsModule } from '@angular/forms';
import { KvkAwardViewmoreComponent } from './kvk-award-viewmore/kvk-award-viewmore.component';
import { KvkActivitiesDetailsComponent } from './kvk-activities-details/kvk-activities-details.component';
import { KvkActivitiesViewmoreComponent } from './kvk-activities-viewmore/kvk-activities-viewmore.component';
import { KvkEventsViewmoreComponent } from './kvk-events-viewmore/kvk-events-viewmore.component';
import { FacilitiesInfrastructureDetailsComponent } from './campusLife-components/facilities-infrastructure-details/facilities-infrastructure-details.component';
import { StripHtmlPipe } from '../pipe/strip-html.pipe';
import { KvkFldComponent } from './kvk-fld/kvk-fld.component';
import { KvkTrainingComponent } from './kvk-training/kvk-training.component';
import { CopyrightsComponent } from './copyrights/copyrights.component';
import { KvkInfrastrutureListComponent } from './kvk-infrastruture-list/kvk-infrastruture-list.component';
import { KvkInfrastrutureTypeComponent } from './kvk-infrastruture-type/kvk-infrastruture-type.component';
import { KvkInfrastrutureDetailsComponent } from './kvk-infrastruture-details/kvk-infrastruture-details.component';
import { KvkFarmerCornerComponent } from './kvk-farmer-corner/kvk-farmer-corner.component';
import { KvkRecruitmentComponent } from './kvk-recruitment/kvk-recruitment.component';
import { DRSPUBLICATIONComponent } from './drs-publication/drs-publication.component';
import { DesPublicationComponent } from './des-publication/des-publication.component';
import { FarmResStationComponent } from './farm-res-station/farm-res-station.component';
import { AdharVerificationComponent } from './adhar-verification/adhar-verification.component';
import {TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ResearchComponent,
    PatentComponent,
    SponcerdProjectComponent,
    InternationalAdmissionComponent,
    InternationalOverviewComponent,
    AticComponent,
    KisanMelaComponent,
    FldComponent,
    TrainingComponent,
    ExtentionResearchPaperComponent,
    ExtentionBooksComponent,
    ExtentionNewsLetterComponent,
    SportsComponent,
    NccComponent,
    NssComponent,
    FacilitiesOperationsComponent,
    StudentsAffairsComponent,
    AccommodationComponent,
    GirlsHostelComponent,
    BoysHostelComponent,
    SafatySecurityComponent,
    LibraryOverviewComponent,
    PublicServiceComponent,
    KvkHomeComponent,
    KvkEventDetailComponent,
    KvkActivityCommonComponent,
    KvkOverviewCommonComponent,
    KvkAwardCommonComponent,
    KvkAwardDetailComponent,
    VarietyReleasedComponent,
    SuccesStoryComponent,
    KvkDetailComponent,
    KvkDetailBannerComponent,
    KvkContactUsComponent,
    OurProjectComponent,
    CounterComponent,
    SitemapComponent,
    CounterComponent,
    RLabFacilitiesComponent,
    PublicationDetailComponent,
    FarmingComponent,
    IntWhowtoApplyComponent,
    IntProgrammFeeComponent,
    IntAdmissionRuleComponent,
    IntPaymentProcedureComponent,
    IntPreArrivalComponent,
    IntPostArrivalComponent,
    IntVisaGuidlineComponent,
    IntExamineInstructionComponent,
    IntStudyAbrodOverviewComponent,
    IntProgramsComponent,
    COAComponent,
    IntRoutesComponent,
    ItCellComponent,
    ArtCultureComponent,
    // FacilitiesInfrastructureDetailsComponent,
    // MobileAppsComponent,
    ArtCultureDetailsComponent,
    CopyTechComponent,
    NssDetailsComponent,
    PublicationComponent,
    MobileAppsComponent,
    PhytosanitoryLabComponent,
    ProjectDetailComponent,
    GuestHouseComponent,
    KvkAwardViewmoreComponent,
    KvkActivitiesDetailsComponent,
    KvkActivitiesViewmoreComponent,
    KvkEventsViewmoreComponent,
    FacilitiesInfrastructureDetailsComponent,
    StripHtmlPipe,
    KvkFldComponent,
    KvkTrainingComponent,
    CopyrightsComponent,
    KvkInfrastrutureListComponent,
    KvkInfrastrutureTypeComponent,
    KvkInfrastrutureDetailsComponent,
    KvkFarmerCornerComponent,
    KvkRecruitmentComponent,
    DRSPUBLICATIONComponent,
    DesPublicationComponent,
    FarmResStationComponent,
    AdharVerificationComponent
    
  ],
  imports: [
    CommonModule,
    ResearchRoutingModule,
    SharedModule,
    NgbModule,
    MaterialcomponentsModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule
  ]
})
export class ResearchModule { }
