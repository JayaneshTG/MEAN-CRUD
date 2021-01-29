import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailCreateComponent } from './components/detail-create/detail-create.component';
import { DetailEditComponent } from './components/detail-edit/detail-edit.component';
import { DetailListComponent } from './components/detail-list/detail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailCreateComponent,
    DetailEditComponent,
    DetailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
