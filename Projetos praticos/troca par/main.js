function acharPar(array){
   for (const i of array) {
        if(array[i] % 2 === 0){
            array.splice(i, 1, 0)
        }
     }
   
        
        
        
    
    console.log(array)
}

let num =[1,2,3,4,5,6,7]

acharPar(num)