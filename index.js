async function fetchData(document) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();

    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.textContent = data.title;
    p.textContent = data.body;

    document.body.appendChild(h1);
    document.body.appendChild(p);
  }

async function fetchPosts(doc = document) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  displayPosts(posts, doc);
  return posts;
}

function displayPosts(posts, doc = document) {
  const ul = doc.getElementById('post-list');
  if (!ul) return;
  posts.forEach((post) => {
    const li = doc.createElement('li');
    const h1 = doc.createElement('h1');
    const p = doc.createElement('p');
    h1.textContent = post.title;
    p.textContent = post.body;
    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
  });
}

module.exports = fetchData;
module.exports.fetchPosts = fetchPosts;
module.exports.displayPosts = displayPosts;