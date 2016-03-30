var wrapper = document.getElementById('wrapper');
var names = ['John','Jeff','David'];
var hits = [];
var keyPresses = [];

document.addEventListener('click', function(){
  console.log('click\n');
  return null;
  }, false);

document.addEventListener('keydown', function(event){
  console.log('keypress');
  myKeyPress(event);
  if(keyPresses.length >= names[0].length){
    hits = checkForSecretCode(names,keyPresses);
    if(hits.length > 0)
    {
      var surprise = document.getElementById('surprise');
      surprise.innerHTML = '<p> Hello, '+ hits[0] + '.</p>';
      keyPresses = [];
      hits = [];
    }
  }
  console.log(hits);
  return hits;
})

function myKeyPress(e){
  var keynum;
  if(window.event) { // IE
    keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera
    keynum = e.which;
    }
  if(String.fromCharCode(keynum) == '' || keyPresses.length > 15)
  {
    keyPresses = [];
  }
  keyPresses.push(String.fromCharCode(keynum));
}

function checkForSecretCode(names, keyPresses) {
  console.log(keyPresses);
  for(var i = 0; i < names.length; i++)
  {
    for(var j = 0; j <= keyPresses.length - names[i].length; j++)
    {
      var k = 0;
      do{
        var b = names[i].charAt(k).toUpperCase() == keyPresses[j];
        //var b = new Boolean(names[i].charAt(k) == keyPresses[j]);
        //console.log(b);
        k++;
        j++;
        if(k == names[i].length)
        {
          hits.push(names[i]);
          break;
        }
      }while(b);

    }
  }
  return hits;
}
