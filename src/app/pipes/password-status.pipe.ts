import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordReliability',
})
export class PasswordReliabilityPipe implements PipeTransform {
  transform(value: string): string[] {
    const empty = ['gray', 'gray', 'gray'];
    const short = ['red', 'red', 'red'];
    const easy = ['red', 'gray', 'gray'];
    const medium = ['yellow', 'yellow', 'gray'];
    const strong = ['green', 'green', 'green'];
    const oneSymbolTypeReg = new RegExp(/^[a-zA-Z]*$|^[\d]*$|^[\W]*$/);
    const twoSymbolTypesReg = new RegExp(
      /^[a-zA-Z\d]*$|^[\d\W]*$|^[a-zA-Z\W]*$/
    );
    const threeSymbolTypesReg = new RegExp(/^[a-zA-Z\d\W]*$/);

    if (value.length === 0) {
      return empty;
    }

    if (value.length < 8) {
      return short;
    }

    if (value.match(oneSymbolTypeReg)) {
      return easy;
    }

    if (value.match(twoSymbolTypesReg)) {
      return medium;
    }

    if (value.match(threeSymbolTypesReg)) {
      return strong;
    }

    return [];
  }
}
