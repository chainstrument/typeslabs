
import './types/to-no-case.d.ts'
import toNoCase from 'to-no-case'

import NamedValue from './classes/NamedValue' 

const str = toNoCase('my string ')


let value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10

