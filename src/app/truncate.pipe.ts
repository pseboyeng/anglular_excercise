import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, length: number, suffix = "..."): string {
    if (value.length <= length) {
      return value;
    }

    const words = value.split(" ");
    const truncatedWords = words.slice(0, length);

    return truncatedWords.join(" ") + suffix;
  }
}


