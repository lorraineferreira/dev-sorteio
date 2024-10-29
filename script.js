function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value ) 
    const max = Math.floor( document.querySelector(".input-max").value)
    const text = document.querySelector(".text-add")
    const condition = document.querySelector(".text-condition")
   

    if(max > min){
        const result = Math.floor(Math.random() *( max - min + 1)) + min
        text.innerHTML = result

    } else{
        condition.innerHTML = "O valor mínimo tem que ser MENOR que o valor máximo"
    }

   

    


}