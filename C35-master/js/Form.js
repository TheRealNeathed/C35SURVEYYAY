class Form{
    constructer() {}

display(){
var title = createElement('h2');
title.html("Survey");
title.position(430, 100);

var input = createInput("");
var button = createButton('Play');
var greeting = createElement('h3');

input.position(430,160);
button.position(450,200);

button.mousePressed(function(){
    input.hide();
    button.hide();
    var name = input.value();

    playerCount +=1;
    player.update(name);
    player.updateCount(playerCount);
    greeting.html("hello"+name);
    greeting.position(430,160);
    
});

}

}