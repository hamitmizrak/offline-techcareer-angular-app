import { Injectable } from '@angular/core';

// Alertify
declare let alertify: any;

// Global service
@Injectable({
  providedIn: 'root' //LocalState için bunu kaldır
})
export class AlertifyMessageServiceService {

  // Constructor
  constructor() { }

  // Success
  alertSuccess(message: string) {
    alertify.success(message);
  }

  // Warning
  alertWarning(message: string) {
    alertify.success(message);
  }

  // Message
  alertMessage(message: string) {
    alertify.success(message);
  }

  // Error
  alertError(message: string) {
    alertify.success(message);
  }


}
