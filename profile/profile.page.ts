import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSelect } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  @ViewChild('mySelect', { static: false }) selectRef: IonSelect;

  // media:any=['img1']
  show: boolean=false;
  activePics: boolean=true;
  activeVideo: boolean=false;
  activeTags: boolean=false;


  // Camera
  croppedImagePath = "";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  constructor(
    private camera: Camera,
    public actionSheetController: ActionSheetController) { }

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

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      this.croppedImagePath = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Reels',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Post',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Story',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      // {
      //   text: 'Cancel',
      //   role: 'cancel'
      // }
      ]
    });
    await actionSheet.present();
  }
}
