import {Component, OnInit} from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  search(): void {
    const toastLiveExample = document.getElementById('liveToastBar')
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
  }
}
