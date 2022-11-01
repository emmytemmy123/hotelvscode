import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/Service/app.layout.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor( public layoutService: LayoutService, public router: Router) { }

  ngOnInit(): void {
  }

}
