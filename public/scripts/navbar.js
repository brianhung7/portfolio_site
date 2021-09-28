var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos && window.matchMedia("(max-width: 700px)").matches) {
    document.getElementById("navbar").style.top = "-80px";
  } else if (prevScrollpos > currentScrollPos){
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-145px";
  }
  prevScrollpos = currentScrollPos;
}

console.log("Hello");