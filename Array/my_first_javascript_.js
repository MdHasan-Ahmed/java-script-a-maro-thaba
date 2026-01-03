const numberss = [71,72,73,74,75,76,77,78,79]
console.log(numberss);

let fruits = ['apple', 'banana', 'orange', 'mango', 'guava', 'nut'];
console.log(fruits);

let vegetables = ['potato', 'onion', 'begun', 'radish', 'carrot', 'tomato','ladies finger','gourd', 'cucumber', 'pointed gourd' ];

console.log(vegetables);
console.log(vegetables.length);

let favouriteMovie = ['Titanic', 'Avatar', 'Outlander', 'Shawshank Redemption', 'Escap plan']
console.log(favouriteMovie);
console.log(favouriteMovie.length);
let oddnumbers = [11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]
console.log(oddnumbers);

// Odd numbers gula easily add korar sohoj code. jokhon onek besi odd numbers ber kora lagbe tokhon ei logic apply kora jete pare

// bijor sonkha ber korar niyom

let oddnumbers2 = [];
for (let i =1; i<=300; i+=2){oddnumbers2.push(i)};
console.log(oddnumbers2);
console.log(oddnumbers2.length);

// jor sonkha ber korar niyom

let evennumbers = [];
for(let i = 2; i<=300; i+=2){evennumbers.push(i)};
console.log(evennumbers);

let colors = ['pink', 'black', 'white', 'Navy blue', 'choclate', 'blue', 'green','brown', 'yellow']
console.log(colors.length);

let country = ['dhaka', 'dilli', 'Islamabad', 'colombo', 'Newyork','kathmondu']
console.log(country.length);

console.log(country[2]);
// jodi array er man  poriborton korte chai
country[2] = 'Agargaou';
console.log(country[2]);

let friends = ['Tipu', 'Mamun', 'Moin', 'Monowar', 'Rubel', 'Diponkor'];
console.log(friends[3]);

let favouriteBooks = ['Uncle toms cabin', 'Bonhur', 'Masud rana', 'Himu remind a ', 'Holud Himu kalo Rab', 'Foujindio dip', 'Nil pathor'];

console.log(favouriteBooks[5]);

let numbering = [1,2,3,4,5,6,7,8,9,10];
console.log(numbering[7]);
numbering[7]=30;
console.log(numbering[7]);

let games=['Free fire', 'Pubg', 'Candy crush', 'Temple run'];

console.log(games[2]);
games[2]='Subway surfer';
console.log(games[2]);

let familyMember= ['Sanaullah Ahmed', 'Asma begum', 'Shimu', 'Tanvin', 'Tayba', 'Suchona', 'Hurichian', 'Hasan'];

console.log(familyMember[3]);

let visitingCountry = ['America, Saudi Arabia', 'Switzerland', 'New Zealand', 'Netherland', 'Australia', 'India', 'Pakistan'];

console.log(visitingCountry[4]);

let tablesHas = ['Sound box', 'Monitor', 'Keyboard', 'Mouse', 'Mouse pad'];
 console.log(tablesHas[7]);

//  Push pop
// Push for add word or number in the last of Array
// Pop for remove word or number in the last of array

// Shift for remove word or number in the first of array
// unshift for add word or number in the first of array

let numb = [10,20,30,40,50];
console.log(numb);
numb.push(60);
console.log(numb);

numb.push(70);
console.log(numb);

let names = ['Sojib', 'Sagor', 'Sakib', 'Sohel'];
names.push('Sumon');
console.log(names);

let gaming = ['Pubg', 'Cricket', 'Clash of clan','Carrom', 'Ludo'];

gaming.pop();
console.log(gaming);

let newnumb = [24, 36, 48, 60];
newnumb.unshift(12);
console.log(newnumb);

let books = ['book1', 'book2', 'book3', 'book4', 'book5'];

books.shift();
console.log(books);

// ke include ache ke nai practice

let friendSet1 = ['Abul','Babul','Kabul','Nabul','Bulbul', 'Mukbul','Chulbul'];

let exist = friendSet1.includes('Mukbul');
console.log(exist);

exist = friendSet1.includes('Abul');
console.log(exist);

// 2nd practice if else

let friendSet2 = ['Abul','Babul','Kabul','Nabul','Bulbul', 'Mukbul','Chulbul'];

if (friendSet2.includes('Abul')) {console.log('Lets party');}else{
  console.log('No party');
};

// Short way

let friendSet3 = ['Abul','Babul','Kabul','Nabul','Bulbul', 'Mukbul','Chulbul'];

let ExistMassage = friendSet3.includes('Abul')?"Party":"No party";

console.log(ExistMassage);

// indexof diye jana jay array er position koto number a ahce.

let friendSet4 = ['Abul','Babul','Kabul','Nabul','Bulbul', 'Mukbul','Chulbul'];

console.log(friendSet4.indexOf('Mukbul'));

// Arek vabe kora jay

let friendSet5 = ['Abul','Babul','Kabul','Nabul','Bulbul', 'Mukbul','Chulbul'];

let index = friendSet5.indexOf('Bulbul');
console.log(index);

// Practice time

let fruits1 = ['apple', 'banana', 'orange', 'mango', 'guava', 'nut'];

let checksAm = fruits1.includes('Am');

// 2nd way

let fruits2 = ['apple', 'banana', 'orange', 'mango', 'guava', 'nut'];

if (fruits2.includes('Am')){
  console.log('Am ahce');
}else{
  console.log('Am nai Gache oth');
};

// 3 number practice

let name1 = ['Babul', 'Alif', 'Choton'];

let index1 = name1.indexOf('Babul');
console.log(index1);

let friends1 = ['Rimon', 'Rifat', 'Rajib'];
console.log(friends1.indexOf('Rifat'));

let city = ['Dhaka', 'Chittagong', 'Sylhet'];
city.unshift('rajshahi');
console.log(city);

let checkcity = city.includes('Rajshahi');
console.log(checkcity);
// long way check
let name2 =['দীঘি', 'মেঘ', 'বৃষ্টি', 'বর্ষা'];
if (name2.includes('বৃষ্টি')) {
  console.log('I need umberalla');
}else{
  console.log('No rain no pain');
};

//short way check 1

let name3 =['দীঘি', 'মেঘ', 'বৃষ্টি', 'বর্ষা'];

let checkname = name3.includes('বৃষ্টি')?'I need umberalla2':'No rain no pain';
console.log(checkname);

//short way check 2
let name4 =['দীঘি', 'মেঘ', 'বৃষ্টি', 'বর্ষা'];
console.log(name4.includes('বৃষ্টি')?'I need umberalla3':'No rain no pain');


// 7 no practice

// তোর প্রিয় খেলাধুলার একটা অ্যারে আছে— ‘ফুটবল’, ‘ক্রিকেট’, ‘ভলিবল’। এখন তুই চেক করতে চাস ‘ব্যাডমিন্টন’ নামক খেলাটি অ্যারেতে আছে কি না।

let favouriteGames = ['ফুটবল','ক্রিকেট','ভলিবল'];

console.log(favouriteGames.includes('ব্যাডমিন্টন'));

