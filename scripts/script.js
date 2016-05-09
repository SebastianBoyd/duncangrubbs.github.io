var list = ['person', 'coder', 'singer', 'prostitute', 'hooker', 'astronaut', 'lameo', 'cat care giver', 'stripper', 'businessman', 'engineer', 'postman', 'artist', 'nurse', 'doctor', 'soldier',
 'grave robber', 'american', 'asian', 'bride', 'son', 'father', 'divorcee', 'mother', 'man', 'woman', 'european', 'african', 'pornstar', 'crab fishermen', 'pilot', 'chef', 'policeman', 'airline chef', 'elevator music artist', 'child',
  'grandmother', 'grandfather', 'explosives tester', 'hacker', 'racer', 'l33t speak translator', 'gamer', 'feminist', 'gamer gril', 'mathmatics teacher', 'history major', 'vlogger', 'unemployed', 'professor', 'politician', 'racist', 'child soldier', 'pedophile', 'serial killer', 'nazi',
  'terrorist', 'best boy', 'dat boi', 'fuccboi', 'ghost producer', 'edm fan', 'piece of lint', 'communist', 'anarchist', 'prankster', 'gringo', 'social experimenter', 'scientist', 'mexican', 'slave', 'pimp', 'garbage man', 'cuuuuuck', 'cuckboi', 'ass eater',
  'dweeb', 'nerd', 'russian', 'south african', 'child slave', 'ISIS', 'new yorker'];
var $message = document.querySelector('#message');
var intervalID = window.setInterval(myCallback, 200);

function myCallback() {
  var i = Math.floor((Math.random() * list.length));
  $message.textContent = list[i] + '.';

}
