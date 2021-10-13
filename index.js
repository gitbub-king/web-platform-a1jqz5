// alert("这是一个弹出框~");
// let test = true && 22;
// let second = false && 22;
// console.log(test, second);
// console.log('------------------');
// test = true || 22;
// second = false || 22;
// console.log(test, second);
// console.log('------------------');
// test = !true;
// console.log(test);
// console.log('------------------');
// test = 1 > 2 ? '执行第一句' : '执行第二句';
// console.log(test);
// console.log('------------------');
// test = 1;
// console.log(++test);
// console.log('------------------');
// test = `c${'a' + 'b'}de`;
// console.log(test);
// console.log('------------------');
// test = null;
// console.log(typeof test);
// console.log(test == null);
// console.log('------------------');
// test = [1, 'a'];
// console.log(test[1]);
// console.log(typeof test);
// console.log('------------------');
// test = 1;
// second = '1';
// console.log(test + second);
// console.log('------------------');
// console.log(String(test));
// console.log('------------------');
// console.log(typeof (test + ''));
// console.log('------------------');
// console.log(typeof +'123');
// console.log('------------------');
// console.log(1 === '1');
// console.log('------------------');
// test = 1;
// second = 2;
// if (test > second) {
//   console.log('执行第一句');
// } else if ((test = second)) {
//   console.log('执行第二句');
// } else {
//   console.log('执行第三句');
// }
// console.log('------------------');
// test = [];
// console.log(Boolean(test));
// console.log('------------------');
// console.log(Number.MAX_VALUE);
// console.log('------------------');
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
console.log('--------classTestFor----------');
let sum = 0;
for (let i = 0; i < 6; i++) {
  sum += i;
}
console.log('1+2+3+4+5=' + sum);
sum = 0;
for (let i = 0; ; i++) {
  if (sum > 20) {
    console.log(sum);
    break;
  }
  sum += i;
}
console.log('------------------');
sum = 0;
for (let i = 0; sum < 20; ) {
  sum += i++;
}
console.log(sum);
console.log('---------end---------');
console.log('--------classTestFunction----------');
let testfun = function test(num1) {
  return (num2) => {
    return num1 + num2;
  };
};
console.log(testfun(1)(2));
function test(a, b) {
  console.log(a, b);
}

test('a', 'b');
test('c');
test('a', 'b', 'c');

function secondTest(a = '', b = '') {
  console.log(a, b);
}

secondTest();
secondTest('c');
secondTest('c', null);

function minNumber(a = 0, b = 0) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('传入的数据不合法');
    return 'error';
  }
  return a > b ? b : a;
}
console.log(minNumber(2, Number.MIN_VALUE));

console.log('---------end---------');
console.log('--------classTestObject----------');
let person = {
  peoplename: '张三',
  age: 18,
  gender: 1,
};
let keys = Object.keys(person);
for (let i = 0; i < keys.length; i++) {
  console.log(person[keys[i]]);
}
let { peoplename, age, gender } = person;
console.log(age);

console.log('---------end---------');
console.log('--------classTestArray----------');
let newArray = ['张三', 18, { id: 1, scode: 2 }];
console.log(newArray);
delete newArray[2];
console.log(newArray);
newArray[4] = 2;
console.log(newArray);

console.log('---------end---------');
console.log('--------classTestOne----------');

function judges(arrays, numbers) {
  if (!Array.isArray(arrays) || typeof numbers !== 'number') {
    console.log('传入的数据不合法');
    return 'error';
  }
  for (let i = 0; i < arrays.length; i++) {
    if (numbers === arrays[i]) {
      return i;
    }
  }
  return -1;
}

newArrayTwo = [3, 5, 7, 2, 9, 38];
giveNumber = 38;
console.log(judges(newArrayTwo, giveNumber));

console.log([3, 5, 7].slice(1, 4));
newArrayTwo.forEach((item, index) => {
  console.log(item, index);
});
console.log('---------end---------');
console.log('--------classTestTWo----------');
let arr = [
  {
    id: 1,
    code: 'P5001',
    org: '华北配送中心',
    operator: '操作人001',
    operaeTime: '2021年10月12日15:33:17',
  },
  {
    id: 2,
    code: 'P5002',
    org: '华北配送中心',
    operator: '操作人002',
    operaeTime: '2021年10月12日15:33:17',
  },
  {
    id: 3,
    code: 'P5003',
    org: '华南配送中心',
    operator: '操作人003',
    operaeTime: '2021年10月12日15:33:17',
  },
];
let newArr = arr.filter((item, index) => {
  return item['id'] >= 2;
});
console.log(newArr);
newArr = arr.filter((item, index) => {
  return item['code'] == 'P5002';
});
console.log(newArr);

for (let i = 0; i < arr.length; i++) {
  if (arr[i]['operator'] === '操作人003') {
    console.log(i);
  }
}

let newArrTwo = arr.map((item, index) => {
  return {
    id: item.id + 1,
    code: item.code,
    org: item.org,
    operator: item.operator,
    operaeTime: item.operaeTime,
  };
});
console.log(newArrTwo);

let newArrThree = arr.slice(0, 2);
newArrThree.push({
  id: 4,
  code: 'P5004',
  org: '华东配送中心',
  operator: '操作人004',
  operaeTime: '2021年10月12日15:33:17',
});
console.log(newArrThree);

console.log('---------end---------');

console.log('--------classTest----------');
class students {
  constructor(sname) {
    this.name = sname;
  }
  hello() {
    // alert("hello  "+this.name);
  }
}

let stu = new students('Jerry');

stu.hello();
console.log(stu);

class Test {
  constructor(numbers) {
    this.numbers = numbers;
  }
  add(numbertwo) {
    this.numbers += numbertwo;
  }
  log() {
    console.log(this.numbers);
  }
}
let t = new Test(1);
t.add(2);
t.log();

console.log('---------end---------');
console.log('---------dynamic---------');
function dynamicDataGeneration(nums) {
  if (typeof nums !== 'number' || nums < 0) {
    console.log('传入的数据不合法');
    return 'error';
  }
  let arrlist = [];

  for (let i = 0; i < nums; i++) {
    arrlist.push({
      id: i,
      code: `PS${i}`,
      org: i < 2 ? '华北配送中心' : '华南配送中心',
      operator: `操作人${i}`,
      operaeTime: '2021年10月12日17:36:16',
    });
  }
  return arrlist;
}

console.log(dynamicDataGeneration(3));
console.log(dynamicDataGeneration(-3));
console.log('---------end---------');
console.log('---------homework20211012---------');
function arrayDimensionalityReduction(arrs){
  if(!Array.isArray(arrs)){
    console.log("传入数据不合法");
    return "error";
  }
  let newarr=[];
  for(let i=0;i<arrs.length;i++){
    for(let j=0;j<arrs[i].length;j++)
      newarr.push(arrs[i][j]);
  }
  return newarr; 
}

function aDR(arrs){
  if(!Array.isArray(arrs)){
    console.log("传入数据不合法");
    return "error";
  }
  let newarr=[];
  for(let i=0;i<arrs.length;i++){
    newarr=newarr.concat(arrs[i]);
  }
  return newarr;
}
let arraylist=[[2,3],['a',6],[10,true],[1,2,3]];
console.log(arrayDimensionalityReduction(arraylist));//方法1
console.log(aDR(arraylist));//方法2
console.log('---------end---------');




