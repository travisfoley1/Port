import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FeaturesComponent} from '../features/features.component'

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FeaturesComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

}
