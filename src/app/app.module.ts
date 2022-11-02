import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BreedsComponent } from './breeds/breeds.component';

const routes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'breeds', component: BreedsComponent },
  { path: '', redirectTo: '/gallery', pathMatch: 'full' },
  { path: '**', component: GalleryComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    BreedsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
