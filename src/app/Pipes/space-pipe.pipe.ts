import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spacePipe'
})
export class SpacePipePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    return value.match(/.{1,4}/g)?.join(' ') || value;
  }
  }


