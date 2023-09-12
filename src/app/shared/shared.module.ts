import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { HeaderComponent } from './components/header/header.component';
import { SharedTableComponent } from './components/shared-table/shared-table.component';
import {MaterialModule} from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationPopupComponent } from './components/confirmation-popup/confirmation-popup.component';
import { CommonLayoutComponent } from './components/common-layout/common-layout.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SharedSkeletonLoadingComponent } from './components/shared-skeleton-loading/shared-skeleton-loading.component';
@NgModule({
  declarations: [
    HeaderComponent,
    SharedTableComponent,
     SharedSkeletonLoadingComponent,
    // SharedDialogOverlayComponent,
    ConfirmationPopupComponent,
    CommonLayoutComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports :
  [
     SharedSkeletonLoadingComponent,
    BreadcrumbComponent,
    ReactiveFormsModule,
    FormsModule,
    HeaderComponent,
    SharedTableComponent,
  ],
  providers: []
})
export class SharedModule { }