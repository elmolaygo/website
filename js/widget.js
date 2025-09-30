const lastfmUsername = "alphilaygo";

async function getTrackDetails() {
  const apiUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastfmUsername}&api_key=ed1cd5e371ecb2d3e96319e7340a91ce&format=json`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);

    // Select proper fields for shorter code

    const trackName = json.recenttracks.track[0].name;
    const trackArtist = json.recenttracks.track[0].artist["#text"];
    const trackImage = json.recenttracks.track[0].image[2]["#text"];
    const trackUrl = json.recenttracks.track[0].url;

    // Select placeholders

    const albumArt = document.getElementById("albumArt");
    const songTitle = document.getElementById("songTitle");
    const songArtist = document.getElementById("songArtist");

    // Check string lengths

    const trackNameLength = trackName.length;
    const artistNameLength = trackArtist.length;

    // Make paragraph a marquee if either artist or title is longer than 18 characters so it doesn't word wrap

    if (trackNameLength >= 18) {
      songTitle.outerHTML = `<marquee id="longerSongTitle" class="details song-title"></marquee>`;
      const longerSongTitle = document.getElementById("longerSongTitle");
      longerSongTitle.style.height = "24px";
      longerSongTitle.textContent = trackName;
    } else {
      // Replace title placeholder
      songTitle.textContent = trackName;
    }

    if (artistNameLength >= 18) {
      songArtist.outerHTML = `<marquee id="longerSongArtist" class="details song-title"></marquee>`;
      const longerSongArtist = document.getElementById("longerSongArtist");
      longerSongArtist.style.height = "24px";
      longerSongArtist.textContent = trackArtist;
    } else {
      // Replace artist name placeholder
      songArtist.textContent = trackArtist;
    }

    albumArt.src = trackImage;

    // Make title redirect to track

    songTitle.style.cursor = "pointer";
    songTitle.addEventListener("click", function () {
      window.open(trackUrl, "_blank");
    });

    // Check scrobbling status

    const scrobblingStatusSelector = json.recenttracks.track[0];
    const scrobblingStatus = scrobblingStatusSelector["@attr"].nowplaying;
    const scrobbleStatus = document.getElementById("scrobbleStatus");

    if (scrobblingStatusSelector["@attr"] === undefined) {
      console.log("User is not scrobbling...");
    }

    if (scrobblingStatus === "true") {
      console.log("User is scrobbling...");
      scrobbleStatus.classList.remove("fa-clock-rotate-left");
      scrobbleStatus.classList.add("fa-headphones-simple");
    }
  } catch (error) {
    return;
  }
}

async function getUserDetails() {
  await getTrackDetails();

  const apiUrl =
    "https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=alphilaygo&api_key=ed1cd5e371ecb2d3e96319e7340a91ce&format=json";

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);

    // Select placeholder
    const profileDetails = document.getElementById("profileName");

    // Easier access to json

    const profileName = json.user.name;
    const profileUrl = json.user.url;
    const scrobbleCount = json.user.playcount;

    profileDetails.textContent =
      profileName + " - " + scrobbleCount + " scrobbles";
    profileDetails.style.cursor = "pointer";
    profileDetails.addEventListener("click", function () {
      window.open(profileUrl, "_blank");
    });
  } catch (error) {
    return;
  }
}

// Run after page load

getUserDetails();

// Loop function every 30 seconds

setInterval(getUserDetails, 30000);
