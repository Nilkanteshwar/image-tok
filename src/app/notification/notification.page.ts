import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage  {

  constructor(private localNotifications: LocalNotifications) { }

  registerednotification (ms:number){


    this.localNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
    trigger:{at:new Date(new Date ().getTime() +ms)}
  
    });
  }

}
