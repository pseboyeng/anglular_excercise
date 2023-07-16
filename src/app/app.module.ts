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
    GroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
