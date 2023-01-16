import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercise1_2_3';
  message = ""

  constructor(private messageService: MessageService) {
    this.message = messageService.getMessage();
  }

}
