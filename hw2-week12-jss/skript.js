let name = prompt("студент атынды жаз!") 
let language = prompt("Қай тылде сойлейсыз? English,Kazak,Russia") 
 
if (language=="English") { 
    function hello(compareWords) { 
         
        return name==language      
} 
alert(`Hello ${name} how are you?`) 
}else if (language=="Kazak") { 
        alert(`Асалаумагалейкум ${name} қалайсың?`) 
}else if (language=="Russia") { 
        alert(`${name} привет как дела?`) 
}else{ 
         alert(`${name} Сіз кате жаздыңыз кайта жазып көріңіз!!`) 
}