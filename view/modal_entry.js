var modal = document.getElementById("entry_modal");
var entry = document.getElementById("hades");
var span = document.getElementsByClassName("close")[0];

entry.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}
  
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
} 