import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'root'
})
export class RootPipe implements PipeTransform {
  transform(radicand: number): number {
    return radicand > 0 ? Math.sqrt(radicand) : 0
  }
}
