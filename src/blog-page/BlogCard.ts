// interface
export interface IBlogCard{
    id: number;
    header: string;
    title: string;
    text: string;
    description: string;
    picture: string;
    date: string;
    link: string;
    categoryName: string;
}

// implements
export class BlogCard implements IBlogCard {
    
    // Field
    id: number;
    header: string;
    title: string;
    text: string;
    description: string;
    picture: string;
    date: string;
    link: string;
    categoryName: string;

    constructor(
        id: number,
        header: string,
        title: string,
        text: string,
        description: string,
        picture: string,
        date: string,
        link: string,
        categoryName: string) {
        this.id = id;
        this.header = header;
        this.title = title;
        this.text = text;
        this.description = description;
        this.picture = picture;
        this.date = date;
        this.link = link;
        this.categoryName = categoryName;
    }

}