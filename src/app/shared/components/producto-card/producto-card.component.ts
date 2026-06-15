import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Producto } from '../../../core/models/producto.model';
import { PrecioArsPipe } from '../../pipes/precio-ars.pipe';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  // imports: [PrecioArsPipe],
  templateUrl: './producto-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'group block bg-brand-card rounded-2xl border border-brand-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
  }
})
export class ProductoCard {
  producto = input.required<Producto>();
  consultar = output<Producto>();

  onConsultar() {
    this.consultar.emit(this.producto());
  }
}
