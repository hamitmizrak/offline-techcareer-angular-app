import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-header',
  standalone: true,
  imports: [],
  templateUrl: './blog-header.component.html',
  styleUrl: './blog-header.component.css'
})
export class BlogHeaderComponent {
  // one-way-bind
  logo:string="Tech Logo"
}
