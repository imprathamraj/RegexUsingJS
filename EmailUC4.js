const regex = /^abc(?:[._+-]\w+)?@bridgelabz\.co(?:\.\w+)?$/;

console.log(regex.test("abc@bridgelabz.co"));
console.log(regex.test("abc.xyz@bridgelabz.co"));
console.log(regex.test("abc_xyz@bridgelabz.co"));
console.log(regex.test("abc+xyz@bridgelabz.co"));
console.log(regex.test("abc-xyz@bridgelabz.co"));
console.log(regex.test("abc.xyz@bridgelabz.co.in"));