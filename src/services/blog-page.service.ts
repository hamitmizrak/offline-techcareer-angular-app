import { BlogCard } from './../blog-main/BlogCard';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

// Global Service
@Injectable({
  providedIn: 'root'
})
export class BlogPageService implements OnInit{

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  // PATH
  path:string="http://localhost:4444/blog";

  // LIST
  // pipe: observable üzerinden dizi işlemlernini sırayla uygulamak içindir
  // map: her elemana eriş
  // filter: filtreleme
  // tap: Debugging, loglama amacıyla kulalnmaktayız
  // catchError: Gelen hataları almak içindir
  getBlogServiceObservable(): Observable<BlogCard[]>{
    return this.httpClient.get<BlogCard[]>(this.path)
    .pipe(tap((response)=> console.log(JSON.stringify(response))),
    catchError(this.observableBlogErrorHandler)
    )
  }

  observableBlogErrorHandler(err: HttpErrorResponse){
    let dataError="";
    if(err.error instanceof ErrorEvent){
      dataError="Bir hatamız vardı"+err.error.message;
    }else{
      dataError="Apiden istek gelmiyor json-server kapalı olabilir mi ?"
    }
    return throwError(dataError);
  }


} //end class BlogPageService
