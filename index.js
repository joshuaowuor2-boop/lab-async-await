async function fetchData(document) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();

  let h1 = document.querySelector('h1');
  if (!h1) {
    h1 = document.createElement('h1');
    document.body.appendChild(h1);
  }
  h1.textContent = data.title;

  let p = document.querySelector('p');
  if (!p) {
    p = document.createElement('p');
    document.body.appendChild(p);
  }
  p.textContent = data.body;

  return data;
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

if (typeof window !== 'undefined') {
  fetchData(document);
}

if (typeof module !== 'undefined') {
  module.exports = fetchData;
  module.exports.fetchPosts = fetchPosts;
  module.exports.displayPosts = displayPosts;
}
