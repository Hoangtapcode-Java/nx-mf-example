import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';

export const appRoutes: Route[] = [
  {
    path: 'login_app',
    loadChildren: () =>
      loadRemote<typeof import('login_app/Routes')>('login_app/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: 'todo',
    loadChildren: () =>
      loadRemote<typeof import('todo/Routes')>('todo/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: '',
    component: NxWelcome,
  },
];
