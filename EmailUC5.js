const regex = /^abc(?:[._+-]\w+)?@bridgelabz\.co(?:\.[a-zA-Z]{2})?$/;

console.log(regex.test("abc@bridgelabz.co"));
console.log(regex.test("abc.xyz@bridgelabz.co"));
console.log(regex.test("abc_xyz@bridgelabz.co"));
console.log(regex.test("abc+xyz@bridgelabz.co"));
console.log(regex.test("abc-xyz@bridgelabz.co"));
console.log(regex.test("abc.xyz@bridgelabz.co.in"));
console.log(regex.test("abc@bridgelabz.co.us"));
console.log(regex.test("abc@bridgelabz.co.uk"));