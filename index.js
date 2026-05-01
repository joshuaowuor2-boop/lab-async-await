async function fetchData(doc = document) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  displayPosts(posts, doc);
  return posts;
}

function displayPosts(posts, doc = document) {
  let ul = doc.getElementById('post-list');
  if (!ul) {
    ul = doc.createElement('ul');
    ul.id = 'post-list';
    doc.body.appendChild(ul);
  }
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
  module.exports.fetchData = fetchData;
  module.exports.fetchPosts = fetchData;
  module.exports.displayPosts = displayPosts;
}
