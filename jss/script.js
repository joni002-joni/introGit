// косу
//let a = 5, b = 3, sum
 
// 
//let z = 10 
//let y = 7 
//sum = 20 % 7 //6 қалдық

//z++; //z= z+1
//z--; //z= z-1

 // z+=2 //z = z+2 z=20+2
  //z-=5 //z = z-5 z=22-5
  //z+=5 //z = z*5 z=17*5
//  z+=5 //z = z/5 z=85/5
//  z+=5 //z = z%5 z=17%5        


// console.log(" z * y = " + (z*y));
// console.log(" a * b = " + (a*b));

// console.log(" z % y = " + sum);     

   // var num = prompt("Ввудите число")

   //var kobeitindi = num * num //квадратын табатын айнымалы

  //alert(" a * b = " + kobeitindi)

          // let number1 = Number(prompt("Ввудите первое число:"));

          // let num1 = Number (prompt("Сан енгізіңіз:"));

          // let squaree = number1 * number1

          // let square = num1 * num1

          // alert("Ұзындығы" + square +'\n'+ "ені" + squaree )


  //  let a=10, b=10, c=5;
  //  let isStudent = true
  //  console.log(!isStudent);
  //  let san = 0;
  //  console.log("san: ",  !san);
   

   
                //   /console.log(a==b); //false

                //   console.log (a!=b);   
                //   //!=(тең емес)

                //   console.log(a>b); //false

                //   console.log(a<b); //false
                  
                //   console.log(a<=b); //true

                //   console.log(a>=b); //true
                //     // && (және)екі жағдайда true болса true қаитарады
                //   console.log((a>b)&&(c<a)); 
                //     // || (немесе) екі шарттың біреуі true болса true қаитарады
                //   console.log((a>b)||(c<a));

                // let age=20, hasTicket=true, isVip=false;
                
                // if((age>=18 && hasTicket)|| isVip){
                //   console.log("Сізге кешке кіруге болады");
                // }
                // else{
                //   console.log("Сізге кешке кіруге тиым салынады");
                // }

                // let agee = 44;
                //   // alert(agee>=12 && agee<=45)

                //   let n=21
                //   alert((n>=20) && (n<=50) && (n%2==0))  
  
  //КАЛЬКУЛЯТОР
// var num1 = Number(prompt('Бірінші санды енгізіңіз'))

// var num2 = Number(prompt("Екінші санды жазыңыз"))                

// var sum = 0;

// sum = num1 + num2;

// alert("Қосындысы: " +'\n'+ + sum)

            

              // var age = 70

              // var isStudent = true

              // alert(age>=65 && isStudent == true)

                          //  var jasy = prompt("Сан енгиз")  
                          //  if(10<=jasy && jasy<=20){
                          //   alert("Саныңыз дұрыс")
                          //  }
                          //  else{
                          //        alert("Саныңыз дұрыс емес")
                          //       }

                          // alert(10<=jasy && jasy<=20) 
   
          // let num = prompt("сан енгізіңіз")

          // if(num % 2 == 0){
          //   alert('сіздің жазған саныңыз ' + num + ' жұп сан')
          // }else{
          //   alert("сіздің жазған саныңыз " + num + ' тақ сан')
          // }
  // //шарт щрындау тәсілі
  // let score  = +prompt("Бағаны жаз") 
  //  if(score>=90 && score <100){
  //   alert('Сіздің бағаңыз:A')
  //  } 
  //  //екінші шарт
  //  else if(score >=80 && score < 90) {
  //   alert("Сіздің бағаңыз : A")
  //  }
  //  //үшінші шарт
  //  else if(score >=70 && score<80){
  //   alert("Сіздің бағаңыз:C")
  //  }
  //  //төртінші шарт
  //  else if(score>=50 && score<70){
  //    alert("Сіздің бағаңыз : D" )
  //  }
  //  //бесінші шарт
  //  else{
  //   alert("Сіз перекурсқа қалдыңыз")
  //  }

                          // alert("Ойын шарты: дұрыс жауапқа 1 балл беріледі")

                          // let surak1 = prompt("Қазақстанның тәуелсіздік алған жылы?")
                          // let surak2 = prompt("Қазір қай қалада оқып жатырсыз? (Almaty/Басқа қала)")
                          // let upai = 0;

                          // if(surak1 == 1991){
                          //   upai++; //upai = upai + 1 (increment)
                          // }
                          // if(surak2 == "Almaty" || surak2 == "Алматы" || surak2 == "алматы"){
                          //   upai++; //upai = upai + 1
                          // }

                          // alert('Sizdin jinagan upaiynyz ' + upai + ' bal')

let surak3 = prompt("Бургер түрін жаз (Чизбургер/Гамбургер/Двайной-чизбургер)")
let score = 0;

 if(surak3 == 'Чизбургер'){
   score = 1090

 }else if(surak3 = 'Гамбургер'){
   score = 1190

 }else if(surak3 = 'Двайной-чизбургер'){
   score = 1490
 }

 alert("Сіздің заказыңыз қабылданды! " +'\n'+ "Бургер түрі: " + surak3  +'\n'+ "Cуммасы: "+ score )

