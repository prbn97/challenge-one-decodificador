const textAreaInput = document.querySelector(".text-area-input");
const textAreaOutput = document.querySelector(".text-area-output");

/* Criptografia

As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"

*/

function btn_encrypt(){ 
  
  const messangeToEncrypt = encrypt(textAreaInput.value)
  textAreaOutput.value = messangeToEncrypt;
  textAreaInput.value = "";
  }

function encrypt(encryptMenssage) {
  let cryptography = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  encryptMenssage = encryptMenssage.toLowerCase();

  for (let i = 0; i < cryptography.length; i++) {

    if (encryptMenssage.includes(cryptography[i][0])) {
      encryptMenssage = encryptMenssage.replaceAll(cryptography[i][0], cryptography[i][1])
    }
  }
  return encryptMenssage;
};
