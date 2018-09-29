import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

/*Service */
import { DetailService } from '../../service/detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: string;
  detail = [];
  ids = this.searchId();
  constructor(private detailService: DetailService, private route: ActivatedRoute) {
    this.detailService.getDetail(this.ids).subscribe(data => {
      console.log(data);
      this.detail = data;
    });
  }


  searchId() {
    this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.id = queryParams['id'];
      }
    );
    return this.id;
  }


  ngOnInit() {
    $(document).ready(function () {
      $('.sidenav').sidenav();
      $('.parallax').parallax();
    });
  }

}