var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else if (window.matchMedia("(max-width: 700px)").matches){
    document.getElementById("navbar").style.top = "-90px";
  } else {
    document.getElementById("navbar").style.top = "-145px";
  }
  prevScrollpos = currentScrollPos;
}

console.log("Hello");