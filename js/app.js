var phrase = prompt("Escribe una palabra"); //para que el usuario ingrese la palabra//

function cipher (phrase){ //declaramos la función cipher
  var string = [];
  phrase = phrase.replace(/\s/g, '').toLowerCase();//aquí hacemos que la frase o palabra que ingrese el usuario elimine los espacios y los reemplace, y que las mayúsculas las pase a minúsculas//
  for (var i=0; i<phrase.length; i++){ //usamos for para que recorra toda la palabra
    var character = String.fromCharCode((phrase[i].charCodeAt()-65+33)%26+65); //declaramos la Variable character que leerá la palabra y con String.fromCharCode nos devolverá la cadena mediante el uso de secuencia de valores//
//ingresamos la fórmula del cifrado césar
    string.push(character); //mediante push hacemos que se inserten las palabras

    var joinLetters = string.join (""); //usamos join para obtener la palabra junta
  }

  return joinLetters; //nos regresa la palabra cifrada
}

function decipher (phrase){ //declaramos la fucnión para descifrar
  var string = [];
  //phrase = phrase.replace(/\s/g, '');
  phrase = phrase.toLowerCase().replace(/\s/g, ''); //ahora lo usamos al contrario de la función cipher para que decifre la palabra "cifrada" con cifrado cesar

  for (var i=0; i<phrase.length; i++){
    var character = String.fromCharCode((phrase[i].charCodeAt()-65+33)%26+65);

    string.push(character);

    var joinLetters = string.join ("");
  }

  return joinLetters;
}


console.log(cipher(phrase)); //nos muestra la frase cifrada
console.log(decipher(cipher(phrase))); //nos muestra la palabra descifrada
