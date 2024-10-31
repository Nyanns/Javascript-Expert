const jsonString = '{"nama":"John Doe","umur":30}';
const data = JSON.parse(jsonString);

console.log(data.nama); // Output: John Doe
console.log(data.umur); // Output: 30
