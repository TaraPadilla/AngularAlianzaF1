import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import Papa, * as papa from 'papaparse';

@Component({
  selector: 'app-proposal',
  standalone: true,
  imports: [
    MatFormFieldModule,       // Para usar mat-form-field
    MatInputModule,           // Para usar matInput
    MatButtonModule,          // Para los botones de Angular Material
    MatCardModule, 
    ReactiveFormsModule,
    MatGridList, 
    MatGridTile, 
    FormsModule,
    CommonModule,
    MatTableModule,
    MatCheckbox, HttpClientModule
  ],       // Importar MatCardModule para mat-card
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent {
  displayedColumns: string[] = ['id', 'elemento', 'tiempo', 'cantidad', 'horas', 'costo'];
  dataSource = new MatTableDataSource<any>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCSV();
  }

  loadCSV(): void {
    // Cargar el archivo CSV desde la carpeta assets
    // D:\F1\AngularAlianzaF1\src\assets\Precios.csv
    this.http.get('assets/Precios.csv', { responseType: 'text' }).subscribe(
      (data) => {
        // Parsear el CSV usando PapaParse
        Papa.parse(data, {
          header: true, // Asumimos que la primera fila tiene encabezados
          skipEmptyLines: true,
          complete: (result) => {
            console.log(result.data); 
            // Asignar el resultado parseado al dataSource de la tabla
            this.dataSource.data = result.data;
          },
          error: (error: HttpErrorResponse) => {
            console.error('Error al leer el CSV: ', error);
          }
        });
      },
      (error) => {
        console.error('Error al cargar el archivo CSV: ', error);
      }
    );
  }

  //Implementar la función para calculaHoras que recibe el tiempo y coloca el valor en la columna horas multiplicando el tiempo por la cantidad
    calcularHoras(element: any): void {
      if (element.cantidad && element.tiempo) {
        element.horas = element.cantidad * element.tiempo;
        element.costo = element.horas * 31300;
      } else {
        element.horas = 0; // O algún valor predeterminado si falta la cantidad o el tiempo
      }
    }
}


