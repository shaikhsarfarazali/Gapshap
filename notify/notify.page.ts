import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.page.html',
  styleUrls: ['./notify.page.scss'],
})
export class NotifyPage implements OnInit {

  activity:any=['1','1','1','1','1','1','1','1','1','1']
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  goTo(ev){
    this.router.navigate([ev]);
  }
}
