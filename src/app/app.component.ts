import { Component, OnInit } from '@angular/core';
import { DbmanagerService } from './services/dbmanager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'takeup_empty'
  constructor(private dbmanager: DbmanagerService){}
  
  ngOnInit(): void {
    this.dbmanager.getAllProducts();
  }
 
}
