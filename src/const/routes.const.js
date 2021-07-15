import Search from '../views/search/search.view';
import Detail from '../views/detail/detail.view';
import Favorites from '../views/favorites/favorites.view';

export const routesSite = [
  {
    path: ['/', '/search'],
    component: Search,
  },
  {
    path: '/detail/:idMovie?',
    component: Detail,
  },
  {
    path: '/favorites',
    component: Favorites,
  },

];
