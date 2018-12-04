
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var viewBut = document.getElementById('viewBut');
var viewBut2 = document.getElementById('viewBut2');
var viewBut3 = document.getElementById('viewBut3');
var viewBut4 = document.getElementById('viewBut4');
var viewBut5 = document.getElementById('viewBut5');
var viewBut6 = document.getElementById('viewBut6');
var modalImg = document.getElementById("frame");

function openImg() {
    modal.style.display = "block";
    modalImg.src = "images/work1.png";
}

viewBut.addEventListener('click',openImg,false);

function openImg2() {
    modal.style.display = "block";
    modalImg.src = "images/work2.png";
}

viewBut2.addEventListener('click',openImg2,false);


function openImg3() {
    modal.style.display = "block";
    modalImg.src = "images/work3.png";
}

viewBut3.addEventListener('click',openImg3,false);


function openImg4() {
    modal.style.display = "block";
    modalImg.src = "images/work4.png";
}

viewBut4.addEventListener('click',openImg4,false);


function openImg5() {
    modal.style.display = "block";
    modalImg.src = "images/work5.png";
}

viewBut5.addEventListener('click',openImg5,false);


function openImg6() {
    modal.style.display = "block";
    modalImg.src = "images/work6.png";
}

viewBut6.addEventListener('click',openImg6,false);

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
function closeBox(){
    modal.style.display = "none";
}

close.addEventListener('click',closeBox,false)