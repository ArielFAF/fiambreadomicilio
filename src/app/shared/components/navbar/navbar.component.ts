import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block sticky top-0 z-[100] bg-brand-header text-white shadow-md'
  }
})
export class Navbar {
  private router = inject(Router);
  menuAbierto = signal(false);
  searchTerm = '';

  toggleMenu() {
    this.menuAbierto.update(v => !v);
  }

  cerrarMenu() {
    this.menuAbierto.set(false);
  }

  onSearch() {
    const q = this.searchTerm.trim();
    if (q) {
      this.router.navigate(['/buscar'], { queryParams: { q } });
      this.cerrarMenu();
      this.searchTerm = '';
    }
  }
  
}
