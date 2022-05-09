    //HOME WORK CHALLENGE 1
    const boxElement = document.getElementById('box');
       function getName(firstName, surName){
           return firstName + " " + surName;
       }

        const name1 = getName("Ashley", "Waudby");
        
          boxElement.innerHTML = name1;

    //HOME WORK CHALLENGE 2
    const boxTwoElement = document.getElementById('box-2');
    function divide(time, distance){
        const output = (time) / distance;
        return output;
    }

    const result = divide(60, 2)
    boxTwoElement.innerHTML = result;
    
    