import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block bg-brand-header text-white/80 py-12'
  }
})
export class Footer {
  year = new Date().getFullYear();
}
