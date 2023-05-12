import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HeaderComponent } from './sharepage/header/header.component';
import { MDMComponent } from './pages/mdm/mdm.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { MarketComponent } from './pages/market/market.component';
import { ForumsComponent } from './pages/forums/forums.component';
import { BlogComponent } from './pages/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    MDMComponent,
    ToolsComponent,
    MarketComponent,
    ForumsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
