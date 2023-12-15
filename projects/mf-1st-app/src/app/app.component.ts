import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FirstModuleModule } from './modules/first-module/first-module.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FirstModuleModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mf-1st-app';
}
