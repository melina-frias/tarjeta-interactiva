import { Injectable } from '@angular/core';
import { Data } from '../data';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
private userDataSubject: BehaviorSubject<Data> = new BehaviorSubject<Data>({
  numero_tarjeta: '',
  nombre: '',
  mes_vencimiento: '',
  anio_vencimiento: '',
  codigo_seguridad: ''
})

  constructor() { }

  setUserData(data: Data) {
    this.userDataSubject.next(data);
  }

  getUserDataObservable(): Observable<Data> {
    return this.userDataSubject.asObservable();
  }
}
