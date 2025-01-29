import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'balance'
})
export class BalancePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "Rs."+value+"/-";
    // we can use symbols by directly copy and paste symbols ex:"₹"+value
  }

}
