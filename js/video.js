var video;
var play_speed;


window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	play_speed = video.playbackRate * 0.9
	console.log("New speed is " + play_speed);
	video.playbackRate = play_speed;
});
document.querySelector("#faster").addEventListener("click", function() {
	play_speed = video.playbackRate * (1/0.9)
	console.log("New speed is " + play_speed);
	video.playbackRate = play_speed;
});

document.querySelector("#skip").addEventListener("click", function() {
	let current_time;
	current_time = video.currentTime + 5
	console.log("Current location " + current_time);
	video.currentTime = current_time;
	video.loop = true
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	} else {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}

});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	let volume = this.value / 100
	console.log(volume);
	video.volume = volume;
	document.querySelector("#volume").innerHTML = volume * 100 + "%";

});

document.querySelector("#old").addEventListener("click", function() {
  	video.classList.add("oldTime");
})

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
})