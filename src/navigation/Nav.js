// Nav.js

import { NavButton } from '../common/NavButton';
import { Cart } from '../views/Cart';
import { Home } from '../views/Home';
import { Login } from '../views/Login';
import { RoomList } from '../views/RoomList';
import { Treatments } from '../views/Treatments';

const navItems = [
  { name: 'Home', component: Home },
  { name: 'Pokoje', component: RoomList },
  { name: 'Zabiegi', component: Treatments },
  { name: '🛒', component: Cart },
  { name: 'Konto', component: Login}
];

export function Nav() {
  const nav = document.createElement('nav');

  const navButtons = navItems.map(navItem => {
    return NavButton(navItem.name, navItem.component, ['btn']);
  });

  nav.append(...navButtons);

  return nav;
}
