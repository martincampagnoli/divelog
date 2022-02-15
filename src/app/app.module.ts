import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';

const firebaseConfig = {
  apiKey: "AIzaSyAoCTgR8REfAwb_5i_CfLTr_4h5S-Z5jqo",
  authDomain: "divelog-796c6.firebaseapp.com",
  projectId: "divelog-796c6",
  databaseURL: 'https://divelog-796c6-default-rtdb.europe-west1.firebasedatabase.app/',
  storageBucket: "divelog-796c6.appspot.com",
  messagingSenderId: "427718904435",
  appId: "1:427718904435:web:3ccd0b3781574da72ef806"
};      

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
