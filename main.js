// Get the modal
var modal = document.getElementById("img-modal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("stylesheet");
var modalImg = document.getElementById("img-stylesheet");
var captionText = document.getElementById("caption1");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}



// Get the modal
var modal = document.getElementById("img-modal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("journeymap");
var modalImg = document.getElementById("img-journeymap");
var captionText = document.getElementById("caption2");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


// Get the modal
var modal = document.getElementById("img-modal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("usabilitytest");
var modalImg = document.getElementById("img-usabilitytest");
var captionText = document.getElementById("caption3");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}





