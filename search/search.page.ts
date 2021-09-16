import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  requestData:any=['1','1','1','1','1','1','1','1','1','1']
  constructor(private router:Router) { }

  ngOnInit() {
  }

  goTo(ev){
    this.router.navigate([ev]);
  }
}
