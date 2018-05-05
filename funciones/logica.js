
function suma()
{
  var n1= document.getElementById('primernumero').value;
  var n2 =document.getElementById('segundonumero').value;
  var res=0;
  n1= parseInt(n1);
  n2= parseInt(n2);
  res= parseInt(res);
  res= n1+n2; 
  res = document.getElementById('resultado').value = res;
  
  return false;
}

function resta()
{
  var n1= document.getElementById('primernumero').value;
  var n2 =document.getElementById('segundonumero').value;
  var res=0;
  n1= parseInt(n1);
  n2= parseInt(n2);
  res= parseInt(res);
  res= n1-n2; 
  res = document.getElementById('resultado').value = res;
  
  return false;
}

function multiplicacion()
{
  var n1= document.getElementById('primernumero').value;
  var n2 =document.getElementById('segundonumero').value;
  var res=0;
  n1= parseInt(n1);
  n2= parseInt(n2);
  res= parseInt(res);
  res= n1*n2; 
  res = document.getElementById('resultado').value = res;
  
  return false;
}

function division()
{
  var n1= document.getElementById('primernumero').value;
  var n2 =document.getElementById('segundonumero').value;
  var res=0;
  n1= parseInt(n1);
  n2= parseInt(n2);
  res= parseInt(res);
 
 
if (n2==0){
  alert('No se puede hacer la división');
  } else{
  res= n1/n2; 
  
  res = document.getElementById('resultado').value = res;
  }	

  return false;
}	
