import {
    Injectable
  } from '@angular/core';
  import {
    DataTableDirective
  } from 'angular-datatables';
  import {
    Subject
  } from 'rxjs';
  
  @Injectable()
  export class DataTableManager {
    public dtOptions: any[] = new Array();
    public groupColumn: number = 1;
    public isGrouping: boolean = false;
    public sortAsc: string = "asc";
    public sortColNumber: number = 0;
    public title: string = 'Sin titulo';
    spanish = {
      "info": "Mostrando la página _PAGE_ de _PAGES_",
      "infoEmpty": "Sin resultados por mostrar.",
      "infoFiltered": "(filtrado de _MAX_ registros totales)",
      "lengthMenu": "Mostrar _MENU_ registros",
      "zeroRecords": "Sin registros encontrados.",
      "buttons": {
        "copyTitle": 'Datos copiados',
        "copyKeys": 'Seguir adelante <i>ctrl</i> o <i>\u2318</i> + <i>C</i> para copiar los datos de la tabla a su portapapeles.<br><br>Para cancelar, haga clic en este mensaje o presione Esc.',
        "copySuccess": {
          _: '%d Lineas copiadas',
          1: '1 Linea copiada'
        }
      },
      'paginate': {
        'first': 'Primero',
        'previous': 'Anterior',
        'next': 'Siguiente',
        'last': 'Último',
      },
      'search': 'Palabra clave:',
    }
  
    onInitializeDtOptions(title: string) {
      return {
        groupColumn: this.groupColumn,
        deferRender: true,
        destroy: true,
        pageLength: 10,
        paging: true,
        pagingType: 'simple_numbers',
        responsive: true,
        search: true,
        order: [
          [this.sortColNumber, this.sortAsc]
        ],
        "drawCallback": (this.isGrouping) ? this.onInitializeGrouping : null,
        language: this.spanish,
        dom: 'lBfrtip',
        colReorder: {
          fixedColumnsRight: 2,
          order: [1, 0, 2]
        },
        buttons: [{
          extend: 'copy',
          text: 'Copiar',
          customize: function (data) {
            return data;
          }
        }, {
          extend: 'csv',
          title: title
        }, {
          extend: 'excel',
          title: title
        }, {
          extend: 'pdf',
          text: 'PDF',
          title: title,
          exportOptions: {
            modifier: {
              order: 'current', // 'current', 'applied', 'index',  'original'
              page: 'all', // 'all',     'current'
              search: 'applied' // 'none',    'applied', 'removed'
            }
          }
        }, {
          text: 'Imprimir',
          extend: 'print',
          title: title,
        }],
        initComplete: this.onAplyStyles
      };
    }
  
    onInitializeGrouping(settings: any) {
      var api = ( < any > this).api();
      var rows = api.rows({
        page: 'current'
      }).nodes();
      var last = null;
      api.column(0, {
        page: 'current'
      }).data().each(function (group, i) {
        if (last !== group) {
          $(rows).eq(i).before(
            '<tr class="group">' +
            '<td colspan="7">' +
            group +
            '</td>' +
            '</tr>'
          );
          last = group;
        }
      });
  
    }
  
    onAplyStyles(settings: any, json: any) {
      var oWrapperContainer = document.querySelectorAll(".admin-form > [id^='datatable']");
      debugger;
      oWrapperContainer.forEach(element => {
        var oDTLenght = jQuery(element).find(".dataTables_length"),
          oDTFilter = jQuery(element).find(".dataTables_filter"),
          oDTButtonsContainer = jQuery(element).find(".dt-buttons"),
          oDTPanelmenu = document.createElement("div");
  
        if ( < any > jQuery(oDTPanelmenu).hasClass("dt-panelmenu clearfix bg-white") == false) {
          jQuery(oDTPanelmenu).addClass("dt-panelmenu clearfix bg-white").append(oDTLenght, oDTFilter);
          jQuery(element).prepend(oDTButtonsContainer, oDTPanelmenu).addClass("dataTables_wrapper form-inline dt-bootstrap no-footer");
          jQuery(jQuery(oDTButtonsContainer).find(".dt-button")).addClass("btn btn-default btn-sm");
          jQuery(oDTButtonsContainer).addClass("pull-right ml40 mv5 ");
          jQuery(jQuery(oDTFilter).find("input")).addClass("form-control input-sm");
          jQuery(oDTLenght).find("select").addClass("form-control input-sm");
        }
      });
      var oDTPanelmenus = document.querySelectorAll(".dt-panelmenu.clearfix.bg-white");
      oDTPanelmenus.forEach(element => {
        if (jQuery(element).html() == "") {
          jQuery(element).remove();
        }
      });
      jQuery('#loading').css({
        display: 'none'
      });
    }
  
    onShowChildRows(oRow: any, oData: any, oDatatable: any) {
      let row = oDatatable.DataTable().row(oRow);
      if (row.length == 0)
        return;
      if (row.child.isShown()) {
        row.child.hide();
        jQuery(oRow).removeClass('shown');
      } else {
        let item = oData.find(item => {
          return item.meterId == jQuery(oRow).attr("data-id");
        })
        row.child(this.onDefineChildRowsContent(item)).show();
        jQuery(oRow).addClass('shown');
      }
    }
  
    public onDefineChildRowsContent = (data: any) => {
      return '<table cellpadding="' + (data.length - 1) + '" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>Firmware:</td>' +
        '<td>' + data.fwVersion + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Modulo:</td>' +
        '<td>' + data.model + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Fabricante:</td>' +
        '<td>' + data.manufacturer + '</td>' +
        '</tr>' +
        '</table>';
    }
  
    rerender(dtElement: DataTableDirective, dtTrigger: Subject < any > , index: number = 0): void {
      if (typeof dtElement.dtInstance !== "undefined") {
        debugger;
        dtElement.dtInstance.then((dtInstance: any) => {
          console.log(`The DataTable ${index} instance ID is: ${dtInstance.table().node().id}`);
          dtInstance.clear().destroy();
          if (typeof dtTrigger !== "undefined")
            dtTrigger.next();
        });
      } else {
        if (typeof dtTrigger !== "undefined")
          dtTrigger.next();
      }
    }
  
  }
  