import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactoComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);

  contactoForm: FormGroup;
  enviado = signal(false);

  constructor() {
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9+\\s-]{7,15}$')]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {
    const productoQuery = this.route.snapshot.queryParamMap.get('producto');
    if (productoQuery) {
      this.contactoForm.patchValue({
        mensaje: `Hola! Quisiera consultar por el producto: ${productoQuery}.`
      });
    }
  }

  onSubmit() {
    if (this.contactoForm.valid) {
      console.log('Formulario enviado:', this.contactoForm.value);
      this.enviado.set(true);
      this.contactoForm.reset();
      
      // Simular reset del estado de éxito
      setTimeout(() => this.enviado.set(false), 5000);
    } else {
      this.contactoForm.markAllAsTouched();
    }
  }
}
