import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaderResponse } from '@angular/common/http';
import { MainloaderComponent } from './mainloader/mainloader.component';
import { ToasterComponent } from './toaster/toaster.component';
import { CustomPipeModule } from 'src/pipes/pipe.module';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { CheckoutModule } from 'paytm-blink-checkout-angular';
import { KitchenSearchComponent } from './kitchen-search/kitchen-search.component';
import { KitchenCardModule } from './kitchen-card/kitchen-card.module';
import { HeaderModule } from './header/header.module';
import { KitchenFiltersModule } from './kitchen-filters/kitchen-filters.module';

@NgModule({
  declarations: [
    AppComponent,
    MainloaderComponent,
    ToasterComponent,
    ConfirmationModalComponent,
    AlertModalComponent,
    OrderPlacedComponent,
    KitchenSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomPipeModule,
    BrowserAnimationsModule,
    CheckoutModule,
    KitchenCardModule,
    HeaderModule,
    KitchenFiltersModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
