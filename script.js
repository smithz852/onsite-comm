const pressBtn = document.querySelector('.pressBtn')
const banner = document.querySelector('.name')

pressBtn.addEventListener('click', function(event) {
 if (banner.classList.contains('green')) {
  banner.classList.remove('green')
 } else {
  event.preventDefault() 
  banner.classList.add('green')
 }
  
  
})