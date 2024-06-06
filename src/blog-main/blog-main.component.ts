import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { BlogCard } from './BlogCard';

@Component({
  selector: 'app-blog-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-main.component.html',
  styleUrl: './blog-main.component.css'
})
export class BlogMainComponent {

  // Variables

  // constructor
  constructor() { }

  //DetailPage
  detailPage() {
    alert("Detay Sayfası");
    if (window.confirm('Detay Sayfasına gitmek istiyor musunuz ?')) {
      window.location.href = "http://localhost:4200/blog-detail/1";
    } else {
      alert("Detay Sayfasına gidilmedi");
    }
  }


  // BlogCard
  blogCard: BlogCard[] = [
    {
      id: 1,
      header: "header-1",
      title: "title-1",
      text: "text-1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint culpa, eaque harum corporis saepe quo explicabo repellendus. Cumque blanditiis minus rerum dolorem qui expedita rem inventore magnam! Accusantium, repudiandae praesentium? Autem placeat commodi eaque quod exercitationem, facilis deserunt voluptates? Illo molestiae reiciendis sit dignissimos eius aliquam maiores, delectus fugiat laboriosam sint, consectetur distinctio itaque repellat. Delectus necessitatibus provident nihil ratione! Officia, perferendis tenetur? Molestias, quisquam reprehenderit. Recusandae aut voluptatum modi error nihil id sint esse unde! Ut dolores similique voluptatem, doloremque sunt tenetur quae nesciunt quaerat, dolorum sed, mollitia doloribus. Voluptatem perferendis debitis dolore non ipsam, blanditiis nostrum assumenda accusamus cum unde mollitia vel laboriosam numquam ad recusandae alias, perspiciatis ipsa id dolorem facere. Quae itaque maiores tempore voluptas quidem.",
      description: "description-1",
      picture: "https://cdn.pixabay.com/photo/2020/03/19/12/16/jellyfish-4947355_1280.jpg",
      date: String(new Date()),
      link: 'blog',
      categoryName: "frontend",
    },
    {
      id: 2,
      header: "header-2",
      title: "title-2",
      text: "text-2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint culpa, eaque harum corporis saepe quo explicabo repellendus. Cumque blanditiis minus rerum dolorem qui expedita rem inventore magnam! Accusantium, repudiandae praesentium? Autem placeat commodi eaque quod exercitationem, facilis deserunt voluptates? Illo molestiae reiciendis sit dignissimos eius aliquam maiores, delectus fugiat laboriosam sint, consectetur distinctio itaque repellat. Delectus necessitatibus provident nihil ratione! Officia, perferendis tenetur? Molestias, quisquam reprehenderit. Recusandae aut voluptatum modi error nihil id sint esse unde! Ut dolores similique voluptatem, doloremque sunt tenetur quae nesciunt quaerat, dolorum sed, mollitia doloribus. Voluptatem perferendis debitis dolore non ipsam, blanditiis nostrum assumenda accusamus cum unde mollitia vel laboriosam numquam ad recusandae alias, perspiciatis ipsa id dolorem facere. Quae itaque maiores tempore voluptas quidem.",
      description: "description-2",
      picture: "https://cdn.pixabay.com/photo/2020/03/19/12/16/jellyfish-4947355_1280.jpg",
      date: String(new Date()),
      link: 'blog',
      categoryName: "webservice",
    },
    {
      id: 3,
      header: "header-3",
      title: "title-3",
      text: "text-3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint culpa, eaque harum corporis saepe quo explicabo repellendus. Cumque blanditiis minus rerum dolorem qui expedita rem inventore magnam! Accusantium, repudiandae praesentium? Autem placeat commodi eaque quod exercitationem, facilis deserunt voluptates? Illo molestiae reiciendis sit dignissimos eius aliquam maiores, delectus fugiat laboriosam sint, consectetur distinctio itaque repellat. Delectus necessitatibus provident nihil ratione! Officia, perferendis tenetur? Molestias, quisquam reprehenderit. Recusandae aut voluptatum modi error nihil id sint esse unde! Ut dolores similique voluptatem, doloremque sunt tenetur quae nesciunt quaerat, dolorum sed, mollitia doloribus. Voluptatem perferendis debitis dolore non ipsam, blanditiis nostrum assumenda accusamus cum unde mollitia vel laboriosam numquam ad recusandae alias, perspiciatis ipsa id dolorem facere. Quae itaque maiores tempore voluptas quidem.",
      description: "description-3",
      picture: "https://cdn.pixabay.com/photo/2020/03/19/12/16/jellyfish-4947355_1280.jpg",
      date: String(new Date()),
      link: 'blog',
      categoryName: "database",
    },
    {
      id: 4,
      header: "header-4",
      title: "title-4",
      text: "text-4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint culpa, eaque harum corporis saepe quo explicabo repellendus. Cumque blanditiis minus rerum dolorem qui expedita rem inventore magnam! Accusantium, repudiandae praesentium? Autem placeat commodi eaque quod exercitationem, facilis deserunt voluptates? Illo molestiae reiciendis sit dignissimos eius aliquam maiores, delectus fugiat laboriosam sint, consectetur distinctio itaque repellat. Delectus necessitatibus provident nihil ratione! Officia, perferendis tenetur? Molestias, quisquam reprehenderit. Recusandae aut voluptatum modi error nihil id sint esse unde! Ut dolores similique voluptatem, doloremque sunt tenetur quae nesciunt quaerat, dolorum sed, mollitia doloribus. Voluptatem perferendis debitis dolore non ipsam, blanditiis nostrum assumenda accusamus cum unde mollitia vel laboriosam numquam ad recusandae alias, perspiciatis ipsa id dolorem facere. Quae itaque maiores tempore voluptas quidem.",
      description: "description-4",
      picture: "https://cdn.pixabay.com/photo/2020/03/19/12/16/jellyfish-4947355_1280.jpg",
      date: String(new Date()),
      link: 'blog',
      categoryName: "backend",
    },
    {
      id: 5,
      header: "header-5",
      title: "title-5",
      text: "text-5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint culpa, eaque harum corporis saepe quo explicabo repellendus. Cumque blanditiis minus rerum dolorem qui expedita rem inventore magnam! Accusantium, repudiandae praesentium? Autem placeat commodi eaque quod exercitationem, facilis deserunt voluptates? Illo molestiae reiciendis sit dignissimos eius aliquam maiores, delectus fugiat laboriosam sint, consectetur distinctio itaque repellat. Delectus necessitatibus provident nihil ratione! Officia, perferendis tenetur? Molestias, quisquam reprehenderit. Recusandae aut voluptatum modi error nihil id sint esse unde! Ut dolores similique voluptatem, doloremque sunt tenetur quae nesciunt quaerat, dolorum sed, mollitia doloribus. Voluptatem perferendis debitis dolore non ipsam, blanditiis nostrum assumenda accusamus cum unde mollitia vel laboriosam numquam ad recusandae alias, perspiciatis ipsa id dolorem facere. Quae itaque maiores tempore voluptas quidem.",
      description: "description-5",
      picture: "https://cdn.pixabay.com/photo/2020/03/19/12/16/jellyfish-4947355_1280.jpg",
      date: String(new Date()),
      link: 'blog',
      categoryName: "database",
    },
    {
      id: 6,
      header: "header-6",
      title: "title-6",
      text: "text-6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint culpa, eaque harum corporis saepe quo explicabo repellendus. Cumque blanditiis minus rerum dolorem qui expedita rem inventore magnam! Accusantium, repudiandae praesentium? Autem placeat commodi eaque quod exercitationem, facilis deserunt voluptates? Illo molestiae reiciendis sit dignissimos eius aliquam maiores, delectus fugiat laboriosam sint, consectetur distinctio itaque repellat. Delectus necessitatibus provident nihil ratione! Officia, perferendis tenetur? Molestias, quisquam reprehenderit. Recusandae aut voluptatum modi error nihil id sint esse unde! Ut dolores similique voluptatem, doloremque sunt tenetur quae nesciunt quaerat, dolorum sed, mollitia doloribus. Voluptatem perferendis debitis dolore non ipsam, blanditiis nostrum assumenda accusamus cum unde mollitia vel laboriosam numquam ad recusandae alias, perspiciatis ipsa id dolorem facere. Quae itaque maiores tempore voluptas quidem.",
      description: "description-1",
      picture: "https://cdn.pixabay.com/photo/2020/03/19/12/16/jellyfish-4947355_1280.jpg",
      date: String(new Date()),
      link: 'blog',
      categoryName: "frontend",
    },
    {
      id: 7,
      header: "header-7",
      title: "title-7",
      text: "text-7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint culpa, eaque harum corporis saepe quo explicabo repellendus. Cumque blanditiis minus rerum dolorem qui expedita rem inventore magnam! Accusantium, repudiandae praesentium? Autem placeat commodi eaque quod exercitationem, facilis deserunt voluptates? Illo molestiae reiciendis sit dignissimos eius aliquam maiores, delectus fugiat laboriosam sint, consectetur distinctio itaque repellat. Delectus necessitatibus provident nihil ratione! Officia, perferendis tenetur? Molestias, quisquam reprehenderit. Recusandae aut voluptatum modi error nihil id sint esse unde! Ut dolores similique voluptatem, doloremque sunt tenetur quae nesciunt quaerat, dolorum sed, mollitia doloribus. Voluptatem perferendis debitis dolore non ipsam, blanditiis nostrum assumenda accusamus cum unde mollitia vel laboriosam numquam ad recusandae alias, perspiciatis ipsa id dolorem facere. Quae itaque maiores tempore voluptas quidem.",
      description: "description-1",
      picture: "https://cdn.pixabay.com/photo/2020/03/19/12/16/jellyfish-4947355_1280.jpg",
      date: String(new Date()),
      link: 'blog',
      categoryName: "frontend",
    },
    {
      id: 8,
      header: "header-8",
      title: "title-8",
      text: "text-8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint culpa, eaque harum corporis saepe quo explicabo repellendus. Cumque blanditiis minus rerum dolorem qui expedita rem inventore magnam! Accusantium, repudiandae praesentium? Autem placeat commodi eaque quod exercitationem, facilis deserunt voluptates? Illo molestiae reiciendis sit dignissimos eius aliquam maiores, delectus fugiat laboriosam sint, consectetur distinctio itaque repellat. Delectus necessitatibus provident nihil ratione! Officia, perferendis tenetur? Molestias, quisquam reprehenderit. Recusandae aut voluptatum modi error nihil id sint esse unde! Ut dolores similique voluptatem, doloremque sunt tenetur quae nesciunt quaerat, dolorum sed, mollitia doloribus. Voluptatem perferendis debitis dolore non ipsam, blanditiis nostrum assumenda accusamus cum unde mollitia vel laboriosam numquam ad recusandae alias, perspiciatis ipsa id dolorem facere. Quae itaque maiores tempore voluptas quidem.",
      description: "description-1",
      picture: "https://cdn.pixabay.com/photo/2020/03/19/12/16/jellyfish-4947355_1280.jpg",
      date: String(new Date()),
      link: 'blog',
      categoryName: "frontend",
    },
    {
      id: 9,
      header: "header-9",
      title: "title-9",
      text: "text-9 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint culpa, eaque harum corporis saepe quo explicabo repellendus. Cumque blanditiis minus rerum dolorem qui expedita rem inventore magnam! Accusantium, repudiandae praesentium? Autem placeat commodi eaque quod exercitationem, facilis deserunt voluptates? Illo molestiae reiciendis sit dignissimos eius aliquam maiores, delectus fugiat laboriosam sint, consectetur distinctio itaque repellat. Delectus necessitatibus provident nihil ratione! Officia, perferendis tenetur? Molestias, quisquam reprehenderit. Recusandae aut voluptatum modi error nihil id sint esse unde! Ut dolores similique voluptatem, doloremque sunt tenetur quae nesciunt quaerat, dolorum sed, mollitia doloribus. Voluptatem perferendis debitis dolore non ipsam, blanditiis nostrum assumenda accusamus cum unde mollitia vel laboriosam numquam ad recusandae alias, perspiciatis ipsa id dolorem facere. Quae itaque maiores tempore voluptas quidem.",
      description: "description-1",
      picture: "https://cdn.pixabay.com/photo/2020/03/19/12/16/jellyfish-4947355_1280.jpg",
      date: String(new Date()),
      link: 'blog',
      categoryName: "frontend",
    },
  ];

}
