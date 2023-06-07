import {Component, OnInit} from '@angular/core';
import {GastronomicCultureDetail} from "../gastronomic-culture-detail";
import {CultureService} from "../culture.service"
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-culture-list',
  templateUrl: './culture-list.component.html',
  styleUrls: ['./culture-list.component.css', '../../details.css'],
})
export class CultureListComponent implements OnInit {
  cultures: Array<GastronomicCultureDetail> = [];
  selected: boolean = false;
  selectedCulture!: GastronomicCultureDetail;
  p: number = 1;
  searchedCulture: any;

  constructor(private cultureService: CultureService) {
  }

  ngOnInit(): void {
    this.cultureService.getCultures().subscribe({
      next: cultures => this.cultures = cultures,
      error: e => console.error(e)
    });
  }

  onSelected(culture: GastronomicCultureDetail): void {
    this.selected = true;
    this.selectedCulture = culture;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cultures, event.previousIndex, event.currentIndex);
  }
}
