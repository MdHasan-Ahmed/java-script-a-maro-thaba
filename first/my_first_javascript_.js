const money = 100;
const pepsi = 25;

if (money>=100){
  console.log('I will go cinema hall');
  if (pepsi<=20){
    console.log('I will by a pepsi');
  }else{console.log('pepsi khay boka chele ra');}
}else{
  console.log('Aj ke netflix dekhbo');
}

const isLeader = true;
if (isLeader===true){
  console.log('Government money is my money');
}

const thisLeader = true;

if(thisLeader){
  console.log('Government money is always my money');
}

const thatLeader = false;

if(!thatLeader){
  console.log('Government money');
}

const age = 18;

if(age>=18){
  console.log("তুই ভোট দিতে পারবি");
}else{
  console.log('তুই ভোট দিতে পারবি না');
};

const ages = 17;
ages >= 18? console.log('ভোট দিতে পারবি'):console.log('ভোট দিতে পারবি না');

const buyer =true;

buyer === true?console.log('Taka nibo'):console.log('Taka nibo na');

// let price = 500;
// let isLeaders = !true;
// isLeaders === true?console.log(price-price):console.log(price+100);

let price = 500;
let isVIP = true;

price = isVIP ? 0 : price + 100;

let cashback = 3000;
// if (cashback>=3000){
//   console.log('cash back 500');
// } else {
//   console.log('cash back 0');
// };

cashback>=3000?console.log('cashback 500'):console.log('No cash back');

let agess = 14;
agess>=15?console.log('Teenager'):console.log('Child');

let isLoggedin = false;

let loginInfo = isLoggedin === true?'Welcome back':'Please login';

console.log(loginInfo);

let tanki = true;

let display = tanki===true?'Ready for a long drive':'Fill the tank';

console.log(display);


let Pass = false;

let passed = Pass===true?'Party time':'Next semester e serious study korbo';

console.log(passed);

const sunny = true;

sunny===!true?console.log('Stay home'):console.log('Dura pagla');

const Expensive = false;
const displayed = Expensive===!true?'I will buy this item':'I will not buy this item';

console.log(displayed);