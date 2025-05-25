import { Component, OnInit } from '@angular/core';
import { DestinosService, Destino } from '../../services/destinos.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.css']
})
export class DestinosComponent implements OnInit {
  destinos: Destino[] = [];
<<<<<<< HEAD
  showDropdown = false;
  /*temaActual: 'claro' | 'oscuro' = 'claro';*/

=======
  
>>>>>>> a959089837bbd3a49955f469a20067681f4bd1df
  constructor(private destinosService: DestinosService) { }

  ngOnInit(): void {
    this.destinosService.getDestinos().subscribe((data: Destino[]) => {
      console.log('Datos recibidos:', data);
      this.destinos = data;
    });

<<<<<<< HEAD
    /* Detectar tema guardado
       const temaGuardado = localStorage.getItem('tema');
     this.temaActual = (temaGuardado as 'claro' | 'oscuro') || 'claro';
     this.aplicarTema();
   }
   
    alternarTema(): void {
     this.temaActual = this.temaActual === 'claro' ? 'oscuro' : 'claro';
     localStorage.setItem('tema', this.temaActual);
     this.aplicarTema();
   }
   
    aplicarTema(): void {
     const body = document.body;
     if (this.temaActual === 'oscuro') {
       body.classList.add('modo-oscuro');
     } else {
       body.classList.remove('modo-oscuro');
     }*/

=======
>>>>>>> a959089837bbd3a49955f469a20067681f4bd1df
  }
}