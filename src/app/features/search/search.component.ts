import { ChangeDetectionStrategy, Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../core/services/productos.service';
import { ProductoCard } from '../../shared/components/producto-card/producto-card.component';
import { Producto } from '../../core/models/producto.model';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ProductoCard],
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productosService = inject(ProductosService);

  query = signal('');
  
  resultados = computed(() => {
    const q = this.query();
    return this.productosService.search(q)();
  });

  constructor() {
    this.route.queryParamMap.subscribe(params => {
      this.query.set(params.get('q') || '');
    });
  }

  onConsultar(producto: Producto) {
    this.router.navigate(['/contacto'], { queryParams: { producto: producto.nombre } });
  }
}
