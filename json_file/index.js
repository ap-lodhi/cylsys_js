let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

let  obj = JSON.parse(text)
console.log(obj.employees[2].firstName)




const obj1 = { name: "John", age: 30 };
const jsonString = JSON.stringify(obj1);

console.log(jsonString)