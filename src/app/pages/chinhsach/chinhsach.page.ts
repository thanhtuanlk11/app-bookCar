import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chinhsach',
  templateUrl: './chinhsach.page.html',
  styleUrls: ['./chinhsach.page.scss'],
})
export class ChinhsachPage{

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
  }
}
