const regex = /^abc(?:\.\w+)?@bridgelabz\.co$/;

console.log(regex.test("abc@bridgelabz.co"));
console.log(regex.test("abc.xyz@bridgelabz.co"));