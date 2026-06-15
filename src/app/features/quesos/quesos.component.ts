import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductosService } from '../../core/services/productos.service';
import { ProductoCard } from '../../shared/components/producto-card/producto-card.component';
import { Router } from '@angular/router';
import { Producto } from '../../core/models/producto.model';

@Component({
  selector: 'app-quesos',
  standalone: true,
  imports: [ProductoCard],
  templateUrl: './quesos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuesosComponent {
  private productsService = inject(ProductosService);
  private router = inject(Router);
  
  productos = this.productsService.getByCategoria('queso');

  onConsultar(producto: Producto) {
    this.router.navigate(['/contacto'], { queryParams: { producto: producto.nombre } });
  }
}
