const regex = /^400\s?088$/;

console.log(regex.test("400088"));
console.log(regex.test("400 088"));
console.log(regex.test("A400088"));
console.log(regex.test("400088B"));