import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< Updated upstream
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
>>>>>>> Stashed changes
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
<<<<<<< Updated upstream
  bootstrap: [AppComponent]
=======
  bootstrap: [AppComponent],
  // providers: [LoggingService]
>>>>>>> Stashed changes
})
export class AppModule { }


