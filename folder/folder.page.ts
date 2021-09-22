import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSelect } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  @ViewChild('mySelect', { static: false }) selectRef: IonSelect;

  croppedImg: string;

  sliderConfig = {
    slidesPerView: 4.6,
    spaceBetween: 1,
    // autoplay: true
    // centeredSlides: true
  };

  public folder: string;
  list:any = ['Sarfaraz','Arman','Teja','Rupesh','Arman2','Arman3'];
  show: boolean=false;

  searchBar:boolean=false;

  constructor(private activatedRoute: ActivatedRoute, 
    private router:Router) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.folder)
  }

  openSelect() {
    if(this.show){
      this.show = false;
    }else{
      this.show = true;
    }
    
    this.selectRef.open();
  }

  goTo(ev){
    this.router.navigate([ev]);
  }
  
}