import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainloaderComponent } from './mainloader/mainloader.component';
import { ToasterComponent } from './toaster/toaster.component';
import { CustomPipeModule } from 'src/pipes/pipe.module';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { SearchFiltersComponent } from './search-filters/search-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    MainloaderComponent,
    ToasterComponent,
    ConfirmationModalComponent,
    AlertModalComponent,
    OrderPlacedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomPipeModule,
    BrowserAnimationsModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
