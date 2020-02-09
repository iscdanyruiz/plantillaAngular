import {
    Injectable
} from '@angular/core';

@Injectable()
export class PrepareDataTableControls {

    spanish = {
        "info": "Mostrando la página _PAGE_ de _PAGES_",
        "infoEmpty": "No hay registros disponibles",
        "infoFiltered": "(filtrado de _MAX_ registros totales)",
        "lengthMenu": "Mostrar _MENU_ registros",
        "zeroRecords": "No se ha encontrado nada, lo siento",
        "buttons": {
            "copyTitle": 'Datos copiados',
            "copyKeys": 'Appuyez sur <i>ctrl</i> ou <i>\u2318</i> + <i>C</i> pour copier les données du tableau à votre presse-papiers. <br><br>Pour annuler, cliquez sur ce message ou appuyez sur Echap.',
            "copySuccess": {
                _: '%d Lineas copiadas',
                1: '1 Linea copiada'
            }
        },
        'paginate': {
            'first': 'primero',
            'previous': 'Anterior',
            'next': 'Siguiente',
            'last': 'último',
        },
        'search': 'Palabra clave:',
    }

    dtOptions: any[] = [];

    onStartOptions() {
        this.dtOptions = new Array();
        this.dtOptions.push({
            destroy: true,
            pagingType: 'simple',
            search: true,
            paging: true,
            pageLength: 25,
            language: this.spanish,
            dom: 'Blfrtip',
            buttons: [{
                text: 'Copiar',
                extend: 'copy',
                customize: function (data) {
                    return data;
                }
            }, 'csv', 'excel', {
                extend: 'pdf',
                text: 'PDF',
                exportOptions: {
                    modifier: {
                        order: 'current', // 'current', 'applied', 'index',  'original'
                        page: 'all', // 'all',     'current'
                        search: 'applied' // 'none',    'applied', 'removed'
                    }
                }
            }, {
                text: 'Imprimir',
                extend: 'print'
            }],
            initComplete: this.onPrepareDataTableControls
        })
    }

    onPrepareDataTableControls(settings: any, json: any) {
        var oWrapperContainer = document.querySelectorAll(".dataTables_wrapper");
        oWrapperContainer.forEach(element => {
            var oDTLenght = jQuery(element).find("#datatable_length"),
                oDTFilter = jQuery(element).find(".dataTables_filter"),
                oDTButtonsContainer = jQuery(element).find(".dt-buttons"),
                oDTPanelmenu = document.createElement("div");
            if (<any>jQuery(oDTPanelmenu).hasClass("dt-panelmenu clearfix bg-white") == false) {
                jQuery(oDTPanelmenu).addClass("dt-panelmenu clearfix bg-white").append(oDTLenght, oDTFilter);
                jQuery(element).prepend(oDTButtonsContainer, oDTPanelmenu).addClass("dataTables_wrapper form-inline dt-bootstrap no-footer");
                jQuery(jQuery(oDTButtonsContainer).find(".dt-button")).addClass("btn btn-default btn-sm");
                jQuery(oDTButtonsContainer).addClass("pull-right ml40 mv5 ");
                jQuery(jQuery(oDTFilter).find("input")).addClass("form-control input-sm");
                jQuery(oDTLenght).find("select").addClass("form-control input-sm pull-left");
            }
        });
    }

    /**
     * CONTROLES PARA SUB FILAS
     * */
    showChildRow(oRow: any, oData: any, oDatatable: any) {
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
            row.child(this.formatRows(item)).show();
            jQuery(oRow).addClass('shown');
        }
    }

    /**
     * FIN CONTROLES PARA SUB FILAS
     */

    public formatRows = (data: any) => {
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

}