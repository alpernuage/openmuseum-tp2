import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// Service contenant le JSON de tous les musées et les méthodes associées
import { MuseumListService } from './services/museumList.service';
// Liste des musée : inclue SingleMuseumComponent
import { MuseumListComponent } from './museum-list/museum-list.component';
// Un musée dans la liste
import { SingleMuseumComponent } from './single-museum/single-museum.component';
import { AddMuseumComponent } from './add-museum/add-museum.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';

const appRoutes:Routes = [
  {path: '', component: MuseumListComponent},
  {path: 'addMuseum', component: AddMuseumComponent},
  {path: 'singleMuseum', component: SingleMuseumComponent},
  {path: 'museumDetail', component: MuseumDetailComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SingleMuseumComponent,
    MuseumListComponent,
    AddMuseumComponent,
    MuseumDetailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MuseumListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
