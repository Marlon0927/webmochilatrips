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

  getAllUsers() {
    this.userService.getAllUsersData().subscribe((data: {}) => {
      this.userList = data;
    });
  }
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
    this.getAllUsers();
  }

  /*newMessage(messageText: string) {
    this.toastr.success('Clic aquí para actualizar la lista', messageText)
      .onTap
      .pipe(take(1))
      .subscribe(() => window.location.reload());
  }*/

  newUserEntry() {
    this.userService.newUser(this.userForm.value).subscribe(
      () => {
        //Redirigiendo a la ruta actual /inicio y recargando la ventana
        this.router.navigate(['/inicio'])
          .then(() => {
            this.toastr.success('Usuario creado correctamente!');
          })
      }
    );
  }

  newMessage(messageText: string) {
    this.toastr.success('Clic aquí para actualizar la lista', messageText)
      .onTap
      .pipe(take(1))
      .subscribe(() => window.location.reload());
  }

  /*toggleEditAnimal(id: any) {
    this.idAnimal = id;
    console.log(this.idAnimal)
    this.userService.getOneAnimal(id).subscribe(
      data => {
        this.animalForm.setValue({
          nombre: data.nombre,
          edad: data.edad,
          tipo: data.tipo,
        });
      }
    );
    this.editableAnimal = !this.editableAnimal;
  }
  updateAnimalEntry() {
    //Removiendo valores vacios del formulario de actualización
    for (let key in this.animalForm.value) {
      if (this.animalForm.value[key] === '') {
        this.animalForm.removeControl(key);
      }
    }
    this.animalService.updateAnimal(this.idAnimal, this.animalForm.value).subscribe(
      () => {
        //Enviando mensaje de confirmación
        this.newMessage("Animal editado");
      }
    );
  }*/

  /*deleteAnimalEntry(id: any) {
    console.log(id)
    this.animalService.deleteAnimal(id).subscribe(
      () => {
        //Enviando mensaje de confirmación
        this.newMessage("Animal eliminado");
      }
    );
  }*/


}
