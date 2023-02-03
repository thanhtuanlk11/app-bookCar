import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.page.html',
  styleUrls: ['./trangchu.page.scss'],
})
export class TrangchuPage{

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
  }
  ngaynhan() {    
    this.router.navigateByUrl('/bookingdate')
  }
  ngaytra(){
    this.router.navigateByUrl('/carreturntime')
  }
}
