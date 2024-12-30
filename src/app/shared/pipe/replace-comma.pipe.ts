import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name: 'replaceComma'
})
export class ReplaceComma implements PipeTransform {

transform(value: string): string {
    if (!!value/*ni indefund ni nulle*/) {
        return value.replace(/,/g,'.');
    }else{
        return '';
    }
}

}
