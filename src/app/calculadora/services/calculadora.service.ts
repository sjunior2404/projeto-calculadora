/**
 * Serviço responsável por executar as operações da calculadora
 * @author Sérgio Júnior<sergio_jfj@hotmail.com>
 * @since 1.0.0
 * 
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
/*Define as constantes utilizadas para identificar as operações de cálculo*/

static readonly SOMA: String = "+";
static readonly SUBTRACAO: String = "-";
static readonly DIVISAO: String = "/";
static readonly MULTIPLICACAO: String = "*";

/**
 * Método que calccula uma operação matemática dado
 * dois números.
 * Suporta as operações soma, subtração, divisão e multiplicação
 * 
 * @param num1 number
 * @param num2 number
 * @param operacao string Opweração a ser executada
 * @return number resultado da Operação
 */

calcular(num1:number, num2:number, operacao:string):any{
  let resultado:number; //armazena o resultado da operação
  switch(operacao){
    case CalculadoraService.SOMA:
      resultado = num1 + num2;
      break;
    case CalculadoraService.SUBTRACAO:
      resultado = num1 - num2;
      break;
    case CalculadoraService.DIVISAO:
      resultado = num1 / num2;
      break;
    case CalculadoraService.MULTIPLICACAO:
      resultado = num1 * num2;
    break;
    default:
      resultado = 0;
  }
  
  return resultado;
}

  constructor() { }
}
