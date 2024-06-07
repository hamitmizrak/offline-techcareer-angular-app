import { BlogCard } from './../blog-main/BlogCard';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  // pipe Adı
  name: 'searchBlogFilter',

  // Bu componenti bağımsız olarak kullanmak içindir
  standalone: true
})
export class SearchBlogFilterPipe implements PipeTransform {

  // Blog Category'sine göre arama yap
  transform(value: BlogCard[], dataFilterBlogCategory?:any): BlogCard[] {
    // ternary
    dataFilterBlogCategory=dataFilterBlogCategory?dataFilterBlogCategory.toLocaleLowerCase():null;
   
    return dataFilterBlogCategory?value.filter(
      (category:BlogCard) => 
      category.categoryName
      .toLocaleLowerCase()
      .indexOf(dataFilterBlogCategory) !== -1):value;
  } //end transform
} //end class SearchBlogFilter
