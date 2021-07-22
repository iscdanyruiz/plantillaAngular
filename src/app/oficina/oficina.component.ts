import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  PeticionesService
} from "../services/peticiones.service";
import {
  Subject
} from "rxjs";
import {
  DataTableDirective
} from "angular-datatables";
import {
  Employee
} from "../models/empleado";
import {
  DataTableManager
} from "../services/dataTableManager.service";

@Component({
  selector: "app-oficina",
  templateUrl: "./oficina.component.html",
  styleUrls: ["./oficina.component.css"],
  providers: [DataTableManager, DataTableDirective, PeticionesService]
})
export class OficinaComponent implements OnInit, OnDestroy, AfterViewInit {


  @ViewChild(DataTableDirective)

  dtElement: DataTableDirective;
  dtOptions: any[] = [];
  dtTrigger: Subject < any > = new Subject();

  public employees: Employee[] = new Array();
  public title: string = "Empleados";

  constructor(
    private dataTableManager: DataTableManager,
    private _peticionesService: PeticionesService
  ) {}

  ngOnInit() {
    this.dataTableManager.sortColNumber = 1;
    this.dataTableManager.sortAsc = "desc";
    this.dtOptions.push(this.dataTableManager.onInitializeDtOptions(this.title));
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados() {
    this._peticionesService.getEmployees().subscribe(
      (employees: any) => {
        this.employees = new Array();
        employees.data.map(
          (employee: any) => {
            this.employees.push(employee);
          }
        );
        this.dataTableManager.rerender(this.dtElement, this.dtTrigger, 0);
      },
      error => {
        console.log( < any > error);
      }
    );
  }

}
