import { Component, OnInit } from '@angular/core';
import { AlertifyMessageType, AlertifyOptions, AlertifyService, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private alertifyService: AlertifyService) {}

  ngOnInit(): void {
  }

  m(){
    this.alertifyService.message("Merhaba", {
      messageType: AlertifyMessageType.Success,
      position: Position.TopRight,
      delay: 5,
      dismissOthers: false
    })
  }

  d(){
    this.alertifyService.dismissAll();
  }


}
