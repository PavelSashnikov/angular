import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motorcycle-quick-view',
  templateUrl: './motorcycle-quick-view.component.html',
  styleUrls: ['./motorcycle-quick-view.component.scss']
})
export class MotorcycleQuickViewComponent implements OnInit {

  slides = [
    {img: "https://dw4i9za0jmiyk.cloudfront.net/2018/11/05/md_pre_p078ab4fd20c872f14dcb5c4d35dfed1_e7653094da31.jpg"},
    {img: "https://dw4i9za0jmiyk.cloudfront.net/2018/11/05/md_pre_c114f9a0f46301775b4ce7bbfe3e70e7_91f9514f1746.jpg"},
    {img: "https://dw4i9za0jmiyk.cloudfront.net/2018/11/05/md_pre_r56b8289e59c84e40605776852da3372_3aadbb4a7cdd.jpg"},
    {img: "https://dw4i9za0jmiyk.cloudfront.net/2018/11/05/md_pre_tbda77b3bb8fc852a3ffaa8ca8803f98_87078a5c1aba.jpg"}
  ];
  
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 1};

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
