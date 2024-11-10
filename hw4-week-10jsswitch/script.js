let num1=+prompt("бырыншы санды енгіз: ") 
let num2=+prompt("екыншы санды енгіз: ") 
let num3=+prompt("ушыншы санды енгіз: ") 
let big; 
switch (true) { 
    case (num1>=num2&&num1>=num3): 
        big=num1; 
        break; 
    case(num2>=num1&&num2>=num3): 
        big=num2; 
        break; 
    case(num2>=num1&&num3>=num2): 
        big= num3; 
        break; 
} 
alert("ен улкен сан: 5"+big);