var creditCardNumber= prompt("Por favor ingresa los números de la tarjeta");


    if((creditCardNumber==null)||(creditCardNumber=="")){
    valid = false;
    alert("Número inválido!\nNo se ingresó información.");


    } else if(creditCardNumber.length!=16){
      valid = false;
      alert("Número inválido!\nEl número no tiene la longitud adecuada.");
      }

     var givenNumbers = 
