import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  slides = [
    {img: "https://img.tyt.by/720x720s/n/avto/01/d/mototsikl-harley-davidson-v-rod.jpg.pagespeed.ce.zq_g7gu-tc.jpg"},
    {img: "https://i2.drivenn.ru/2nse5cnkvorax_1t55837.jpeg"},
    {img: "https://dw4i9za0jmiyk.cloudfront.net/2017/09/07/news_gf3cc4ab3163b30098aa362d994415cb_87f8b3b9c28f.png"},
    {img: "http://www.bagnet.org/storage/18/13/10/08/729_486_59363db137401.jpg"},
    {img: "https://kor.ill.in.ua/m/610x385/1614785.jpeg"}

  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "arrows": false};

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  afterChange(e) {
    console.log('afterChange');
  }

  constructor() { }

  ngOnInit() {
  }

}
