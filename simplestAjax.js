document.querySelector('.madcase-form').addEventListener('submit', function(event){
	event.preventDefault();

	var request = new XMLHttpRequest();
	var FD  = new FormData( document.querySelector('.madcase-form') );

	request.open('POST', '/mail.php', true);
	// request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

	request.onload = function() {
	  if (this.status >= 200 && this.status < 400) {
	    // Success!
	    console.log( this.response );
	  } else {
	    // We reached our target server, but it returned an error

	  }
	};

	request.onerror = function() {
	  // There was a connection error of some sort
	};

	request.send(FD);
});
