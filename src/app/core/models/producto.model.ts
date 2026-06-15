export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;       // precio por kg en ARS
  categoria: 'queso' | 'fiambre' | 'variedad';
  imagen?: string;
  destacado?: boolean;
}
