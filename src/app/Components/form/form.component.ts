import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from 'src/app/data';
import { UserInfoService } from 'src/app/Services/user-info.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  form: FormGroup
  mostrarFormulario = true;



  constructor(private fb: FormBuilder, private userInfoService: UserInfoService) {
    this.form = this.fb.group({
      numero_tarjeta: ["", [Validators.required,
      Validators.pattern(/^[0-9]{16}$/),
    Validators.maxLength(16)]],
      nombre: ["", [Validators.required]],
      mes_vencimiento: ["", [Validators.required,
        Validators.pattern(/^[0-9]{2}$/),
      Validators.maxLength(2)]],
      anio_vencimiento: ["", [Validators.required,
        Validators.pattern(/^[0-9]*$/),
      Validators.maxLength(2)]],
      codigo_seguridad: ["", [Validators.required,
        Validators.pattern(/^[0-9]{3}$/),
      Validators.maxLength(3)]]

    })


    // this.datos = this.userInfoService.getUserData()
    this.form.valueChanges.subscribe(data => {
      this.userInfoService.setUserData(data);
    });

  }
msjExito(){
  this.mostrarFormulario = !this.mostrarFormulario;
  this.form.reset()
}


}
