import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModulesModule } from './modules/auth-modules/auth-modules.module';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from 'src/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared';
import { CctvVerificationModule } from './modules/cctv-verification/cctv-verification.module';
import { ManageAttendanceRecordModule } from './modules/manage-attendance-record/manage-attendance-record.module';
import { FeeManagementModule } from './modules/fee-management/fee-management.module';
import { ManageExamsModule } from './modules/manage-exams/manage-exams.module';
import { ManageHallTicketsModule } from './modules/manage-hall-tickets/manage-hall-tickets.module';
import { ManageQuestionPapersModule } from './modules/manage-question-papers/manage-question-papers.module';
import { ManageResultsModule } from './modules/manage-results/manage-results.module';
import { StudentEnrollmentModule } from './modules/student-enrollment/student-enrollment.module';
import { TrackDispatchesModule } from './modules/track-dispatches/track-dispatches.module';
import { HomeComponent } from './home/home.component';
import { CandidatePortalModule } from './modules/candidate-portal/candidate-portal.module';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CctvVerificationModule,
    AuthModulesModule,
    FeeManagementModule,
    ManageExamsModule,
    ManageHallTicketsModule,
    ManageQuestionPapersModule,
    ManageResultsModule,
    StudentEnrollmentModule,
    TrackDispatchesModule,
    ManageAttendanceRecordModule,
    CandidatePortalModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
