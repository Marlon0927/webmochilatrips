import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { provideToastr, ToastrModule, ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  userList: any = [];
  userForm: FormGroup | any;
  idUser: any;
  editableUser: boolean = false;
  item: any;


  constructor(private userService: UserService, private toastr: ToastrService, private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      'usuario': '',
      'correo': '',
      'clave': '',
      'nombre': '',
      'telefono': '',
      'direccion': '',
      'ciudad': '',
      'preferencias_de_viaje': '',
      'rol': ''
    });

  }

  newUserEntry() {
    this.userService.newUser(this.userForm.value).subscribe(
      () => {
        this.router.navigate(['/inicio']).then(() => {
          this.toastr.success('Usuario creado correctamente!');
        });
      },
      (error) => {
        console.error('Error al crear usuario:', error);
        this.toastr.error('No se pudo crear el usuario.');
      }
    );
  }

}
