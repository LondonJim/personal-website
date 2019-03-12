let imageNumber = 0
let images = [1,2,3,4]
let imageTitle = ["Trick or Eat Brains", "Chitter Twitter",
                  "Personal Website", "Binary Steganography"]

window.addEventListener("load", function() {
  let prev = document.getElementById('prev')
  let next = document.getElementById('next')

  changeSliderDetails()

  prev.addEventListener("click", () => moveSlide('prev'))
  next.addEventListener("click", () => moveSlide('next'))
})

moveSlide = (direction) => {
  checkImageNumber(direction)
}

changeSliderDetails = () => {
  document.getElementById('slider-image').src = `./assets/slideshow/${images[imageNumber]}.png`
  document.getElementById('project-title').innerHTML = imageTitle[imageNumber]
}

checkImageNumber = (direction) => {
  if (direction === 'next') imageNumber++
  if (direction === 'prev') imageNumber--
  if (imageNumber>3) imageNumber = 0
  if (imageNumber<0) imageNumber = 3
  changeSliderDetails()
}
