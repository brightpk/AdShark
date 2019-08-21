import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatTooltipModule, MatSlideToggleModule, MatRadioModule } from '@angular/material';
import { MatButtonModule, MatSelectModule, MatCheckboxModule, MatSnackBarModule } from '@angular/material';
import { AngularSplitModule } from 'angular-split';
import { AngularResizedEventModule } from 'angular-resize-event';
import { TooltipModule } from 'ng2-tooltip-directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewA1Component } from './preview-A1/preview-A1.component';
import { PreviewD1Component } from './preview-D1/preview-D1.component';
import { PreviewEmailComponent } from './preview-email/preview-email.component';

@NgModule({
   declarations: [
      AppComponent,
      PreviewA1Component,
      PreviewD1Component,
      PreviewEmailComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      BrowserAnimationsModule,
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
      TooltipModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
