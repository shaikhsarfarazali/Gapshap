import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSelect } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('mySelect', { static: false }) selectRef: IonSelect;

  sliderConfig = {
    slidesPerView: 4.6,
    spaceBetween: 1,
    // autoplay: true
    // centeredSlides: true
  };

  list:any = ['Sarfaraz','Arman','Teja','Rupesh','Arman2','Arman3'];
  show: boolean=false;
  constructor(private router:Router) {}

  ngOnInit() {
  }

  openSelect() {
    if(this.show){
      this.show = false;
    }else{
      this.show = true;
    }
    
    this.selectRef.open();
  }
  goToProfile(){
    this.router.navigate(['profile']);
  }

}
