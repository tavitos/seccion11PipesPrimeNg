import { Component, OnInit } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent implements OnInit {

  // i18n Select
  public name: string = 'Tavitos';
  public gender: 'male' | 'female' = 'male'; /** Asignación de tipo permitido, | <-- significa "o", es dicir male o female */
  
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  // i18n Plural
  public clients: string[] = ['María', 'Pedro', 'Tavitos', 'Fernando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  // KeyValue pipe
  public person = {
    name: 'Tavitos',
    age: 48,
    address: 'Ottawa Canada'
  }

  // Async pipe con observable
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value) )
    );
  
    // Async pipe con promesas
    public promiseValue: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Tenemos data en la promesa');
        console.log('Tenemos data en la promesa')
      }, 3500);
    });

  

  constructor() { }

  ngOnInit(): void {
  }

  changeClient():void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  deleteClient():void {
    this.clients.shift();
  }
  
}
