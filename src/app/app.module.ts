import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
//import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CandidateComponent } from './components/candidate/candidate.component'  
import { HttpsService} from './services/https.service';
import {CandidateService} from './services/candidate.service';
import { MatTableModule } from '@angular/material/table';
import { AllCandidateDataComponent } from './components/all-candidate-data/all-candidate-data.component';




@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    AllCandidateDataComponent, 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
   // MatButtonModule,
   MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule ,
   // MatRippleModule
  ],
  providers: [HttpClient,HttpsService,CandidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
