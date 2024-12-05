const button0 = document.getElementById('butn0');
button0.addEventListener('click', function() {
  obnuleniefon();
  document.getElementById("prim01").style.display = "block";
});
const button1 = document.getElementById('butn1');
button1.addEventListener('click', function() {
  obnuleniefon();
  document.getElementById("prim02").style.display = "block";
});
const button2 = document.getElementById('butn2');
button2.addEventListener('click', function() {
  obnuleniefon();
  document.getElementById("prim03").style.display = "block";
});
const button3 = document.getElementById('butn3');
button3.addEventListener('click', function() {
  obnuleniefon();
  document.getElementById("prim04").style.display = "block";
});


var obnuleniefon = function(){
  document.getElementById("prim01").style.display = "none";  
  document.getElementById("prim02").style.display = "none";  
  document.getElementById("prim03").style.display = "none";  
  document.getElementById("prim04").style.display = "none";  

}

