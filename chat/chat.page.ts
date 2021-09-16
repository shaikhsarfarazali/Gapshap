import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementFinder } from 'protractor';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  chatData:any=['1','1','1','1','1','1','1','1','1','1'];

  activeChat: boolean=true;
  activeTag: boolean=false;
  activeRequest: boolean=false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  changeMedia(ev){
    this.activeChat = false;
    this.activeTag = false;
    this.activeRequest = false;
    ev=='chat'?this.activeChat = true: 
    ev=='tag'?this.activeTag = true:
    ev=='request'?this.activeRequest = true:'';
  }

  goTo(ev){
    this.router.navigate([ev]);
  }
}
