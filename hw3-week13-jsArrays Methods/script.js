 // . Бос массив ашыңыз => sandar = []
   // 2. Қолданушыдан сан енгізуді ЦИКЛ арқылы сұрай беріңіз.
   // 3. Егер жұп сан болса, Массивтің басына қосасыз, егер тақ болса соңына қосасыз.
   // 4. Қолданушы 0 енгізсе тоқтатасыз.
   // 5. Соңында массивтің өзін және ұзындығын шығарасыз            
                 
                            
   let sann = []
    while (true) {
   let sandar = +prompt("San engiziniz!")
             
   if(sandar == 0) {
     break;
   } else if (sandar%2==0){
      sann.unshift(sandar)
   }else {
      sann.push(sandar)
    }   
  }
 console.log("Massiv",sann);
 console.log("Massiv ұззындығы",sann.length);