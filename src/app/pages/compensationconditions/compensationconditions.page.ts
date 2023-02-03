import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-compensationconditions',
  templateUrl: './compensationconditions.page.html',
  styleUrls: ['./compensationconditions.page.scss'],
})
export class CompensationconditionsPage{

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
  }
  ok(){
    this.router.navigateByUrl('/chinhsach')
  }
}
