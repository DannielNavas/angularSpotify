import { Component, OnInit } from '@angular/core';
declare var $: any;

/*Service*/
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  albumsSpoti = [];

  constructor(private dataService: DataService) {
    this.dataService.obtenerDatos().subscribe(data => {
      console.log(data);
      console.log(data.albums[0].name);
      this.albumsSpoti = data;
      console.log(this.albumsSpoti);
    });
  }

  ngOnInit() {
    $(document).ready(function () {
      $('.sidenav').sidenav();
      $('.parallax').parallax();
    });
  }


}
