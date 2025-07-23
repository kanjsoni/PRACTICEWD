let date = new Date();
console.log(date);

let date2 = new Date('june 20 2004 07:15');
console.log(date2);

let date3 = new Date(2004, 7, 15, 7);
console.log(date3);

date3.setFullYear(2007);
console.log(date3);

// template literals

let fullName = "Anjali Kumari";
let msg = `
    Hello ${fullName},
    Keep learning and growing 
`;

console.log(msg);

console.log(fullName[0]);
console.log(fullName.toUpperCase());
console.log(fullName.endsWith('a'));
console.log(fullName.toLowerCase());
console.log(fullName.startsWith('a'));
console.log(fullName.trim());

let sentence = "This is my Sentence";
let words = sentence.split(" ");
console.log(words);
let newName = fullName.replace('Kumari', 'Shah');
console.log(newName);
let courses = [
    {
        no: 1, name : 'Love'
    },
    {
        no: 2, name : 'Babbar'
    }
];

console.log(courses);
console.log(courses.indexOf({no: 1, name: 'Love'}));

let course1 = courses.find(function(course){
    return course.name == 'Babbar';
});
console.log(course1);

