/*code to control audio files*/
var audio = document.getElementById("idAudio2");

  var songList = [
  {
  url: "RoyalFMPodcast/RoyalFMPodcast1.mp3/"
  },
  ];

/*function to control audio play*/
  currentSong = 0;
  audio.src = songList[currentSong].url;

  function playSong2()
  {
   audio.play();
  }

  function pauseSong2()
  {
   audio.pause();
  }

  function stopSong2()
  {
   audio.pause();
   audio.currentTime = 0;
  }

  function nextSong2()
  {
   if (currentSong == songList.length - 1)
   {
    alert("End of the Programme playlist, please play from first");
    currentSong = 0;
   }
   else
   {
    currentSong++;
   }
   audio.src = songList[currentSong].url;
   audio.play();
  }

  function prevSong()
  {
   if (currentSong == 0)
   {
    alert("Starting of the Programme playlist, you can play from last.");
    currentSong = songList.length - 1;
   }
   else
   {
    currentSong--;
   }
   audio.src = songList[currentSong].url;
   audio.play();
  }