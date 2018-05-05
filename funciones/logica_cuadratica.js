
function cuadratica()
{
  var a= document.getElementById('a').value;
  var b =document.getElementById('b').value;
  var c =document.getElementById('c').value;
  var x1=0;
  var x2=0;
  a= parseInt(a);
  b= parseInt(b);
   c= parseInt(c);
  x1= parseInt(x1);
   x2= parseInt(x2);

   
  if (a!=0){ 
     x1= (-b +(Math.sqrt((b*b)-(4*a*c))))/(2*a);
   x2=  (-b -(Math.sqrt((b*b)-(4*a*c))))/(2*a);
	   x1 = document.getElementById('x1').value = x1;
    x2 = document.getElementById('x2').value = x2;
  }
  else
  {
	  alert('¡¡ERROR!!, No es posible hacer la división por 0');
  }
   
  return false;
}