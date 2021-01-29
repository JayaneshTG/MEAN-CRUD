import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {

  Detail:any = [];

  constructor(private apiService: ApiService) {
    this.readDetail();
  }

  ngOnInit(): void {}

  readDetail() {
    this.apiService.getDetails().subscribe((data) => {
      this.Detail = data;
    })
  }

  removeDetail(detail, index) {
    if(window.confirm('Are you sure?')) {
      this.apiService.deleteDetail(detail._id).subscribe((data) => {
        this.Detail.splice(index, 1);
      })
    }
  }

}
