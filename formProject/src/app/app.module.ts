import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EmpformComponent } from './empform/empform.component';
import{HttpClientModule} from '@angular/common/http';
import { freeApiService } from './empform/services/freeapi.service';
@NgModule({
  declarations: [
    AppComponent,
    EmpformComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
