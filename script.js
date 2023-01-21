
const visac = document.getElementById('visa');
const masterc = document.getElementById('master');
const amexc = document.getElementById('amex');
const dinersc = document.getElementById('diners');

let errormsg = document.getElementById('alert').style.display = 'none';

const btn = document.querySelector('button');

let inputtxt = document.querySelector('input').value;

function myFunction() {
    
    let text = document.querySelector('input').value;
    
switch(text) {

    case '4' :
      
          masterc.style.display = 'none';
          amexc.style.display = 'none';
          dinersc.style.display = 'none';
  
          break;

    case '5' :    

          visac.style.display = 'none';
          amexc.style.display = 'none';
          dinersc.style.display = 'none';

          break;

    case '34' : 
    case '37' :

          visac.style.display = 'none';
          masterc.style.display = 'none';
          dinersc.style.display = 'none';
  
          break;

    case '36' : 
    case '38' :
    case '300' :
    case '301' :
    case '302' :
    case '303' :
    case '304' :
    case '305' :   

          visac.style.display = 'none';
          masterc.style.display = 'none';
          amexc.style.display = 'none';
  
          break;

    case '' :
  
          visac.style.display = 'inline-block';
          masterc.style.display = 'inline-block';
          amexc.style.display = 'inline-block';
          dinersc.style.display = 'inline-block';
          document.getElementById('alert').style.display = 'none';
          document.getElementById('card').style.marginTop = '20rem'
          break;

    default:

          return false;
 }

}

function cardnumber(inputtxt) {
      
    const visanum = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const masternum = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    const amexnum = /^(?:3[47][0-9]{13})$/;
    const dinersnum = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/;
    
 if(inputtxt.value.match(visanum)) {

      masterc.style.display = 'none';
      amexc.style.display = 'none';
      dinersc.style.display = 'none';
   
      
 } else if(inputtxt.value.match(masternum)) {

      visac.style.display = 'none';
      amexc.style.display = 'none';
      dinersc.style.display = 'none';
 } else if(inputtxt.value.match(amexnum)) {

    visac.style.display = 'none';
    masterc.style.display = 'none';
    dinersc.style.display = 'none';
} else if(inputtxt.value.match(dinersnum)) {

    visac.style.display = 'none';
    amexc.style.display = 'none';
    masterc.style.display = 'none';
} else {
    document.getElementById('alert').style.display = 'block';
    document.getElementById('card').style.marginTop = '-3.3rem'
    
}
}

