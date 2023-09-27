import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainloaderComponent } from './mainloader/mainloader.component';
import { ToasterComponent } from './toaster/toaster.component';
import { CustomPipeModule } from 'src/pipes/pipe.module';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainloaderComponent,
    ToasterComponent,
    ConfirmationModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
