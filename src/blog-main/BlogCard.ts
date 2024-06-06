// interface
export interface IBlogCard{
    id: number;
    header: String;
    title: string;
    text: string;
    description: string;
    picture: string;
    date: string;
    link: String;
    categoryName: String;
}

// implements
export class BlogCard implements IBlogCard {
    
    // Field
    id: number;
    header: String;
    title: string;
    text: string;
    description: string;
    picture: string;
    date: string;
    link: String;
    categoryName: String;

    constructor(
        id: number,
        header: String,
        title: string,
        text: string,
        description: string,
        picture: string,
        date: string,
        link: String,
        categoryName: String) {
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