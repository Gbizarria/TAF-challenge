const distance = 25000;
const time = 710;
const gender = "male";
const pushUps = 40;
const abs = 35;



function testTAF(gender,distance,time,pushUps,abs) { //Essa função recebe os parâmetros para executar a condição
 let  passed = false //A variável 'passed' vem por padrão dentro da função como ' false'
     if(gender==='male'){

     if(distance>=24000)

     if(time<=720)

     if(pushUps>=30)

     if(abs>=35)
     
     passed= true
    };
     
     //Condições impostas para a aprovação do usuário feminino
    if(gender==='female'){

    if(distance>=24000)


    if(time<=840)


    if(pushUps>=20)


    if(abs>=30)

        // Se os parânmetros da função forem condizentes com as condições impostas, 'passed' se torna 'true'
       passed=true
};
        
            // Caso nenhuma das condições impostas seja uma verdade, a variável passa a ter o valor padrão(false)

     return passed


}
    

  console.log( "Candidato passou no teste?: \nresposta: ",
  testTAF('female',24000,840,20,30));
            

  
  console.log( "Candidato passou no teste?: \nresposta: ",
  testTAF('male',24000,720,30,35));
 
   
 
  module.exports = testTAF;
  
