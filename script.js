//the variables became fuctions that operate the values received.
function distance(k){
  if(k>=24000){
      return true
    }
};

function time(m,f){
  if(m<=720){
  if(f<=840)
  return true
}
};

function psuhUps(m,f){
  
  if(m>=30){
    return true
  }
  if(f>=20){
    return true
  }
};

function abs(m,f){
if(m>=35){
  return true
};
if(f>=30){
  return true
}
};
  
// function tesTAF reuse the functions above to operate your received parameters.
function testTAF(km,mn,gender,rp,ab){

  if(gender==='male'&&distance(km)&&time(mn,null)&&psuhUps(rp,null)&&abs(ab,null)){

      return true

  }else if(gender==='female'&&distance(km)&&time(null,mn)&&psuhUps(null,rp)&&abs(null,ab)){

      return true
 
  }else

       return false
  
  

  
      
  };

//function receives the text and function and returns everything in upper case.
function showMessagem(text,func){
 return console.log(`${text}${func}`.toUpperCase())
};

showMessagem("Candidato passou no teste?: \nresposta: ",
testTAF(24000,720,'male',30,35));
  
showMessagem( "Candidato passou no teste?: \nresposta: ",
testTAF(24000,840,'female',20,30));


module.exports = testTAF;


