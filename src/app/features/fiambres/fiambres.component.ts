import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductosService } from '../../core/services/productos.service';
import { ProductoCard } from '../../shared/components/producto-card/producto-card.component';
import { Router } from '@angular/router';
import { Producto } from '../../core/models/producto.model';

@Component({
  selector: 'app-fiambres',
  standalone: true,
  imports: [ProductoCard],
  templateUrl: './fiambres.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiambresComponent {
  private productsService = inject(ProductosService);
  private router = inject(Router);
  
  productos = this.productsService.getByCategoria('fiambre');

  onConsultar(producto: Producto) {
    // this.router.navigate(['/contacto'], { queryParams: { producto: producto.nombre } });
    
  }
}
