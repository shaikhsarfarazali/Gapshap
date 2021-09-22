import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-tabs',
  templateUrl: './footer-tabs.component.html',
  styleUrls: ['./footer-tabs.component.scss'],
})
export class FooterTabsComponent implements OnInit {

  @Input() activePage:string;

  home:any;
  chat:any;
  search:any;
  notify:any;

  constructor(private router: Router) { }

  ngOnInit() {}

  ionViewWillEnter(){

  }
  goTo(ev){
    console.log('this.activePage ',this.activePage);
    this.activePage=='home'?this.home=true:this.activePage=='chat'?this.chat=true:this.activePage=='search'?this.search=true:this.notify=true;

    this.router.navigate([ev]);
  }
}
