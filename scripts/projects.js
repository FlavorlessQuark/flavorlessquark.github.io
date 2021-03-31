// get featured projects from https://gh-pinned-repos-5l2i19um3.vercel.app/?username=FlavorlessQuark
// Parse as JSON : owner, repo, link, description, language, stars

var angle = 0;
function galleryspin(sign) {
	if (!window.jQuery)
	{
		alert("jQuery failed to load. Please restart the page. If the problem persists please contact me");
	}
	spinner = document.querySelector(".fshow");
	angle += (60 * sign);

	$(spinner).css({
	"-webkit-transform": "rotateY("+ angle + "deg)",
	"-moz-transform": "rotateY("+ angle + "deg)",
	"-o-transform": "rotateY("+ angle + "deg)",
	"transform": "rotateY("+ angle + "deg)"
  });
}

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
	  console.log("Status", status);
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

document.addEventListener('readystatechange', event => {

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...)
    if (event.target.readyState === "complete")
	{
        // alert("hi 2");

		console.log("Hi");
		getJSON('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=FlavorlessQuark',
		function(err, data)
		{
			if (err !== null)
				alert('Something went wrong: ' + err);
			for (var i = 0; i < data.length; i += 1)
			{
			var p = document.getElementById("fd_" + (i + 1));
			var l = document.getElementById("l" + (i + 1));
			var img = document.getElementById("img" + ( i + 1));

				p.innerHTML = data[i].repo ;
				l.href = data[i].link;
				img.src = "https://raw.githubusercontent.com/" + data[i].owner + "/" + data[i].repo +"/master/Ressources/icon.png";
			}
		});
	}
});

