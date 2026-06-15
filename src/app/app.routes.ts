import {Routes} from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Inicio | Fiambre a Domicilio'
  },
  { 
    path: 'quienes-somos', 
    loadComponent: () => import('./features/quienes-somos/quienes-somos.component').then(m => m.QuienesSomosComponent),
    title: 'Quiénes Somos'
  },
  { 
    path: 'quesos', 
    loadComponent: () => import('./features/quesos/quesos.component').then(m => m.QuesosComponent),
    title: 'Quesos'
  },
  { 
    path: 'fiambres', 
    loadComponent: () => import('./features/fiambres/fiambres.component').then(m => m.FiambresComponent),
    title: 'Fiambres'
  },
  { 
    path: 'otras-variedades', 
    loadComponent: () => import('./features/otras-variedades/otras-variedades.component').then(m => m.OtrasVariedadesComponent),
    title: 'Otras Variedades'
  },
  { 
    path: 'formas-de-pago', 
    loadComponent: () => import('./features/formas-de-pago/formas-de-pago.component').then(m => m.FormasDePagoComponent),
    title: 'Formas de Pago'
  },
  { 
    path: 'contacto', 
    loadComponent: () => import('./features/contacto/contacto.component').then(m => m.ContactoComponent),
    title: 'Contacto'
  },
  { 
    path: 'buscar', 
    loadComponent: () => import('./features/search/search.component').then(m => m.SearchComponent),
    title: 'Resultado de Búsqueda'
  },
  { path: '**', redirectTo: '' }
];
