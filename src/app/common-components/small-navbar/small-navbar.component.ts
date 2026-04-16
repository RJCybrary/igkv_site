import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-navbar',
  standalone: false,
  templateUrl: './small-navbar.component.html',
  styleUrls: ['./small-navbar.component.scss']
})
export class SmallNavbarComponent implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit(): void {
    // Listen for messages from iframe (postMessage)
    // window.addEventListener('message', this.onMessageReceived);
  }

  ngOnDestroy(): void {
    // Clean up the event listener when the component is destroyed
    // window.removeEventListener('message', this.onMessageReceived);
  }

  onMessageReceived(event: MessageEvent): void {
    // Make sure the message is coming from a trusted source (iframe)
    // if (event.origin !== 'https://igkv.ac.in') {
    //   return; // Ignore messages from untrusted sources
    // }

    // // Check if the login was successful
    // if (event.data.action === 'loginSuccess') {
    //   // Open the redirect URL in a new tab
    //   const redirectUrl = event.data.redirectUrl;
    //   console.log('url',redirectUrl);
      
    //   window.open(redirectUrl, '_blank');
    // }
  }
}
