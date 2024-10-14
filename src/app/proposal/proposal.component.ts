import { CommonModule, DecimalPipe } from '@angular/common';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import Papa, * as papa from 'papaparse';
import { map, Observable, of, startWith } from 'rxjs';


@Component({
  selector: 'app-proposal',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],       // Importar MatCardModule para mat-card
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss'],
  providers: []
})
export class ProposalComponent implements OnInit {
  costoHora: number = 20000;
  displayedColumns: string[] = ['id', 'elemento', 'tiempo', 'cantidad', 'horas', 'costo'];
	filter = new FormControl('');
  
  private originalData: any[] = [];
  // Almacenar el Observable de los datos filtrados
  filteredData$: Observable<any[]> = of([]);


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCSV();
    // Escuchar cambios en el campo de búsqueda
    this.filter.valueChanges.subscribe((value) => {
      // Filtrar los datos originales con el valor del campo de búsqueda
      this.filteredData$ = of(this.originalData).pipe(
        map((data) => {
          return data.filter((item) => {
            return item.elemento.toLowerCase().includes((value ?? '').toLowerCase());
          });
        })
      );
    });
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
            this.originalData = result.data;
            // Emitir los datos originales para mostrarlos inicialmente
            this.filteredData$ = of(this.originalData);
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

  // Implementar el filter
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredData$ = of(this.originalData).pipe(
      map((data) => {
        return data.filter((item) => {
          return item.elemento.toLowerCase().includes(filterValue.toLowerCase());
        });
      })
    );
  }

  // Calcular el costo total de la propuesta
  getTotalCost(): number {
    return 0;
  }

  // Calcular el tiempo total de la propuesta
  getTotalTime(): number {
    return 0;
  }

}






