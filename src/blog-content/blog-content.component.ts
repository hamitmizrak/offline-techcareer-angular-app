import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-content',
  standalone: true,
  imports: [],
  // templateUrl: './blog-content.component.html', // 1.YOL
template: `<p>Content Template URL</p>`,

  // styleUrl: './blog-content.component.css' //2.YOL
  styles: `p{
    color:red;
  }`
})
export class BlogContentComponent {

}
