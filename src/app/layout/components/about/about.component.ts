import { Component, Optional } from '@angular/core';

import { GeneratorService } from './../../../core/services/generator.service';
import { ConstantService } from './../../../core/services/constant.service';
import { ConfigOptionsService } from './../../../core/services/config-options.service';
import { LocalStorageService } from './../../../core/services/local-storage.service';
import { CartService } from './../../../services/cart.service';
import { BooksService } from './../../../services/books.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(
    @Optional() private booksService: BooksService,
    @Optional() private cartService: CartService,
    @Optional() private localStorageService: LocalStorageService,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() private constantService: ConstantService,
    @Optional() private generatorService: GeneratorService
  ) {}

}
