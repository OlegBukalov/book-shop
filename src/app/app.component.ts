import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') public appTitle!: ElementRef;

  ngAfterViewInit() {
    this.appTitle.nativeElement.textContent = 'Book Shop'
  }

}
