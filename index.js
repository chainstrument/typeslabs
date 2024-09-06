"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./types/to-no-case.d.ts");
var to_no_case_1 = require("to-no-case");
var NamedValue_1 = require("./classes/NamedValue");
var str = (0, to_no_case_1.default)('my string ');
var value = new NamedValue_1.default('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10
