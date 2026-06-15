import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precioArs',
  standalone: true
})
export class PrecioArsPipe implements PipeTransform {
  transform(value: number): string {
    const formatter = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return `${formatter.format(value)}/kg`;
  }
}
