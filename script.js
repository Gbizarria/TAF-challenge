/* Conforme explicado no enunciado adicione as palavras reservadas let ou const nas variaveis */

 const distance = 25000;
 const time = 710;
 const gender = "male";
 const pushUps = 40;
 const abs = 35;

/* 

    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar: 

    if(gender === 'male)
    ...

  */
 

function testTAF(distance, time, gender, pushUps, abs) { //Essa função recebe os parâmetros para executar a condição
  
    let passed = false;//A variável 'passed' vem por padrão dentro da função como ' false'
    
      if(gender==="male") //Condições impostas para a aprovação do usuário masculino
      if(distance>=24000)
      if(time<=720) 
      if(pushUps>=30)
      if(abs>=35)
    
      passed=true // Se os parânmetros da função forem condizentes com as condições impostas, 'passed' se torna 'true'
 
      if(gender==='female')//Condições impostas para a aprovação do usuário feminino
      if(distance>=24000)
      if(time<=840) 
      if(pushUps>=20)
      if(abs>=30)
        
        passed=true// Se os parânmetros da função forem condizentes com as condições impostas, 'passed' se torna 'true'
   
     
     return passed; // Caso nenhuma das condições impostas seja uma verdade, a variável passa a ter o valor padrão(false)
     
  }
   
  console.log( "Candidato passou no teste?: \nresposta: ",
  testTAF(24000,900,'male',19,30),);

  
  module.exports = testTAF;
 

      









//Sua logica deve ser inserida aqui:

// Retorno da variavel passed onde para o candidato passar ele deve ter o valor de: true
  
  
  //para executar o script no terminal digite: node ./script.js
  //para executar os testes no terminal digite: node --test ./test_cases.js
  
 
   
 
  
  

 
  

  
  
  
  

 
     
  


