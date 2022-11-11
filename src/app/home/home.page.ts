import { Component } from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  foto:any;
  constructor(private camera: Camera) {}

  TomarFoto(){

    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL
    }
    this.camera.getPicture(options).then((imageData) => {
      this.foto = 'data:image/jpeg;base64' + imageData;
      }, (err) => {
        console.log(err);
      });

  }

}
