import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductosService } from '../../core/services/productos.service';
import { ProductoCard } from '../../shared/components/producto-card/producto-card.component';
import { Producto } from '../../core/models/producto.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProductoCard],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private router = inject(Router);
  private productosService = inject(ProductosService);
  
  destacados = this.productosService.destacados;

  irACatalogo() {
    this.router.navigate(['/quesos']);
  }

  onConsultar(producto: Producto) {
    this.router.navigate(['/contacto'], { queryParams: { producto: producto.nombre } });
  }
}
