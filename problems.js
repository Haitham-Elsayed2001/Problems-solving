// 1
// var num=Number(window.prompt("Enter your number"));
// console.log(num);


// 2
// var num=Number(window.prompt("Enter your number"));
// if(num % 3 == 0 && num % 4 == 0){
//     console.log("Yes");
// }
// else{
//     console.log("No")
// }


// 3
// var num1=Number(window.prompt("Enter first number"));
// var num2=Number(window.prompt("Enter second number"));
// if(num1>num2){
//     console.log(num1);
// }
// else if(num2>num1){
//     console.log(num2);
// }
// else{
//     console.log('invalid');
// }




// 4
// var num=Number(window.prompt("Enter your number"));
// if(num<0){
//     console.log("negative");
// }
// else if(num>0){
//     console.log("positive")
// }
// else{
//     console.log("zero");
// }



// 5
// var num1=Number(window.prompt("Enter first number"));
// var num2=Number(window.prompt("Enter second number"));
// var num3=Number(window.prompt("Enter third number"));
// var max= num1;

// if(num2>max){
//     max=num2;

//     if(num3>max){
//         max=num3;
//     }
//     var min = num1;

//     if(num2<min){
//         min=num2;
    
//      if(num3<min){
//         min=num3;
//      }
      
//     }
    
//     console.log("maximum: " , max);
//     console.log("minimum: ", min);
// }



// 6
// var num=Number(window.prompt("Enter your number"));
// if(num%2 == 0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }



// 8
// var ch=window.prompt("Enter charcter");
// if(ch=='a'|| ch=='e'|| ch=='i'|| ch=='o'|| ch=='u'){
//     console.log("vowel");
// }
// else{
//     console.log("constant");
// }



// 9
// var num=Number(window.prompt("Enter the number"));
// for(var i=0; i<num;i++){
//     console.log(i);
// }



// 10
// var num=Number(window.prompt("Enter the number"));
// for(var i=1; i<=12;i++){
//     console.log(i*num);

// }



// 11
// var num=Number(window.prompt("Enter the number"));
// for(var i=0;i<num;i++){
//     if(i % 2 == 0)
//         console.log(i);
// }



// 12
// var m=Number( window.prompt("Enter number"));
// var n=Number(window.prompt("enter number n"));
// console.log(m**n);



// 13
// var math=Number(window.prompt("enter subject1"));
// var science=Number(window.prompt("enter subject2"));
// var comp=Number(window.prompt("enter subject3"));
// var arab=Number(window.prompt("enter subject4"));
// var eng=Number(window.prompt("enter subject5"));

//   var sum =math+science+arab+comp+eng;
// console.log(sum);

// var avg=sum/5.0;
// console.log(avg);

// var precentage="";
// precentage=(sum/500)*100;
// console.log(precentage);



// 14
// var month=Number(window.prompt("Enter month number(1-12)"));
// if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
//     console.log("Days in month: 31 days");
// }
// else if(month==4||month==6||month==9||month==11){
//     console.log("Days in month: 30 days");
// }
// else if(month==2){
//     console.log("28 or 29 days");
// }
// else{
//     console.log("invalid input");
// }



// 15
// var math=Number(window.prompt("enter subject1"));
// var science=Number(window.prompt("enter subject2"));
// var comp=Number(window.prompt("enter subject3"));
// var arab=Number(window.prompt("enter subject4"));
// var eng=Number(window.prompt("enter subject5"));

//   var sum =math+science+arab+comp+eng;

// var avg=sum/5.0;


// var precentage=(sum/500)*100;
// console.log(precentage);
//  if(precentage>=90){
//     console.log("Grad A");
//  }
//  else if (precentage>=0.80){
//     console.log("Grade B");

//  }
//  else if( precentage>=70){
//     console.log("Grade C");

//  }
//  else if(precentage>=60 ){
//     console.log("Grade D");

//  }
//  else if(precentage>=40 ){
//     console.log("Grade E");

//  }
//  else{
//     console.log("Grade F");

//  }




// 15
// var month=Number(window.prompt("Enter month number"));
// switch(month){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:

//       console.log("31 days");
//       break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("30 days");
//         break;
//     case 2:
//         console.log("28 or 29 days");
//         break;

//     default:
//         console.log("invalid month.");
//         break;

// }





// 16
// var ch=window.prompt("Enter charcter");
// switch(ch){
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         console.log("vowel");
//         break;
//     default:
//         console.log("constant");
//          break;               
// }




// 17
// var num1=Number(window.prompt("Enter first number"));
//  var num2=Number(window.prompt("Enter second number"));
//  switch(true){
//     case num1>num2:
//         console.log(num1);
//         break;
//     default:
//         console.log(num2);    
//  }




// 18
// var num=Number(window.prompt("Enter the number"));
// switch(true){
//     case num%2==0:
//         console.log("even");
//         break;
//     default:
//         console.log("odd");    
// }




// 19
// var num=Number(window.prompt("Enter the number"));
// switch(true){
//     case num>0:
//         console.log("positive");
//         break;
//     case num<0:
//         console.log("negative");
//         break;
//     default:
//         console.log("zero");        
// }





// 20

// var num1=Number(window.prompt("Enter first number"));
// var op=window.prompt("Enter operation");
// var num2=Number(window.prompt("Enter second number"));
// switch(op){
//     case '+':
//         console.log(num1 + num2);
//         break;
//         case '*':
//             console.log(num1 * num2);
//             break;
//             case '-':
//                 console.log(num1 - num2);
//                 break;
//                 case '/':
//                     console.log(num1 / num2);
//                     break;
//             default:
//                 console.log("error.");        

// }
