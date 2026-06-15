import { Injectable, signal, computed } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private readonly _productos = signal<Producto[]>([
    // QUESOS
    {
      id: 0,
      nombre: 'Cremoso Noal',
      descripcion: '',
      precio: 8500,
      categoria: 'queso',
      imagen: '/images/QuesocremosoNoal.webp',
      destacado: true
    },
    {
      id: 1,
      nombre: 'Cremoso D70',
      descripcion: '',
      precio: 8500,
      categoria: 'queso',
      imagen: '/images/QuesocremosoD70.webp',
      destacado: true
    },
    {
      id: 2,
      nombre: 'Cremoso Santa Ana',
      descripcion: '',
      precio: 6200,
      categoria: 'queso',
      imagen: '/images/QuesocremosoSantaAna.webp'
    },
    {
      id: 3,
      nombre: 'Cremoso Cremon La Serenísima',
      descripcion: '',
      precio: 5800,
      categoria: 'queso',
      imagen: '/images/QuesocremosoCremonLaSerenísima.webp'
    },
    {
      id: 4,
      nombre: 'Cremoso Cremon doble crema La Serenísima',
      descripcion: '',
      precio: 7900,
      categoria: 'queso',
      imagen: '/images/QuesocremosoCremondoblecremaLaSerenísima.webp',
      destacado: true
    },
    {
      id: 5,
      nombre: 'Cremoso Cremon light La Serenísima',
      descripcion: '',
      precio: 9200,
      categoria: 'queso',
      imagen: '/images/QuesocremosoCremonlightLaSerenísima.webp'
    },
    {
      id: 6,
      nombre: 'Cremoso Santa Ana por salud',
      descripcion: '',
      precio: 9800,
      categoria: 'queso',
      imagen: '/images/QuesocremosoSantaAnaporsalud.webp'
    },
    {
      id: 61,
      nombre: 'Cremoso Punta del Agua',
      descripcion: '',
      precio: 9800,
      categoria: 'queso',
      imagen: '/images/QuesoCremosoPuntadelAgua.webp'
    },
    {
      id: 7,
      nombre: 'Barra Makis',
      descripcion: '',
      precio: 9800,
      categoria: 'queso',
      imagen: '/images/barraMakis.webp'
    },
    {
      id: 8,
      nombre: 'Barra Noal rojo',
      descripcion: '',
      precio: 9800,
      categoria: 'queso',
      imagen: '/images/barraNoalrojo.webp'
    },
    {
      id: 9,
      nombre: 'Barra Noal verde',
      descripcion: '',
      precio: 9800,
      categoria: 'queso',
      imagen: '/images/barraNoalverde.webp'
    },
    {
      id: 10,
      nombre: 'Barra Santa Ana',
      descripcion: '',
      precio: 9800,
      categoria: 'queso',
      imagen: '/images/barraSantaAna.webp'
    },
    {
      id: 11,
      nombre: 'Barra Colonia Orcovi',
      descripcion: '',
      precio: 9800,
      categoria: 'queso',
      imagen: '/images/barraColoniaOrcovi.webp'
    },
    {
      id: 111,
      nombre: 'Barra Punta del Agua',
      descripcion: '',
      precio: 9800,
      categoria: 'queso',
      imagen: '/images/BarraPuntadelAgua.webp'
    },
    {
      id: 12,
      nombre: 'Para rallar Sardo fresco Tio Pujio',
      descripcion: '',
      precio: 9800,
      categoria: 'queso',
      imagen: '/images/pararallarSardofrescoTioPujio.webp'
    },
    {
      id: 13,
      nombre: 'Para rallar Sardo estacionado Tio Pujio',
      descripcion: '',
      precio: 9800,
      categoria: 'queso',
      imagen: '/images/pararallarSardoestacionadoTioPujio.webp'
    },
    {
      id: 14,
      nombre: 'Para rallar Reggianito Noal',
      descripcion: '',
      precio: 9800,
      categoria: 'queso',
      imagen: '/images/pararallarReggianitoNoal.webp'
    },
    {
      id: 15,
      nombre: 'Para rallar Azul La Quesera',
      descripcion: '',
      precio: 9800,
      categoria: 'queso',
      imagen: '/images/pararallarAzulLaQuesera.webp'
    },
    {
      id: 16,
      nombre: 'Mozzarella Brescia',
      descripcion: '',
      precio: 9800,
      categoria: 'queso',
      imagen: '/images/MozzarellaBrescia.webp'
    },
    {
      id: 17,
      nombre: 'Mozzarella Silvia',
      descripcion: '',
      precio: 9800,
      categoria: 'queso',
      imagen: '/images/MozzarellaSilvia.webp'
    },
    {
      id: 18,
      nombre: 'Mozzarella Colonia Orcovi',
      descripcion: '',
      precio: 9800,
      categoria: 'queso',
      imagen: '/images/MozzarellaColoniaOrcovi.webp'
    },
    // FIAMBRES
    {
      id: 18,
      nombre: 'Paleta Recreo',
      descripcion: '',
      precio: 5500,
      categoria: 'fiambre',
      imagen: '/images/PaletaRecreo.webp',
      destacado: true
    },
    {
      id: 19,
      nombre: 'Paleta Rifka',
      descripcion: '',
      precio: 12500,
      categoria: 'fiambre',
      imagen: '/images/PaletaRifka.webp',
      destacado: true
    },
    {
      id: 20,
      nombre: 'Paleta Antena',
      descripcion: '',
      precio: 15800,
      categoria: 'fiambre',
      imagen: '/images/PaletaAntena.webp',
    },
    {
      id: 21,
      nombre: 'Jamón cocido Welschen',
      descripcion: '',
      precio: 7200,
      categoria: 'fiambre',
      imagen: '/images/cocido-Welschen.webp'
    },
    {
      id: 22,
      nombre: 'Salame Emezeta',
      descripcion: '',
      precio: 8100,
      categoria: 'fiambre',
      imagen: '/images/SalameFZ.webp'
    },
    {
      id: 23,
      nombre: 'Salame Champion',
      descripcion: '',
      precio: 4500,
      categoria: 'fiambre',
      imagen: '/images/SalameChampion.webp'
    },
    {
      id: 24,
      nombre: 'Salame Recreo',
      descripcion: '',
      precio: 4500,
      categoria: 'fiambre',
      imagen: '/images/SalameRecreo.webp'
    },
    {
      id: 25,
      nombre: 'Salame Metro De la casa',
      descripcion: '',
      precio: 4500,
      categoria: 'fiambre',
      imagen: '/images/SalameMetroDelacasa.webp'
    },
    {
      id: 26,
      nombre: 'Salame 66',
      descripcion: '',
      precio: 4500,
      categoria: 'fiambre',
      imagen: '/images/Salame66.webp'
    },
    // VARIEDADES
    {
      id: 27,
      nombre: 'Aceitunas verdes 5kg',
      descripcion: '',
      precio: 3200,
      categoria: 'variedad',
      imagen: '/images/Aceitunasverdes5kg.webp',
    },
    {
      id: 28,
      nombre: 'Membrillo 5kg Profecia',
      descripcion: '',
      precio: 2800,
      categoria: 'variedad',
      imagen: '/images/Membrillo5kgProfecia.webp'
    },
    {
      id: 29,
      nombre: 'Pouch Cheddar Tonadita',
      descripcion: '',
      precio: 2800,
      categoria: 'variedad',
      imagen: '/images/PouchCheddarTonadita.webp'
    },
    {
      id: 30,
      nombre: 'Pouch queso untable Tonadita',
      descripcion: '',
      precio: 2800,
      categoria: 'variedad',
      imagen: '/images/PouchquesountableTonadita.webp'
    },
    {
      id: 31,
      nombre: 'Ricota Tio Pujio',
      descripcion: '',
      precio: 2800,
      categoria: 'variedad',
      imagen: '/images/RicotaTioPujio.webp'
    },
    {
      id: 32,
      nombre: 'Batata caja 5kg Profecia',
      descripcion: '',
      precio: 2800,
      categoria: 'variedad',
      imagen: '/images/Batatacaja5kgProfecia.webp'
    },
  ]);

  // Readonly signal for all products
  readonly productos = this._productos.asReadonly();

  // Derived signal for highlighted products
  readonly destacados = computed(() => 
    this._productos().filter(p => p.destacado)
  );

  getByCategoria(categoria: 'queso' | 'fiambre' | 'variedad') {
    return computed(() => 
      this._productos().filter(p => p.categoria === categoria)
    );
  }

  search(query: string) {
    const q = query.toLowerCase().trim();
    if (!q) return computed(() => []);
    
    return computed(() => 
      this._productos().filter(p => 
        p.nombre.toLowerCase().includes(q) || 
        p.descripcion.toLowerCase().includes(q) ||
        p.categoria.toLowerCase().includes(q)
      )
    );
  }
  
}
