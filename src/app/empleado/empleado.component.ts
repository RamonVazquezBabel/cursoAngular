import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit{
  nombre = "Juan"
  apellido = "Diaz"
  edad=17;
  //empresa="Babel Group"

  getEdad(){
    return this.edad;
  }

  llamaEmpresa(value:String){
    
  }
  
  constructor(){}

  ngOnInit(): void { 
    
  }
}
