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

//while patla dail;*

// Declare a loop variable with an initial Value
// while(loop condition){
//   Repetitive tasks
//   Change the value of the loop variable
// }

let num = 0;
while(num<5){console.log('Bamboo eating High School');num++;}

// num++, num+=1, num=num+1 ai sob gulai eki command


// 1. while লুপ দিয়ে 10 বার কনসোল লগ কর। আমি প্রতিদিন মিনিমাম 3 ঘণ্টা করে প্রোগ্রামিং প্র্যাকটিস করব। 

let practice = 0;
while(practice<10){
  console.log('আমি প্রতিদিন মিনিমাম 3 ঘণ্টা করে প্রোগ্রামিং প্র্যাকটিস করব');practice+=1;
}


// 1. while লুপ দিয়ে 13 বার কনসোল লগ কর। আমি প্রতিদিন মিনিমাম 3 ঘণ্টা করে প্রোগ্রামিং প্র্যাকটিস করব। 

let practices = 0;
while (practices<13){
  console.log('আমি প্রতিদিন মিনিমাম 3 ঘণ্টা করে প্রোগ্রামিং প্র্যাকটিস করব');practices+=1;
}

// 2.তুই 1 থেকে 20 পর্যন্ত সংখ্যা লিখবি একটা while লুপ দিয়ে।

let numb = 1;
while (numb<21){
  console.log(numb);numb+=1;
}

// 3.while লুপ দিয়ে 50 থেকে 100 পর্যন্ত সংখ্যা প্রিন্ট কর।

let numb1 = 50;
while (numb1<101){
  console.log(numb1);numb1+=1;
}

// 4.একটি while লুপ দিয়ে 1 থেকে 10 পর্যন্ত সংখ্যাগুলো প্রিন্ট করার সময় সংখ্যাগুলাকে 3 দিয়ে গুণ করে ফেলবি। তাহলে কিন্তু 3-এর নামটা হয়ে যাবে। 

let numb2 = 1;
while(numb2<11){
  console.log(numb2*3);numb2+=1;
};

// 5.একটি while লুপ দিয়ে 111 থেকে 110 পর্যন্ত সংখ্যাগুলো প্রিন্ট করার সময় সংখ্যাগুলাকে 2 দিয়ে ভাগ করে ফেলবি। 

let numb3 = 111;

while(numb3>=110){
  console.log(numb3/2);numb3-=1;
}

// Biyog korte korte nicher dike asle just +=1 er jaygay -=1 ba --1 etc likhte HTMLObjectElement;


// While লুপ দিয়ে যোগফল


let numb4 = 1;
let sum = 0;
while (numb4<=10){
  console.log(numb4);sum=sum+numb4;numb4+=1;
};
console.log('Sum:',sum);

// ============================

let numb5 = 1;
let sums = 0;

while (numb5<=15){
  console.log(numb5);sums = sums+numb5 ;numb5+=1;
}

console.log(sums);

// practice task

// 1. while লুপ দিয়ে 50 থেকে 100 পর্যন্ত সংখ্যা প্রিন্ট কর। 

let numbers1 = 50;
while(numbers1<=100){
  console.log(numbers1);numbers1+=1;
};

// 2.while লুপ দিয়ে 5 থেকে 15 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর।

let numbers2 = 5;
let jogfol = 0;

while(numbers2<=15){
  console.log(numbers2);jogfol = numbers2+jogfol;numbers2++;
}

console.log(jogfol);

// 3.তুই এক স্কুলে 1 থেকে 50 পর্যন্ত ছাত্রদের রোল নম্বর লিস্ট করবি, তারপর একটা while লুপ ব্যবহার করে সেই সংখ্যাগুলোর যোগফল বের কর।

let roll = 1;
let rollJogfol= 0;

while (roll<=50){
  console.log(roll);rollJogfol = rollJogfol+roll; roll++;
}

console.log(rollJogfol);

// 4.while লুপ ব্যবহার করে 21 থেকে 50 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং প্রতিবারের যোগফল দেখাবি।

let numbers3 = 21;
let sum1 = 0;

while (numbers3<=50){
  console.log(numbers3);sum1= sum1+numbers3;console.log(sum1); numbers3++;
}

console.log(sum1);


console.log("Ai bar practice er test hobe===========");

// 4.while লুপ ব্যবহার করে 1 থেকে 20 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং প্রতিবারের যোগফল দেখাবি।

let numbers4 = 1;
let maths = 0;

while(numbers4<=20){
  console.log(numbers4);maths = maths+ numbers4; console.log(maths); numbers4++;
}

console.log(maths);

// 5.20 থেকে 40 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং শুধু ফাইনাল যোগফলটা আউটপুট হিসেবে দেখবি।

let numbers5 = 20;
let jogfol1 = 0;
while(numbers5<=40){
  console.log(numbers5);jogfol1= jogfol1+ numbers5;numbers5++;
}

console.log(jogfol1);

console.log("objectobjectobject");


// For লুপের খিচুড়ি

// আবার ঠিক আগের মতোই । 1 থেকে 10 পর্যন্ত প্রিন্ট করতে চাইলে নিচের মতো করে লিখবি। 

for(let a = 1; a<=10; a++){
  console.log(a);
};

// 50 থেকে 100 পর্যন্ত

for(let b = 50; b<=100; b++){
  console.log(b);
};

// while loop diye halka chesta

let c = 1;
while(c<=10){
  console.log(c);c++;
};

// এইবার for loop দিয়ে 11 থেকে 20 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর।

// jodi eta while loop diye kori ta hole hobe

let number1 = 11;
let sum2 = 0;
while(number1<=20){
  console.log(number1);sum2 = sum2+number1;number1++
}
console.log(sum2);
 //ebar for diye practic kora jak

for (let number2 = 11; number2<=20; number2++){
  console.log(number2);
}

// jogfol by for loop
console.log('newwwwwwwww');

let jogfol2 = 0;
for(let number3 = 11; number3<=20;  number3++){
  jogfol2 = jogfol2 + number3;
}

console.log(jogfol2);

// jodi protitar man dekhtechai

let suming = 0;

for(let songkha = 11; songkha<=20; songkha++){
  suming=suming+songkha;console.log(suming);
};

// Practice time
// For লুপ দিয়ে 150 থেকে 170 পর্যন্ত সংখ্যা প্রিন্ট কর। 
console.log('Practice time');
for(let newPrint = 150; newPrint<=170; newPrint++){
  console.log(newPrint);
};


// তুই এক স্কুলে 31 থেকে 58 পর্যন্ত ছাত্রদের রোল নম্বর লিস্ট করবি, তারপর একটা for লুপ ব্যবহার করে সেই সংখ্যাগুলোর যোগফল বের কর।

let rollsum = 0;

for(let roll = 31; roll<=58; roll++){
  rollsum = rollsum+roll;
}
console.log(rollsum);

// For লুপ দিয়ে 25 থেকে 75 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং যোগফল শেষে প্রিন্ট কর।

console.log('task 3');

let sum3 = 0;

for(let firstnum = 25; firstnum<=75; firstnum++){
  sum3 = sum3+firstnum;
}
console.log(sum3);

// For লুপ দিয়ে 25 থেকে 75 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং যোগফল শেষে প্রিন্ট কর।
console.log('ebar jogfol alada alada print hobe');

let sum4 = 0;

for(let firstnum1 = 25; firstnum1<=75; firstnum1++){
  sum4 = sum4+firstnum1;console.log(sum4);
};


// জোড়-বিজোড় লুপের শর্ত

console.log('জোড়-বিজোড় লুপের শর্ত');
// for(let i = 0; i<=20; i++){
//   if(i % 2 == 0){
//     console.log(i);
//   }
// }
// তোর কাজ হবে 20 থেকে 50 পর্যন্ত যে সকল সংখ্যা 7 দিয়ে বিভাজ্য, তা আউটপুট হিসেবে দেখা। 
for(i = 20; i<= 50; i++){
  if(i % 7 === 0){
    console.log(i);
  }
};

// এইবার 40 থেকে 80 পর্যন্ত যে সকল সংখ্যা 5 দিয়ে এবং 7 দিয়ে বিভাজ্য, তা আউটপুট হিসেবে দেখা। 
console.log('এইবার 40 থেকে 80 পর্যন্ত যে সকল সংখ্যা 5 দিয়ে এবং 7 দিয়ে বিভাজ্য, তা আউটপুট হিসেবে দেখা। ');

for(let j = 40 ; j <= 80; j++){
  if(j % 5===0 && j % 7===0){
    console.log(j);
  }
};

// এখন তোর প্রবলেম হলো 1 থেকে 40 পর্যন্ত যে সকল সংখ্যা 13 দিয়ে বিভাজ্য, তাদের যোগফল কর। 
console.log('// এখন তোর প্রবলেম হলো 1 থেকে 40 পর্যন্ত যে সকল সংখ্যা 13 দিয়ে বিভাজ্য, তাদের যোগফল কর। ');
// let sumk = 0;
// for (let k = 1; k<=40; k++){
//   if(k % 13 === 0) {
//     console.log(k);sumk = sumk+k;
//   }}
//   console.log(sumk);

let sumk = 0;
for(let k = 1; k<=40; k++){
  if(k % 13 === 0)
    sumk = sumk + k
}console.log(sumk);


// For লুপ দিয়ে 1 থেকে 50 পর্যন্ত লুপ চালাবি। তবে লুপ চালানোর সময় লুপ ভেরিয়েবলের মান প্রত্যেকবার 4 করে বাড়াবি। 
console.log('For লুপ দিয়ে 1 থেকে 50 পর্যন্ত লুপ চালাবি। তবে লুপ চালানোর সময় লুপ ভেরিয়েবলের মান প্রত্যেকবার 4 করে বাড়াবি। ');

for(let l = 1; l<=50; l += 4){
  console.log(l);
}
// 0 থেকে 100 পর্যন্ত সব সংখ্যাগুলো প্রিন্ট কর, যা 9 অথবা 6 দিয়ে বিভাজ্য।

console.log('0 থেকে 100 পর্যন্ত সব সংখ্যাগুলো প্রিন্ট কর, যা 9 অথবা 6 দিয়ে বিভাজ্য।');


for(let m = 0; m <= 100; m++){
  if(m % 9 ===0 || m % 6 === 0 ){
    console.log(m);
  }
};

// 1 থেকে 50 পর্যন্ত এমন সংখ্যাগুলো প্রিন্ট কর, যা 3 এবং 4 উভয়ের দ্বারা বিভাজ্য এবং সংখ্যাগুলোর যোগফল বের কর।

console.log('1 থেকে 50 পর্যন্ত এমন সংখ্যাগুলো প্রিন্ট কর, যা 3 এবং 4 উভয়ের দ্বারা বিভাজ্য এবং সংখ্যাগুলোর যোগফল বের কর।');
let nsum = 0;
for(let n = 1; n <= 50; n++){
  if(n % 3 === 0 && n % 4 ===0){
    nsum = nsum + n; console.log(n);
  }
  console.log(nsum);
}


// লুপের break-আপ
console.log('লুপের break-আপ');

// ধর, তুই 1 থেকে 30 পর্যন্ত সংখ্যা প্রিন্ট করতে চাস, কিন্তু তোর ইচ্ছা হলো, 15-এর পরে প্রিন্ট করা বন্ধ হবে, থেমে যাবে।
console.log('ধর, তুই 1 থেকে 30 পর্যন্ত সংখ্যা প্রিন্ট করতে চাস, কিন্তু তোর ইচ্ছা হলো, 15-এর পরে প্রিন্ট করা বন্ধ হবে, থেমে যাবে।');

for (printing = 1; printing <= 30; printing++){
  console.log(printing);
  if(printing >= 15){
    break;
  }
}

console.log('ধর, তুই 1 থেকে 20 পর্যন্ত সংখ্যা প্রিন্ট করতে চাস, কিন্তু তোর ইচ্ছা হলো, 10-এর পরে প্রিন্ট করা বন্ধ হবে, থেমে যাবে।');

for (printt = 1; printt <= 20; printt++){
  console.log(printt);
  if(printt >= 10){
    break;
  }
}

// তুই 1 থেকে 40 পর্যন্ত সংখ্যা প্রিন্ট করতে চাস, কিন্তু এমনভাবে, যেন 7 দিয়ে বিভাজ্য সংখ্যাগুলো বাদ যায়। যেমন- 7, 14, 21, ইত্যাদি বাদ যাবে। একটা প্রোগ্রাম লিখ, যেখানে এই সংখ্যাগুলো স্কিপ হবে।

console.log('তুই 1 থেকে 40 পর্যন্ত সংখ্যা প্রিন্ট করতে চাস, কিন্তু এমনভাবে, যেন 7 দিয়ে বিভাজ্য সংখ্যাগুলো বাদ যায়। যেমন- 7, 14, 21, ইত্যাদি বাদ যাবে। একটা প্রোগ্রাম লিখ, যেখানে এই সংখ্যাগুলো স্কিপ হবে।');

for(let ufo = 1; ufo <= 40 ; ufo++){
  if(ufo % 7 ===0){
    continue;
  }
  console.log(ufo);
}

// তুই 1 থেকে 15 পর্যন্ত সংখ্যা প্রিন্ট করতে চাস, কিন্তু 9 বাদে। একটা প্রোগ্রাম লিখ, যেখানে 9 স্কিপ হয়ে যাবে আর বাকিসব সংখ্যা প্রিন্ট হবে।

console.log('তুই 1 থেকে 15 পর্যন্ত সংখ্যা প্রিন্ট করতে চাস, কিন্তু 9 বাদে। একটা প্রোগ্রাম লিখ, যেখানে 9 স্কিপ হয়ে যাবে আর বাকিসব সংখ্যা প্রিন্ট হবে।');


for (let newPrint = 1; newPrint <= 15; newPrint++){
  if(newPrint % 9 === 0){
    continue;
  }
  console.log(newPrint);
}

// another more effective way which only skip 9

console.log('another more effective way which only skip 9');

for (let nprint = 1; nprint <= 15; nprint++){
  if(nprint === 9){
    continue;
  }
  console.log(nprint);
};


// 1 থেকে 20 পর্যন্ত সংখ্যা প্রিন্ট কর, কিন্তু 12 বাদে। 12 স্কিপ হয়ে যাবে এবং বাকিসব সংখ্যা প্রিন্ট হবে।
console.log('1 থেকে 20 পর্যন্ত সংখ্যা প্রিন্ট কর, কিন্তু 12 বাদে। 12 স্কিপ হয়ে যাবে এবং বাকিসব সংখ্যা প্রিন্ট হবে।');

for (let print4 = 1 ; print4 <=20; print4++){
  if(print4 === 12){
    continue;
  }
  console.log(print4);
};

// 1 থেকে 25 পর্যন্ত সংখ্যা প্রিন্ট কর, কিন্তু 3 দিয়ে বিভাজ্য সংখ্যা বাদ যাবে।

console.log('1 থেকে 25 পর্যন্ত সংখ্যা প্রিন্ট কর, কিন্তু 3 দিয়ে বিভাজ্য সংখ্যা বাদ যাবে।');

for (let print5 = 1; print5 <= 25; print5++){
  if(print5 % 3 ===0 ){
    continue;
  }
  console.log(print5);
};

// 91 থেকে 120 পর্যন্ত সংখ্যা প্রিন্ট কর, কিন্তু 10 দিয়ে ভাগ যায়, এমন সংখ্যা পেলে প্রিন্ট করা বন্ধ হয়ে যাবে, থেমে যাবে।

console.log('91 থেকে 120 পর্যন্ত সংখ্যা প্রিন্ট কর, কিন্তু 10 দিয়ে ভাগ যায়, এমন সংখ্যা পেলে প্রিন্ট করা বন্ধ হয়ে যাবে, থেমে যাবে।');


for (let print6 = 91; print6 <= 120; print6++){
  {
    if(print6 % 10 === 0){
      break;
    }
    console.log(print6);
  }
};
