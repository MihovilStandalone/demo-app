import {Component} from '@angular/core';
import {GetServiceService} from './get-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fr';

  constructor(private getService: GetServiceService) {
    this.getService.getValue().subscribe(value => console.log(value));
  }

}
