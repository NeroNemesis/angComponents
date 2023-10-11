import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressListElementComponent } from './address-list/address-list-element/address-list-element.component';
import { AddressViewComponent } from './address-list/address-view/address-view.component';
import {FormsModule} from "@angular/forms";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireModule} from '@angular/fire/compat';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddressListComponent,
    AddressListElementComponent,
    AddressViewComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore())
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
