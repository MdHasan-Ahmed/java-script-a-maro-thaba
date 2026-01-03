const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

console.log(numbers);

// old way to print number
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);

// best way to print number all in just 2 line code

for (const num of numbers){
  console.log(num);
}


// practice for loop
// 1.তুই 5টা পছন্দের সাবজেক্টের নাম লেখ। তারপর প্রোগ্রাম লিখে দেখ, কীভাবে লুপ ব্যবহার করে সব সাবজেক্টের নাম আলাদাভাবে প্রিন্ট হবে।

let subjects = ['Bangla', 'Math', 'English', 'Social science', 'General science'];

for(let sub of subjects){
  console.log(sub);
};



// 2. তোর একদম পছন্দের খাবার গুলোর নাম লেখ। এখন লুপ ব্যবহার করে প্রোগ্রাম লিখে দেখ, কীভাবে সব খাবারের নাম আলাদা আলাদা করে প্রিন্ট হবে।

let food = ['Vat', 'Dal', 'Burger', 'Pizza', 'Faluda', 'French fry', 'Bread', 'Jhalmuri', 'Chotpoti', 'Fuska', 'Momo','Cake'];

for (let item of food ){
  console.log(item);
}

// 3.একটা অ্যারের মধ্যে তোর ফ্যামিলি মেম্বারদের জন্মসাল লিখে ফেল। তারপর লুপ চালিয়ে সবার জন্মসাল আউটপুট হিসেবে দেখা।

let birthOfDate = [1968, 1975, 1990, 1994,1995,1999,2005,2024];
for (let birth of birthOfDate){
  console.log(birth);
}

// 4.ক্রিকেট বা ফুটবল খেলায় তোর প্রিয় একাদশের একটা টিম বানিয়ে তোর প্রিয় খেলোয়াড়দের নাম একটা অ্যারের মধ্যে রাখ। তারপর কনসোল লগ করে সব খেলোয়াড়দের নাম আউটপুট হিসেবে দেখবি। 

let player = ['Pitarson', 'Masrafee', 'Mustafiz', 'Rubel', 'Asraful', 'Tamim', 'Nafis', 'Nasir', 'Bret lee', 'Lasith Maleenga', 'Starc'];

for (let newPlayer of player ){
  console.log(newPlayer);
};

// 5.নেক্সট কবে কবে তোর পরীক্ষা আছে, সেই তারিখগুলা অ্যারের মধ্যে লিখে ফেল। তারপর লুপ ব্যবহার করে পরীক্ষার তারিখগুলা কনসোল লগ কর।

let exam = ['02.01.2', '05.01.26', '08.01.26', '09.01.26', '10.01.26', '15.01.26', '20.01.26'];

for (let examDate of exam){
  console.log(parseInt(examDate));
};

  //  parseInt string ke number a convert kore dey and n umber er por string thakle oita skipp kore

for (let examDate of exam){
  console.log(examDate);
};





