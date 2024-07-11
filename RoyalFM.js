/*Computer Engineering Student Teaching l self to code my first projects*/

/*Modal show, hides the modal while modal hide shows the modal*/
//$(document).ready(function() 
//{ 
//$("#myModal").modal("hide"); 
//}); 

//callback function on form submission
$(document).ready(function(){
$('form').bind('submit', function(event){
alert ('Content Submited');
});
});

function linkWikipedia(){
open("https://salmandascript.github.io/LinkWikipedia-/");
}

function seer(){
open("https://salmandascript.github.io/Seer/");
}

function africaOnline(){
open("https://salmandascript.github.io/AfricaOnline/");
}

function royalFM(){
open("https://salmandascript.github.io/RoyalFM/");
}

function programming(){
open("https://salmandascript.github.io/SoftwareService/");
}

function salmandaMusiq(){
open("https://salmandascript.github.io/Salmandamusiq/");
}

function newsChannel(){
open("https://salmandascript.github.io/NewsChannel/");
}

function movieChannel(){
open("https://salmandascript.github.io/MovieChannel/");
}

//function to open contacts
function contact(){
open("https://salmandascript.github.io/AboutSalmanda/contact.html");
}

//function to open Terms of service 
function Service(){
open("https://salmandascript.github.io/AboutSalmanda/Service.html");
}

//function to open About
function about(){
open("https://salmandascript.github.io/AboutSalmanda/about.html");
}

//function for button color
function salmandai(){
document.getElementById ("demoi"). style. color ="white";

document.getElementById ("demoi"). style. fontweight ="bold";

document.getElementById
 ("demoi"). style. fontsize ="30%";

document.getElementById
 ("demoi"). style. background ="maroon";
}


function salmandaii(){
document.getElementById ("demoii"). style. color ="white";

document.getElementById ("demoii"). style. fontweight ="bold";

document.getElementById
 ("demoii"). style. fontsize ="30%";

document.getElementById
 ("demoii"). style. background ="maroon";
}


function salmandaiii(){
document.getElementById ("demoiii"). style. color ="white";

document.getElementById ("demoiii"). style. fontweight ="bold";

document.getElementById
 ("demoiii"). style. fontsize ="30%";

document.getElementById
 ("demoiii"). style. background ="maroon";
}


function salmandaiv(){
document.getElementById ("demoiv"). style. color ="white";

document.getElementById ("demoiv"). style. fontweight ="bold";

document.getElementById
 ("demoiv"). style. fontsize ="30%";

document.getElementById
 ("demoiv"). style. background ="maroon";
}

function salmandav(){
document.getElementById ("demov"). style. color ="white";

document.getElementById ("demov"). style. fontweight ="bold";

document.getElementById
 ("demov"). style. fontsize ="30%";

document.getElementById
 ("demov"). style. background ="maroon";
}

function salmandavi(){
document.getElementById ("demovi"). style. color ="white";

document.getElementById ("demovi"). style. fontweight ="bold";

document.getElementById
 ("demovi"). style. fontsize ="30%";

document.getElementById
 ("demovi"). style. background ="maroon";
}

function salmandavii(){
document.getElementById ("demovii"). style. color ="white";

document.getElementById ("demovii"). style. fontweight ="bold";

document.getElementById
 ("demovii"). style. fontsize ="30%";

document.getElementById
 ("demovii"). style. background ="maroon";
}

function salmandaviii(){
document.getElementById ("demoviii"). style. color ="white";

document.getElementById ("demoviii"). style. fontweight ="bold";

document.getElementById
 ("demoviii"). style. fontsize ="30%";

document.getElementById
 ("demoviii"). style. background ="maroon";
}

function salmandaix(){
document.getElementById ("demoix"). style. color ="white";

document.getElementById ("demoix"). style. fontweight ="bold";

document.getElementById
 ("demoix"). style. fontsize ="30%";

document.getElementById
 ("demoix"). style. background ="maroon";
}

function salmandax(){
document.getElementById ("demox"). style. color ="white";

document.getElementById ("demox"). style. fontweight ="bold";

document.getElementById
 ("demox"). style. fontsize ="30%";

document.getElementById
 ("demox"). style. background ="maroon";
}

function salmandaxi(){
document.getElementById ("demoxi"). style. color ="white";

document.getElementById ("demoxi"). style. fontweight ="bold";

document.getElementById
 ("demoxi"). style. fontsize ="30%";

document.getElementById
 ("demoxi"). style. background ="maroon";
}

function salmandaxii(){
document.getElementById ("demoxii"). style. color ="white";

document.getElementById ("demoxii"). style. fontweight ="bold";

document.getElementById
 ("demoxii"). style. fontsize ="30%";

document.getElementById
 ("demoxii"). style. background ="maroon";
}

function salmandaxiii(){
document.getElementById ("demoxiii"). style. color ="white";

document.getElementById ("demoxiii"). style. fontweight ="bold";

document.getElementById
 ("demoxiii"). style. fontsize ="30%";

document.getElementById
 ("demoxiii"). style. background ="maroon";
}

function salmandaxiiii(){
document.getElementById ("demoxiiii"). style. color ="white";

document.getElementById ("demoxiiii"). style. fontweight ="bold";

document.getElementById
 ("demoxiiii"). style. fontsize ="30%";

document.getElementById
 ("demoxiiii"). style. background ="maroon";
}

function salmandaxv(){
document.getElementById ("demoxv"). style. color ="white";

document.getElementById ("demoxv"). style. fontweight ="bold";

document.getElementById
 ("demoxv"). style. fontsize ="30%";

document.getElementById
 ("demoxv"). style. background ="maroon";
}

function salmandaxvi(){
document.getElementById ("demoxvi"). style. color ="white";

document.getElementById ("demoxvi"). style. fontweight ="bold";

document.getElementById
 ("demoxvi"). style. fontsize ="30%";

document.getElementById
 ("demoxvi"). style. background ="maroon";
}

function salmandaxvii(){
document.getElementById ("demoxvii"). style. color ="white";

document.getElementById ("demoxvii"). style. fontweight ="bold";

document.getElementById
 ("demoxvii"). style. fontsize ="30%";

document.getElementById
 ("demoxvii"). style. background ="maroon";
}

function salmandaxviii(){
document.getElementById ("demoxviii"). style. color ="white";

document.getElementById ("demoxviii"). style. fontweight ="bold";

document.getElementById
 ("demoxviii"). style. fontsize ="30%";

document.getElementById
 ("demoxviii"). style. background ="maroon";
}

function callback2(){
  alert ("You will be subscribed now");
  }

function callback(){
  alert ("Your Data will be submited now");
  }
  
  //function to set cookie
  function setCookie(){
  var now = new Date ();
  now.setMonth (now. getMonth() -3);
  
  cookievalue = escape (document.MyForm.listener.value) +";"
  
  document.cookie="name=" + cookievalue;
  document.cookie="expires=" + now.toUTCString() + ";"
  
  document.write("Setting Listener : "+ "name=" + cookievalue);
  }

$(document).ready (function(){
$("input").focus(function(){
  $(this).css("background-color","chocolate");
});
});

/*form validation*/
  /*function validateName(){
  var Name =document.MyForm.Name.value;
  var Pname =document.MyForm.Pname.value;
  var Song =document.MyForm.Song.value;
  
  if ( Name==null || Name=="" ){
  alert( "Name Can't be empty" );
  return false;
  }
  else if( Pname==null || Pname==""){
  alert( "Project Name can't be empty" );
  return false;
  }
  else if( Song==null || Song=="" ){
  alert( "You haven't selected any Song" );
  return false;
  }
  }*/

$(document).ready (function(){
$("input").blur(function(){
  $(this).css("background-color","maroon");
});
});

/*Jquery function to animate heading*/
$(document).ready(function(){
$("h6").animate({
color: "white"
});
});

/*function to control image1*/
function salmanda() {
document.getElementById("image").src="electron.gif";
}

/*function to control image2*/
function salmanda2() {
document.getElementById ("image").src="Royal.png";
}

/*function to control modal*/
$(document).ready(function() 
{ 
$("#myModal").modal("show"); 
}); 

/*code to control audio files*/
var _audio = document.getElementById("idAudio");

  var _songList = [
  {
  url: "https://salmandascript.github.io/RoyalFMPodcast/RoyalFMPodcast1.mp3/"
  },
  
  {
  url: "https://salmandascript.github.io/RoyalFMPodcast/RoyalFMPodcast2.mp3/"
  },
  
   {
  url:  "https://salmandascript.github.io/RoyalFMPodcast/RoyalFMPodcast3.mp3/"
  },
  
  {
  url:"https://salmandascript.github.io/RoyalFMPodcast/RoyalFMPodcast4.mp3/"
  },
  
  {
   url: "https://salmandascript.github.io/RoyalFMPodcast/RoyalFMPodcast5.mp3/"
  },
  
  {
  url:"https://salmandascript.github.io/RoyalFMPodcast/RoyalFMPodcast6.mp3/"
  },
  
  {
  url: "https://salmandascript.github.io/RoyalFMPodcast/RoyalFMPodcast7.mp3/"
  },
  
   {
  url: "https://salmandascript.github.io/RoyalFMPodcast/RoyalFMPodcast8.mp3/"
  },
  ];

/*function to control audio play*/
  _currentSong = 0;
  _audio.src = _songList[_currentSong].url;

  function playSong()
  {
   _audio.play();
  }

  function pauseSong()
  {
   _audio.pause();
  }

  function stopSong()
  {
   _audio.pause();
   _audio.currentTime = 0;
  }

  function nextSong()
  {
   if (_currentSong == _songList.length - 1)
   {
    alert("End of the Programme playlist, please play from first");
    _currentSong = 0;
   }
   else
   {
    _currentSong++;
   }
   _audio.src = _songList[_currentSong].url;
   _audio.play();
  }

  function prevSong()
  {
   if (_currentSong == 0)
   {
    alert("Starting of the Programme playlist, you can play from last.");
    _currentSong = _songList.length - 1;
   }
   else
   {
    _currentSong--;
   }
   _audio.src = _songList[_currentSong].url;
   _audio.play();
  }

  _audio.addEventListener("timeupdate", function()
  {

   var totDuration = Math.floor(_audio.duration);
   durationR.max = totDuration;

   var currentTime = Math.floor(_audio.currentTime);
   durationR.value = currentTime;

   lblDuration.innerText = currentTime + "/" + totDuration;
  });

  function seekSong()
  {
   var duration = durationR.value;
   _audio.currentTime = duration;
  }

  function changeVolume()
  {
   _audio.volume = idVolume.value;

  }
  
  