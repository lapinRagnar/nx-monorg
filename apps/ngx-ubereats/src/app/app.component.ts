import { Component } from '@angular/core';
import { Camera } from '@capacitor/camera';

@Component({
  selector: 'nx-monorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-ubereats';
  image = ''

  async captureImage() {
    Camera.getPhoto()
  }

}
