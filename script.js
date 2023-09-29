//the variables became fuctions that operate the values received.
function distance(k){
  if(k>=2400){
      return true
    }
};

function time(m){
  if(m<=720){
 
  return true
}
};

function psuhUps(m){
  
  if(m>=30){

    return true
  }
};

function abs(ab){
if(ab>=35){

  return true
}
};
  
// function tesTAF reuse the functions above to operate your received parameters.
function testTAF(gender,km,mn,rp,ab){

  if(gender==='male'&&distance(km)&&time(mn)&&psuhUps(rp)&&abs(ab)){

      return true

  }else if(gender==='female'&&distance(km)&&time(mn-120)&&psuhUps(rp+10)&&abs(ab+5)){

      return true
 
  }else

       return false
  
  

  
      
  };

//function receives the text and function and returns everything in upper case.
function showMessagem(text,func){
 return console.log(`${text}${func}`.toUpperCase())
};

showMessagem("Candidato passou no teste?: \nresposta: ",
testTAF('male',24000,720,30,35));
  
showMessagem( "Candidato passou no teste?: \nresposta: ",
testTAF('female',24000,840,20,30));