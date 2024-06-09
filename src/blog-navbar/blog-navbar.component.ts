import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-navbar',
  standalone: true,
  imports: [],
  templateUrl: './blog-navbar.component.html',
  styleUrl: './blog-navbar.component.css'
})
export class BlogNavbarComponent {
// navBar:{}={}
navBar:{
  logo:{
    logoName:String,
    logoFontAwesome:string,
    logoPicture:String,
    logoLink:string,
    logoTitle:string
  },
  navbarLink:Array<any>
}={
  logo:{
    logoName:'Tech',
    logoFontAwesome:'fab fa-angular',
    logoPicture:'assets/img/logo.png',
    logoLink:'/',
    logoTitle:'Tech'
  },
  navbarLink:[
    {
      linkName:'Anasayfa',
      linkFontAwesome:'fas fa-home',
      linkLink:'/',
      linkTitle:'Home'
    },
    {
      linkName:'Hakkımızda',
      linkFontAwesome:'fas fa-info-circle',
      linkLink:'/about',
      linkTitle:'About'
    },
    {
      linkName:'İletişim',
      linkFontAwesome:'fas fa-envelope',
      linkLink:'/contact',
      linkTitle:'Contact'
    },
    {
      linkName:'Blog',
      linkFontAwesome:'fas fa-blog',
      linkLink:'/blog',
      linkTitle:'Blog'
    },{
      linkName:'Register',
      linkFontAwesome:'fas fa-blog',
      linkLink:'/register',
      linkTitle:'Register'
    }
  ]
}


}
