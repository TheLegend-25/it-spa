// import { RoomDetails } from './RoomDetails';
// import { NavButton } from '../common/NavButton';
// import { cartManager } from '../cart/cart-manager';

export function Treatments() {

  const section = document.createElement('section');
  const ul = document.createElement('ul');
  
  section.innerHTML = `
    <h2>Sprawdź ofertę zabiegów.</h2>
    <p class="loading">Ładuję listę zabiegów...</p>
  `;

  // pobieramy liste pokoi z serwera

  fetch('http://localhost:3000/treatments')
    .then(response => response.json())
    .then(treatments => {
        const lis = treatments.map(treatment => {
          const li = document.createElement('li');

          li.innerHTML = `
            <div class="flip-card-inner">
              <div class="flip-card-back">
                <p>${treatment.info}</p>
              </div>
              <div class="flip-card-front">
                <h4>${treatment.name}</h4>
                <p>
                  <strong>Czas zabiegu: ${treatment.time}min</strong>
                </p>
                <p>
                  <strong>${treatment.price.toFixed(2)} PLN</strong>
                </p>
                <footer></footer>
              </div>
              
            </div>
          `;

          li.className="flip-card"

          return li;
        });

        ul.append(...lis);

        // usuwamy element mowiacy o ladowaniu
        section.querySelector('.loading').remove();
        // podstawiamy gotowa liste z pokojami
        section.append(ul);
    });

  return section;
}
