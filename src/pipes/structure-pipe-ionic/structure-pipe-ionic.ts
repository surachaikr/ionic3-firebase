import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uplow',
})
export class StructurePipeIonicPipe implements PipeTransform {

  transform(value: string, args: any) {
    if (args.upper) {
      return value.toUpperCase();
    }
    if (args.lower) {
      return value.toLowerCase();
    }
  }
}
