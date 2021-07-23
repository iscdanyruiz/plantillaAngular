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
import {
  MatDialog
} from '@angular/material';

@Component({
  selector: "app-oficina",
  templateUrl: "./oficina.component.html",
  styleUrls: ["./oficina.component.css"],
  providers: [DataTableManager, PeticionesService]
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
    private _peticionesService: PeticionesService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.dataTableManager.sortColNumber = 0;
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
        this.employees = employees.data;
        this.dataTableManager.rerender(this.dtElement, this.dtTrigger, 0);
      },
      error => {
        console.log( < any > error);
      }
    );
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}
