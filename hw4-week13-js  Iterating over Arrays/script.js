//Бірінші тапсырма
            let sann = [1,2,3,4,5]
            let Saqtay = sann.map(san=>san**3)
            console.log(Saqtay);

            for(let san of Saqtay){
                if (san%2==1) {
                    console.log(san);
                    
                }
            }

   //Екінші тапсырма

        let stydent = +prompt("Студенттердің санын енгізіңіз!!!")
        let baga = []
                        for (let i = 0; i < stydent; i++) {
                                let bagaEsep = +prompt(`${i}-ші Студенттің бағасын енгізіңіз`)   
                                baga[i]=bagaEsep
                                    console.log(`${i}-ші Студент бағасы  ${bagaEsep}`);
                                }
                                console.log(baga);
            let sum = baga.reduce((total,num)=>total+num/1)
            console.log("Барлық бағаның жиындығы "+sum);
            
            let jogaryBal = baga.filter(sym=>sym>=85)
            console.log(`Жоғары бал алғандар Студенттер бағасы ${jogaryBal}`) 
        