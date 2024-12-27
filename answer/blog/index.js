const blogs = [
  {
    title: '블로그1',
    content: '블로그 관련 Javascript Class 입니다',
    createdAt: new Date(2024, 11, 25, 11, 23, 11),
  },
  {
    title: '2그로블',
    content: '다니입 ssalC tpircsavaJ 련관 2그로블',
    createdAt: new Date(2024, 11, 25, 11, 25, 12),
  },
  {
    title: '3블로그',
    content: 'Javascript Class For Blog 3',
    createdAt: new Date(2024, 11, 26, 13, 15, 11),
  },
];

const blogContainer = document.getElementById('blogContainer');

const setBlog = (blog) => {
  while (blogContainer.firstChild) {
    blogContainer.removeChild(blogContainer.lastChild);
  }
  if (blog.length === 0) {
    const noSearch = document.createElement('span');
    noSearch.className = 'title';
    noSearch.innerText = '검색결과가 없습니다.';
    blogContainer.appendChild(noSearch);
  } else {
    for (const b of blog) {
      const blogDiv = document.createElement('div');
      blogDiv.className = 'blog';

      const header = document.createElement('div');
      header.className = 'head';

      const title = document.createElement('span');
      title.className = 'title';
      title.innerText = b.title;
      const date = document.createElement('span');
      date.className = 'date';
      date.innerText = `${b.createdAt.getMonth() + 1}월 ${b.createdAt.getDate()}일 ${b.createdAt.getHours()}:${b.createdAt.getMinutes()}`;

      header.appendChild(title);
      header.appendChild(date);

      const content = document.createElement('span');
      content.innerText = b.content;

      blogDiv.appendChild(header);
      blogDiv.appendChild(content);
      blogContainer.appendChild(blogDiv);
    }
  }
}
setBlog(blogs);


const searchInput = document.getElementById('searchInput');

const searchKeyword = () => {
  setBlog(blogs.filter((blog) =>
    blog.title.includes(searchInput.value) || blog.content.toLocaleLowerCase().includes(searchInput.value.toLocaleLowerCase())));
}

const order = document.getElementById('order');

const orderBlog = () => {
  switch (order.value) {
    case 'length':
      setBlog(blogs.sort((a, b) => {
        if (a.content.length < b.content.length) return 1;
        if (a.content.length > b.content.length) return -1;
        return 0;
      }));
      break;
    case 'new':
      setBlog(blogs.sort((a, b) => {
        if (a.createdAt.getTime() < b.createdAt.getTime()) return 1;
        if (a.createdAt.getTime() > b.createdAt.getTime()) return -1;
        return 0;
      }));
      break;
    case 'old':
      setBlog(blogs.sort((a, b) => {
        if (a.createdAt.getTime() < b.createdAt.getTime()) return -1;
        if (a.createdAt.getTime() > b.createdAt.getTime()) return 1;
        return 0;
      }));
      break;
  }
}
