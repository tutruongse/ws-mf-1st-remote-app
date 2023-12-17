import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-module-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './module-home.component.html',
  styleUrl: './module-home.component.css'
})
export class ModuleHomeComponent {

}
