import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { ForumsComponent } from './pages/forums/forums.component';
import { HomeComponent } from './pages/home/home.component';
import { MarketComponent } from './pages/market/market.component';
import { MDMComponent } from './pages/mdm/mdm.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ToolsComponent } from './pages/tools/tools.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'mdm',component:MDMComponent},
  {path:'tools',component:ToolsComponent},
  {path:'market',component:MarketComponent},
  {path:'forums',component:ForumsComponent},
  {path:'blog',component:BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
