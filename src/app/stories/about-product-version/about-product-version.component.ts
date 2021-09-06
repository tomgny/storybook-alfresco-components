import { Component, Input, OnInit } from '@angular/core';
import { setProvider } from '../user-info/mock/stub-authentication-service';

@Component({
  selector: 'aca-about-product-version',
  templateUrl: './about-product-version.component.html'
})
export class AboutProductVersionComponent implements OnInit {
  @Input()
  provider: 'ecm' | 'bpm' | 'both';

  ngOnInit(): void {
    setProvider(this.provider);
  }
}
