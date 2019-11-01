import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatTooltipModule, MatSlideToggleModule, MatRadioModule } from '@angular/material';
import { MatButtonModule, MatSelectModule, MatCheckboxModule, MatSnackBarModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { AngularSplitModule } from 'angular-split';
import { AngularResizedEventModule } from 'angular-resize-event';
import { TooltipModule } from 'ng2-tooltip-directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PreviewA1Component } from './previews/preview-A1/preview-A1.component';

import { PreviewEmailComponent } from './previews/preview-email/preview-email.component';
import { PreviewSeasonalComponent } from './previews/preview-seasonal/preview-seasonal.component';

import { FormA1Component } from './forms/form-A1/form-A1.component';
import { FormSeasonalComponent } from './forms/form-seasonal/form-seasonal.component';
import { FormEmailComponent } from './forms/form-email/form-email.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkfrontService } from './services/workfront.service';
import { FormD1Component } from './forms/form-D1/form-D1.component';
import { PreviewD1Component } from './previews/preview-D1/preview-D1.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      PreviewA1Component,
      PreviewD1Component,
      PreviewEmailComponent,
      PreviewSeasonalComponent,
      FormA1Component,
      FormD1Component,
      FormSeasonalComponent,
      FormEmailComponent,
      LoadingScreenComponent

   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      BrowserAnimationsModule,
      HttpClientModule,
      MatTabsModule,
      AngularSplitModule.forRoot(),
      MatTooltipModule,
      AngularResizedEventModule,
      MatSlideToggleModule,
      MatRadioModule,
      MatButtonModule,
      MatSelectModule,
      MatCheckboxModule,
      MatSnackBarModule,
      MatProgressSpinnerModule,
      TooltipModule
   ],
   providers: [WorkfrontService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
