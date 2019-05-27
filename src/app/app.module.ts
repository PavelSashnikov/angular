import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { MotorcycleDescriptionComponent } from './pages/motorcycle-description/motorcycle-description.component';
import { ServiceComponent } from './pages/service/service.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { GraphicMenuComponent } from './components/graphic-menu/graphic-menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { FilterComponent } from './components/filter/filter.component';
import { MotorcycleQuickViewComponent } from './components/motorcycle-quick-view/motorcycle-quick-view.component';
import { ImageWithSliderComponent } from './components/image-with-slider/image-with-slider.component';
import { ShortDescriptionComponent } from './components/short-description/short-description.component';
import { DescriptionComponent } from './components/description/description.component';
import { SpecificationComponent } from './components/specification/specification.component';
import { SlickModule } from 'ngx-slick';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    MotorcycleDescriptionComponent,
    ServiceComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    GraphicMenuComponent,
    BannerComponent,
    FilterComponent,
    MotorcycleQuickViewComponent,
    ImageWithSliderComponent,
    ShortDescriptionComponent,
    DescriptionComponent,
    SpecificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
