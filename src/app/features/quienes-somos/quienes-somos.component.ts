import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  templateUrl: './quienes-somos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuienesSomosComponent { }
