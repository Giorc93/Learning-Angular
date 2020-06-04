import { Pipe, PipeTransform } from '@angular/core'; //Importing classes needed to create pipe

@Pipe({
  //Using Pipe decorator
  name: 'test',
})
export class TestPipe implements PipeTransform {
  //Implementing PipeTransform
  // value1 | test: value2
  transform(value: any, value2: any) {
    //must declare transform()
    let op = `
        Sum: ${value + value2} -
        Subs: ${value - value2} -
        Mult: ${value * value2} -
    `;

    return op;
  }
}
