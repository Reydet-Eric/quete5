import { Component } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

candidat: User = new User ("","","","")

onSubmit(): void {

alert(`Bonjour ${this.candidat.firstName}  ${this.candidat.lastName}\n Tu t'es enregistré avec ${this.candidat.email} comme adresse email. \n Merci pour ton inscription`);

}

}
