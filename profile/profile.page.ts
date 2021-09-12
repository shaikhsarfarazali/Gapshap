import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSelect } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  @ViewChild('mySelect', { static: false }) selectRef: IonSelect;

  media:any=['img1','img2','img1','img2','img1','img2','img1','img2']
  show: boolean=false;
  activePics: boolean=true;
  activeVideo: boolean=false;
  activeTags: boolean=false;

  constructor() { }

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

  changeMedia(ev){
    this.activePics = false;
    this.activeTags = false;
    this.activeVideo = false;
    ev=='vdo'?this.activeVideo = true:
    ev=='pic'?this.activePics = true:
    ev=='tags'?this.activeTags = true:'';
  }

}
