function sexo(){
  var a = document.getElementById("ler_mais");
  var b = document.getElementById("ler_menos");
  var c = document.getElementById("text_click");
  
  if(b.style.visibility === "hidden")
  {
    b.style.visibility = "visible";
    a.style.visibility = "hidden";
    c.innerHTML = "ler mais..."
  }
  else
  {
    b.style.visibility = "hidden";
    a.style.visibility = "visible";
    c.innerHTML = "ler menos..."
  }
}