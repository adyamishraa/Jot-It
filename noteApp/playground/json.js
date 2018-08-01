// // var obj={
// //     name:"Adya"
// // };
// // var stringObj=JSON.stringify(obj);
// // console.log(typeof stringObj);
// // console.log(stringObj);

// var personString='{"name":"Adya","age":"21"}';

// var person=JSON.parse(personString);
// console.log(typeof personString);

// console.log(person);

const fs=require('fs');

var originalNote={
    title:'Some title',
    body:'some body'
};
var originalNoteString=JSON.stringify(originalNote);
console.log(originalNoteString);

fs.writeFileSync('notes.json',originalNoteString);

var noteString=fs.readFileSync('notes.json');
var note=JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);


