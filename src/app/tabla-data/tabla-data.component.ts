import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AllUserService } from '../services/all-user.service';
import { UserTs } from '../models/user.ts';
import { MatFormFieldControl } from '@angular/material/form-field';


@Component({
  selector: 'app-tabla-data',
  templateUrl: './tabla-data.component.html',
  styleUrls: ['./tabla-data.component.css']
})
export class TablaDataComponent {


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  constructor(private instanciando: AllUserService){}



  Listado: UserTs[] = [];
  displayedColumns: string[] = ['id', 'name', 'username'];
  dataSource: any;
  clickedRows = new Set<UserTs>();



  listado = new Array();
  listadoArr = new Array();
  ngOnInit(): void{
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.instanciando.getAllUser().subscribe({
      next: (userAll: string)=>{
        this.listado.push(userAll);
        this.listadoArr = [...this.listado];
        this.dataSource = this.listadoArr[0];
        console.log(this.dataSource)
      },
      error:(er)=>{console.error(er)},
      complete:()=>console.info("se registraron los datos")
    })
  }

}
