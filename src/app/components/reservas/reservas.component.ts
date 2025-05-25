import { Component } from '@angular/core';
import { ReservasService } from '../../services/reservas.service';
import { provideToastr, ToastrModule, ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css',
})
export class ReservaComponent {

  reservaList: any = [];
  reservaForm: FormGroup | any;
  idUser: any;
  editableUser: boolean = false;
  item: any;


  constructor(private reservaService: ReservasService, private toastr: ToastrService, private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  getAllReservas() {
    this.reservaService.getAllReservasData().subscribe((data: {}) => {
      this.reservaList = data;
    });
  }
  ngOnInit() {
    this.reservaForm = this.formBuilder.group({
      'tipo_reserva': '',
      'destino': '',
      'fecha_inicio': '',
      'fecha_fin': '',
      'cant_personas': ''
    });
    this.getAllReservas();
  }

  /*newMessage(messageText: string) {
    this.toastr.success('Clic aquí para actualizar la lista', messageText)
      .onTap
      .pipe(take(1))
      .subscribe(() => window.location.reload());
  }*/

  newReservaEntry() {
    this.reservaService.newReserva(this.reservaForm.value).subscribe(
      () => {
        //Redirigiendo a la ruta actual /inicio y recargando la ventana
        this.router.navigate(['/inicio'])
          .then(() => {
            this.toastr.success('Reserva creada correctamente!');
          })
      }
    );
  }

  newMessage(messageText: string) {
    this.toastr.success('', messageText)
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
