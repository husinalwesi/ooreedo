import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prepaid-summary',
  templateUrl: './prepaid-summary.component.html',
  styleUrls: ['./prepaid-summary.component.scss']
})
export class PrepaidSummaryComponent implements OnInit {

  @Input() planDetails:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.planDetails)
  }

}
