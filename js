#open Firefox
#open web whatsup
#select contact to bomb
#hit F12 console
#consent insert
#paste code

var t=0;                             //This is the counter, where the counting starts
var messageToSendEveryXTime;  //the is the variable that holds the message to send
messageToSendEveryXTime = t;   //in my case I want to spam counting numbers starting at zero
                                                     //if you want to send something else change here
                                                     //for example you migh want to send "I love you every second" every second

setInterval(function(){
	window.InputEvent = window.Event || window.InputEvent; 
	var d = new Date(); 
	var event = new InputEvent('input', {bubbles: true}); 
	var textbox = $('div._2S1VP'); 
	textbox.textContent = messageToSendEveryXTime;   //inserts the message in the textbox
	textbox.dispatchEvent(event); $("button._35EW6").click(); //sends the message
	t++;         //increments the counter
}, 1000); //interval to send messages, 1000= 1 second
             //choose the delay in seconds times 1000, example, 5 seconds is 5000

#hit
#to stop the bot refresh browser hit F5
#enjoy the fun!
#or use the Click to Chat function of Whatsup
#insert the destination number and the text you want to sent. Hit done!
#https://wa.me/15182998786?text=I'm%20interested%20in%20your%20car%20for%20sale
