let rect = {
    length : 5,
    breadth : 8,
    // draw : function draw(){
    //     console.log("draw");
    // }
}

console.log(rect.length);
// console.log(rect.draw());

for(let key in rect){
    console.log(key, rect[key]);
}

// cloning Object 

// using iteration

let src = {
    a : 10,
    b : 20,
    c : 30
}

let dest = {};

for (let key in src){
    dest[key] = src[key]; 
}

console.log(src);
console.log(dest);

src.a++ ;
console.log(src);
console.log(dest);

dest.a-- ;
console.log(src);
console.log(dest);


// using assign


let src1 = {
    a : 22,
    b : 77,
    c : 56,
    d : 45
};

let dest1 = Object.assign({} , src1);
console.log(src1);
console.log(dest1);

// using spread 

let src2 = {
    a : 231,
    b : 343,
    c : 989,
    d : 784
};

let dest2 = {...src2};
console.log(src2);
console.log(dest2);