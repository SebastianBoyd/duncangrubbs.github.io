var r, g, b;
var colors = [r, g, b];
for(var i = 0; i < 3; i++){
  colors[i] = Math.floor(Math.random() * 255);
}
document.body.style.backgroundColor = 'rgb(' + colors[0] + ',' + colors[1] + ',' + colors[2] + ')';

var num = 0;
for(var k = 0; k < colors.length; k++){
  if(colors[k] > colors[num]){
    num = k;
  }
}

if(num == 0){
  document.querySelector('#adjective').textContent = "mad.";
}else if(num == 1) {
  document.querySelector('#adjective').textContent = "neutral.";
}else if(num == 2){
  document.querySelector('#adjective').textContent = "sad.";
}

function linkClicked() {
  if(num == 0){
    window.open('http://www.apa.org/topics/anger/control.aspx', '_blank');
  }else if(num == 1) {
    window.open('https://reddit.com', '_blank');
  }else if(num == 2){
    window.open('https://therapists.psychologytoday.com/rms/prof_results.php?city=San+Anselmo&spec=293', '_blank');
  }

}
