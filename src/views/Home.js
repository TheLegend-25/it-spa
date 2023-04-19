// Home.js
export function Home() {

  const section = document.createElement('section');

  const img = document.createElement('img');
  img.src = require('../assets/dog-chilling.jpg');
  img.style.width = '20vw'; // vw = view width
  img.id= 'piesel'

  section.innerHTML = `
    <div class="home">
    <h2 class="home">Witaj w IT SPA.</h2>
    <p class="home">Każdy programista lubi u nas odpoczywać.</p>
    <div>
  `;

  section.append(img);

  return section;

}
