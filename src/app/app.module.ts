import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';
import { GroupsComponent } from './groups/groups.component';
import { ShopsComponent } from './shops/shops.component';
import { RepairComponent } from './repair/repair.component';
import { MoonlightComponent } from './moonlight/moonlight.component';
import { EventComponent } from './event/event.component';
import { TruncatePipe } from './truncate.pipe';
import { GroupComponent } from './group/group.component';
import { ShopComponent } from './shop/shop.component';
import { RepairsComponent } from './repairs/repairs.component';

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    EventsComponent,
    GroupsComponent,
    ShopsComponent,
    RepairComponent,
    MoonlightComponent,
    EventComponent,
    TruncatePipe,
    GroupComponent,
    ShopComponent,
    RepairsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
