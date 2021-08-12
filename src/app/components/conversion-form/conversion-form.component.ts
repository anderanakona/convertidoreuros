import {Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {MonedaConversionService} from '../../services/moneda-conversion.service';
import {Convertidor} from '../../models/Convertidor';
import {NgForm, FormGroup, Validators, FormControl} from '@angular/forms';
@Component({
    selector: 'app-conversion-form',
    templateUrl: './conversion-form.component.html',
    styleUrls: ['./conversion-form.component.css']
})
export class ConversionFormComponent implements OnInit {
    listMonedas: any = [];
    listKeysMoneda: any = [];
    resultado=0;
    cantidad=0;
    myGroup:any;
    arrayMoney:any=[];
    fechaHoy='';
    convertidor: Convertidor = {
        fecha: '',
        cantidad: 0,
        symbol:'seleccione',
    };
    constructor(private monedaConversionService: MonedaConversionService) {}
    ngOnInit(): void {
        this.getMonedas();
        this.convertidor.fecha=this.obtenerFechaHoy();
        this.fechaHoy=this.obtenerFechaHoy();
        this.resultado=this.cantidad;
        this.getConvertir();       
        this.myGroup = new FormGroup({
           fecha: new FormControl(),
           cantidad:new FormControl(),
           symbol: new FormControl()
        });
    }
   
    getMonedas(): void {
        this.monedaConversionService.getLatest().subscribe(res => {
            this.listMonedas = res;
            this.obtenerKeys(this.listMonedas.rates);
        }, error => console.log(error));
    }
    obtenerKeys(ListKeys: any) {
        for (var key in ListKeys) {
            this.listKeysMoneda.push({
                key: key.toString(),
                value: key.toString()
            });
        }
    }
    obtenerFechaHoy(){
      var fecha = new Date(); //Fecha actual
      var mes = fecha.getMonth()+1; //obteniendo mes
      var dia = fecha.getDate(); //obteniendo dia
      var ano = fecha.getFullYear(); //obteniendo año+

      var dias=""+dia;
      var meses=""+mes;
      if(dia<10)
      dias="0"+dia; //agrega cero si el menor de 10
     if(mes<10)
     meses="0"+mes+"";
      return ano+"-"+meses+"-"+dias;   
    }

    getConvertir(): void {        
        this.monedaConversionService.getConvertir(this.convertidor).subscribe(response => {
            this.arrayMoney=response;
            if(this.arrayMoney.success){
                console.log(this.arrayMoney)   
             } 
             this.resultado=this.multiplicar(this.arrayMoney.rates)           
        }, error => console.log(error));
    }

    multiplicar(array: any){
        var numero=0;
         for (var key in array) {            
            numero=array[key];
        } 
        return numero*this.convertidor.cantidad;

     }

    get f() {return this.myGroup.controls; }


}