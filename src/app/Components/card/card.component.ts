import { Component } from '@angular/core';
import { Data } from 'src/app/data';
import { UserInfoService } from 'src/app/Services/user-info.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  datos: Data = {
    numero_tarjeta: '',
    nombre: '',
    mes_vencimiento: '',
    anio_vencimiento: '',
    codigo_seguridad: ''
  };

  constructor(private userInfoService: UserInfoService) {}

  ngOnInit() {
    this.userInfoService.getUserDataObservable().subscribe(data => {
      this.datos = data;
  })
  }
}
