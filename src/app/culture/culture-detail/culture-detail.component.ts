import {Component, OnInit} from '@angular/core';
import {GastronomicCultureDetail} from "../gastronomic-culture-detail";
import {ActivatedRoute} from "@angular/router";
import {CultureService} from "../culture.service";

@Component({
  selector: 'app-culture-detail',
  templateUrl: './culture-detail.component.html',
  styleUrls: ['./culture-detail.component.css', '../../details.css']
})
export class CultureDetailComponent implements OnInit {
  id!: string;
  culture!: GastronomicCultureDetail;

  constructor(private route: ActivatedRoute,
              private service: CultureService) {
  }

  ngOnInit(): void {
    if (this.culture === undefined) {
      this.id = this.route.snapshot.queryParamMap.get('id')!
      if (this.id) {
        this.service.getCulture(this.id).subscribe(culture => this.culture = culture);
      }
    }
  }
}
