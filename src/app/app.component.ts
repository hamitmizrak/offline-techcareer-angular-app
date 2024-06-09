import { FormPageComponent } from './../form-page/form-page.component';
import { BlogPageService } from './../services/blog-page.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogAboutComponent } from './../blog-about/blog-about.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Services
import { AlertifyMessageServiceService } from './../services/alertify-message-service.service';


// Componentler
import { BlogContentComponent } from '../blog-content/blog-content.component';
import { BlogFooterComponent } from '../blog-footer/blog-footer.component';
import { BlogHeaderComponent } from '../blog-header/blog-header.component';
import { BlogMainComponent } from '../blog-main/blog-main.component';
import { BlogNavbarComponent } from '../blog-navbar/blog-navbar.component';
import { HttpClientModule } from '@angular/common/http';

// Ana Root Project
// Dikkat: Bütün componentleri buraya eklemeliyiz
@Component({

  // Html Tag root
  selector: 'app-root',

  // Bu component tek başına kullanabiliriz
  standalone: true,

  // Component veya Module ekliyoruz
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    BlogHeaderComponent,
    BlogMainComponent,
    BlogFooterComponent,
    BlogContentComponent,
    BlogNavbarComponent,
    BlogAboutComponent,
    HttpClientModule, //Api isteği
    FormPageComponent,
    ReactiveFormsModule
  ],
    
  // Global Service
  providers: [
    AlertifyMessageServiceService,
    BlogPageService
  ],

  // Html dosyasını normalde template:``
  templateUrl: './app.component.html',

  // Css dosyasını normalde styles:`p{color:red;}`
  styleUrl: './app.component.css'
})
// export:Bu classı başka yerde kullanmasına izin veriyorum
export class AppComponent {
  title = 'tech-angular-app';
}
