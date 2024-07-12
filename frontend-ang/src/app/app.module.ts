import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatButton, MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatMenu, MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {MatSidenav, MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoadStudentsComponent } from './load-students/load-students.component';
import { LoadPaymentsComponent } from './load-payments/load-payments.component';
import { PaymentsComponent } from './payments/payments.component';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthGuard} from "./guards/auth.guard";
import {AuthorizationGuard} from "./guards/authorization.guard";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import { StudentDetailsComponent } from './student-details/student-details.component';
import { NewPaymentComponent } from './new-payment/new-payment.component';
import {MatDatepickerInput, MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelect, MatSelectModule} from "@angular/material/select";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {MatProgressSpinner, MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { AreaComponent } from './shared/widgets/area/area.component';
import {HighchartsChartModule} from "highcharts-angular";

@NgModule({
  declarations: [
    AppComponent,
    AdminTemplateComponent,
    HomeComponent,
    ProfileComponent,
    LoadStudentsComponent,
    LoadPaymentsComponent,
    PaymentsComponent,
    StudentsComponent,
    DashboardComponent,
    LoginComponent,
    StudentDetailsComponent,
    NewPaymentComponent,
    PaymentDetailsComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule, MatNativeDateModule, MatSelectModule,
    PdfViewerModule, MatProgressSpinnerModule,
    HighchartsChartModule
  ],
  providers: [
    provideAnimationsAsync(),AuthGuard,AuthorizationGuard
  ],
  exports:[
    AreaComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
