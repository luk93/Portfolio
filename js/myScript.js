// Get the modal
var modal = document.getElementById("imgModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("project_img1");
var img2 = document.getElementById("project_img2");
var img3 = document.getElementById("project_img3");
var img4 = document.getElementById("project_img4");
var img5 = document.getElementById("project_img5");
var img6 = document.getElementById("project_img6");
var img7 = document.getElementById("project_img7");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img5.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img6.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img7.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
