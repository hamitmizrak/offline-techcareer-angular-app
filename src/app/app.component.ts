import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogContentComponent } from '../blog-content/blog-content.component';
import { BlogFooterComponent } from '../blog-footer/blog-footer.component';
import { BlogHeaderComponent } from '../blog-header/blog-header.component';
import { BlogMainComponent } from '../blog-main/blog-main.component';
import { BlogNavbarComponent } from '../blog-navbar/blog-navbar.component';

// Ana Root Project
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BlogHeaderComponent,BlogMainComponent,BlogFooterComponent,BlogContentComponent,BlogNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tech-angular-app';
}
