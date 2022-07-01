//----Recap Topic
function sum(name,...arg){
    var total = 0;
    for(var i in arg){
        total=total+arg[i];
    }
    document.write(total + '</br>');
}
sum('Nice',20,10,70);
sum('Look',20,10,71);


//------Spread Operator
//------Example-01
function result(name,...arg){
    var sum = 0;
    for(var i in arg){
        sum=sum+arg[i];
    }
    document.write(sum);
}
var array = [5,10,15,20,100];
result('Banta',...array)


//------Example-02
var array = [1,2,3,4,5];
console.log(array); // Only show array value


//------Example-03
var array = [1,2,3,4,5];
console.log(...array); //[Clone all value] Break array & seperate all agrument


//------Example-04
var array = [1,2,3,4,5];
console.log([...array]); //Multiple argument create array


//------Example-05
var array1 = [1,2,3,4,5];
var array2 = array1;
console.log(array1);
console.log(array2); //Same value of array1 & array2


//------Example-06
var array1 = [1,2,3,4,5];
array1.push(10);
var array2 = array1;
console.log(array2); //New array1 value set


//------Example-07
var array1 = [1,2,3,4,5];
var array2 = [...array1];   //Using ES6 Spread operator 
array1.push(10);
console.log(array1); 
console.log(array2); 


//------Example-08
var arry1 = [10,20,30,40];
var arry2 = [100,200,300];
var arry3 = arry1.concat(arry2); //Concat arry using old method
console.log(arry3);


//------Example-09
var arry1 = [1,2,3,4,5];
var arry2 = [6,7,8,9,10];
var arry3 = [...arry1,...arry2] //Concat Using ES6 Spread Operator Method
console.log(arry3);


//------Example-10
var arry1 = [1,2,3,4,5];
var arry2 = [6,7,8,9,10];
var arry3 = [...arry2,...arry1] //Sequence Change Concat
console.log(arry3);


//------Example-11
var arry1 = [1,2,3,4,5];
var arry2 = [6,7,8,9,10];
var arry3 = [50,...arry2,...arry1,60] //Adding New Value
console.log(arry3);


//------Example-12
var obj1 = {name:'Santo'};
var obj2 = {age: 25};
var obj3 = {...obj1,...obj2}; //Concate using Object
console.log(obj3);
