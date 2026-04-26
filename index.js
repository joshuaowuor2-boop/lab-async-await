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

module.exports = fetchData;