var doc = document.getElementById("background");
var color = ["yellow", "pink", "yellowgreen", "blue","purple"];
var i = 0;
function change() {
  doc.style.backgroundColor = color[i];
  i++;
  
  if(i > color.length - 1) {
    i = 0;
  }
}
setInterval(change, 5000);