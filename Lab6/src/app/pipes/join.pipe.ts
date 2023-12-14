import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'join',
  pure: false
})
export class JoinPipe implements PipeTransform {
  transform(array: any, start?: any, end?: any): any {
    const result = start !== undefined && end !== undefined
      ? array.slice(start, end)
      : array.slice(start, array.length)
    return result.join(', ')
  }
}
