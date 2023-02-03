import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taikhoan',
  templateUrl: './taikhoan.page.html',
  styleUrls: ['./taikhoan.page.scss'],
})
export class TaikhoanPage implements OnInit {
  email: string

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.email = params.email    
      }          
    })
  }

}
