import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string {


    function reverseString(str: string) {
      let result = "";
      for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
      }
      return result;
    }
    
    let Name = "Marvellous";
    let reverse_str = reverseString(Name);

    return reverse_str
    
    
}
}