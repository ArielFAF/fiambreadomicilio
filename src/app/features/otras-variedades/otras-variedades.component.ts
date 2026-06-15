import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductosService } from '../../core/services/productos.service';
import { ProductoCard } from '../../shared/components/producto-card/producto-card.component';
import { Router } from '@angular/router';
import { Producto } from '../../core/models/producto.model';

@Component({
  selector: 'app-otras-variedades',
  standalone: true,
  imports: [ProductoCard],
  templateUrl: './otras-variedades.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtrasVariedadesComponent {
  private productsService = inject(ProductosService);
  private router = inject(Router);
  
  productos = this.productsService.getByCategoria('variedad');

  onConsultar(producto: Producto) {
    this.router.navigate(['/contacto'], { queryParams: { producto: producto.nombre } });
  }
}
