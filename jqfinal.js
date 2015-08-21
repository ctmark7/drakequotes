//quote pool, [quote,source]
var drakeQuotes = Array( 
	["\"I'm scared that every girl I care for will find a better man and end up happier in the long run.\" "
	, "-Trey Songz f/ Drake, \"Missing You (Remix)\", 2009" ],
	["\"I know they say the first love is the sweetest, but that first cut is the deepest.\""
	,"-Karaoke, 2010" ],
	["\"All so convinced that you're following your heart, cause your mind don't control what it does sometimes.\"" 
	, "-Take Care, 2011"],
	[ "\"Wish you would learn to love people and use things, and not the other way around.\""
	,"-Connect, 2013"],
	["\"Just as I predicted, here we go again. They always say the hottest love has the coldest end.\""
	, "-July, 2010"],
	["\"I'm good, I don't need no help. Cause I'm better off by myself then to start over with somebody else.\""
	, "-Twitter @Drake, 2011"],
	["\"Jealousy is just love and hate at the same time.\""
	, "-Twitter Over My Dead Body, 2011"],
	["\"I got an email today/Kind of thought that you forgot about me/But I want to hit you back to say/Just like you, I get lonely.\""
	, "-I Get Lonely Too, 2010"],
	["\"You could have my heart or we could share it like the last slice.\""
	, "-Best I Ever Had, 2009"],
	["\"I know you always be lying when you be leaving, going to visit family, promise me you ain't cheating.\""
	, "-Deceiving, 2009"],
	["\"I need you to rescue me from my destiny/I'm trying to live right and give you whatever's left of me.\""
	, "-Alicia Keys f/ Drake \"Unthinkable (Remix)\", 2010"],
	["\"Is anything I'm doing brand new?\""
	, "-Brand New, 2009"],
	["\"But it's too late, cause I'm already yours/You just gotta promise me, hearts won't break, and end up like before.\""
	, "-Jamie Foxx f/ Drake \"Fall For Your Type\", 2010"],
	["\"I'm going through her phone if she goes to the bathroom and her purse right there. I don't trust these hoes, at all.\""
	, "-Lord Knows 2011"],
	["\"You telling me it's only been a couple other people that you've been with/I'ma trust you, I'ma give you the benefit of the doubt, and I'ma love you/You can even call me daddy, give you someone to look up to.\""
	, "-Practice, 2011"],
	["\"I just hate sleeping alone.\""
	, "-Hate Sleeping Alone, 2011"],
	["\"I tried to keep us together, you were busy keeping secrets\""
	, "-Karaoke, 2010"],
	["\"If you just give tonight to me/I promise my hands are safe.\""
	, "-On My Way, 2011"],
	["\"They keep telling me don't save you/If I ignore all that advice, and something isn't right/Then who will I complain to?\""
	, "-Drake f/ Lil Wayne & Andre 3000 \"The Real Her\", 2011"],
	["\"When the party's over, just don't forget me.\""
	, "-Take Care, 2011"],
	["\"I never had you, although I would be glad to/I'd probably go and tattoo, your name on my heart.\""
	, "-Houstatlantavegas, 2009"],
	["\"Damn, is it the Fall?/Time for me to revisit the past, there's women to call.\""
	, "-HYFR, 2011"],
	["\"I realize I waited too long, but please don't move on/You don't need no one else.\""
	, "-Sooner Than Later, 2009"],
	["\"Cry if you need to, but I can't stay to watch you, that's the wrong thing to do.\""
	, "Drake f/ Stevie Wonder \"Doing It Wrong\", 2011"]
	);
//image pool, [img file, quote position]
var drakeImgs = Array(["image1.jpg","left"],["image2.jpg", "center"], ["image3.jpg","right"],["image4.jpg","right"], ["image5.jpg","right"],["image6.jpg","right"],["image7.jpg","left"]
						,["image8.jpg","right"],["image9.jpeg","right"],["image10.jpg","right"],["image11.jpg","left"],["image12.png","left"],["image13.jpg","right"],["image14.jpg","left"]
						,["image15.jpg","center"],["image16.jpg","center"],["image17.jpg","left"],["image18.jpg","center"],["image19.png","left"],["image20.jpg","left"]
						,["image21.jpg","right"],["image22.jpg","right"],["image23.jpg","left"],["image24.jpg","center"],["image25.jpg","center"],["image26.jpg","center"]
						,["image27.jpg","right"],["image28.jpg","left"],["image29.jpg","left"],["image30.jpg","center"],["image31.jpg","center"])
//shuffles img and quote arrays on load
window.onload = shuffle(drakeQuotes);
window.onload = shuffle(drakeImgs);

//runs on button click, calls img/qutoe change fxns
function newQuote(){
	changeQuote();
	changeImage();
}

var currentIndex = 0;
function changeQuote(){ //steps through shuffled array, resulting in unique sequence each time
	var quoteText = document.getElementById("largetext");
	var smallText = document.getElementById("smalltext")
	if (currentIndex < drakeQuotes.length){ 
		quoteText.innerHTML = drakeQuotes[currentIndex][0];
		smallText.innerHTML = drakeQuotes[currentIndex][1];
		currentIndex+=1;
	}else{ //once array is iterated through, reshuffles and calls changeQuote(), resets count
		shuffle(drakeQuotes);
		currentIndex = 0;
		changeQuote();
	}
}

var imgIndex = 0; //same fxn as changeQuote(), but for imgs
function changeImage(){ //decide to have first click be Take Care or shuffle immediately
	if (imgIndex < drakeImgs.length){
		document.body.style.backgroundImage="url(images/" + drakeImgs[imgIndex][0] + ")";
		formatText(drakeImgs[imgIndex][1]); //changes css formatting for quote/button
		imgIndex += 1;
	}
	else{
		shuffle(drakeImgs);
		imgIndex = 0;
		changeImage();
	}
}

function formatText(str){
	if (str === "left"){
		document.getElementById("main").setAttribute("class" , "left");
		document.getElementById("generator").setAttribute("class" , "left");
	}
	if (str === "center"){
		document.getElementById("main").setAttribute("class" , "center");
		document.getElementById("generator").setAttribute("class" , "buttoncenter");
	}
	if (str === "right"){ //is == "right"
		document.getElementById("main").setAttribute("class" , "right");
		document.getElementById("generator").setAttribute("class" , "right");
	}
}

//shuffle the array only when all indexes have been iterated through
//iterate through every item on click
// after array is empty? re shuffle and iterate through again

function shuffle(array) { // Fisher-Yates Shuffle formula
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
