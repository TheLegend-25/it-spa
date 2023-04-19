// Cart.js

import { cartManager } from '../cart/cart-manager';
import { NavButton } from '../common/NavButton';



export function Cart() {

  const section = document.createElement('section');

 

  section.innerHTML = `
    <div id="daty">
      <div>
        <h6 style="color:#f4b700">Wybierz datę przyjazdu</h6>
          <input type="date" id="data1">
      </div>
      <div>
        <h6 style="color:#f4b700">Wybierz datę wyjazdu</h6>
          <input type="date" id="data2">
      </div>
    </div>
    <h4 style="color:#f4b700" id="dni"> Liczba nocy:</h4>
    <div id="cartcss">
    <h3>Przeglądaj zawartość koszyka:</h3>
    <p></p>
    <table class="table"></table>
    <div>
  `;
  const czas1 = section.querySelector("#data1")
  const czas2 = section.querySelector("#data2")
  const oneDay = 24 * 60 * 60 * 1000;
  
  
  czas1.addEventListener("change",()=>{
    const czas0 = new Date()
    const czas00 = czas0.getTime(czas0)
    const czas11 = new Date(czas1.value)
    const czas111 = czas11.getTime(czas11)
    const czas22 = new Date(czas2.value)
    const czas222 = czas22.getTime(czas22)
    const dni = Math.round(Math.abs((czas222 - czas111) / oneDay));
    if (czas111 < czas00){
      alert("wybierz poprawną datę")
      czas1.value = null
      section.querySelector("#dni").innerHTML=`Liczba nocy:`
    }
    else if (czas111 > czas222){
      alert("data wyjazdu nie może nastąpić przed datą przyjazdu")
      czas2.value = null
      section.querySelector("#dni").innerHTML=`Liczba nocy:`
    }
    else if ((czas222 - czas111)/oneDay > 365){
      alert("maksymalna długość rezerwacji to 365 dni")
      czas2.value = null
      section.querySelector("#dni").innerHTML=`Liczba nocy:`
    }
    else if(czas111>czas00+(oneDay*365)){
      alert("pobyt można rezerwować maksymalnie na rok do przodu")
      czas1.value = null
      section.querySelector("#dni").innerHTML=`Liczba nocy:`
    }
    else if (isNaN(dni)){
    section.querySelector("#dni").innerHTML=`Liczba nocy:`
    }
    else{
    section.querySelector("#dni").innerHTML=`Liczba nocy:${dni}`
    }
    
  })
  
  czas2.addEventListener("change",()=>{
    const czas0 = new Date()
    const czas00 = czas0.getTime(czas0)
    const czas11 = new Date(czas1.value)
    const czas111 = czas11.getTime(czas11)
    const czas22 = new Date(czas2.value)
    const czas222 = czas22.getTime(czas22)
    const dni = Math.round(Math.abs((czas222 - czas111) / oneDay));
    
    if (czas111 > czas222){
      alert("data wyjazdu nie może nastąpić przed datą przyjazdu")
      czas2.value = null
      section.querySelector("#dni").innerHTML=`Liczba nocy:`
    }
    else if ((czas222 - czas111)/oneDay > 365){
      alert("maksymalna długość rezerwacji to 365 dni")
      czas2.value = null
      section.querySelector("#dni").innerHTML=`Liczba nocy:`
    }
    else if (isNaN(dni)){
    section.querySelector("#dni").innerHTML=`Liczba nocy:`
    }
    else{
    section.querySelector("#dni").innerHTML=`Liczba nocy:${dni}`
    }
    
  })

  const tableHead = document.createElement('tr');

  tableHead.innerHTML = `
    <th>Name</th>
    <th>Quantity</th>
    <th>Price</th>
    <th></th>
  `;

  const tableRows = cartManager.getAllItems().map(item => {
    const tr = document.createElement('tr');

    const removeItem = NavButton('🗑️', () => {
      cartManager.removeItem(item);
      return Cart();
    }, ['btn']);

    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>${item.price.toFixed(2)} PLN</td>
      <td></td>
    `;

    tr.lastElementChild.append(removeItem);

    return tr;
  });

  const tableFooter = document.createElement('tr');

  tableFooter.innerHTML = `
    <td></td>
    <td id="noce"></td>
    <td>
      Total = <strong>${cartManager.getTotalPrice()}</strong> PLN
    </td>
    <td></td>
  `;
  

  // kompletujemy zawartosc tabeli
  section.querySelector('.table').append(tableHead, ...tableRows, tableFooter);

  return section;

}

