async function fetchData(document) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  posts.forEach(post => {
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.textContent = post.title;
    p.textContent = post.body;

    document.body.appendChild(h1);
    document.body.appendChild(p);
  });
}

module.exports = fetchData;