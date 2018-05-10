import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'multiply'
})

export class MultiplyPipe implements PipeTransform {
    
    transform(valor:any, por:any) {
        var valor_uno = parseInt(valor);
        var valor_dos = parseInt(por);
        var result =  valor_uno + " x " + valor_dos + " = " + (valor_uno * valor_dos); 
        return result; 
    }
}