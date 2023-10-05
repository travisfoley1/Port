import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from '../hero/hero.component';
import {FeaturesComponent} from '../features/features.component'
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { SendMessageComponent } from '../send-message/send-message.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FeaturesComponent, FooterComponent, HeroComponent, PortfolioComponent, SendMessageComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
