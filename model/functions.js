const modal = document.getElementById('entry_modal')
const entry = document.getElementById('hades')
const span = document.getElementsByClassName('close')[0]

entry.onclick = function () {
  modal.style.display = 'block'
}

span.onclick = function () {
  modal.style.display = 'none'
}

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
}
