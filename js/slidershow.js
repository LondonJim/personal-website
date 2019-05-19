let imageNumber = 0
let images = [1,2,3,4,5,6]
let imageTitle = ["Trick or Eat Brains", "Chitter Twitter",
                  "Personal Website", "Binary Steganography",
                  "User API", "News To Petition"]

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
  changeProjectText()
}

checkImageNumber = (direction) => {
  if (direction === 'next') imageNumber++
  if (direction === 'prev') imageNumber--
  if (imageNumber>5) imageNumber = 0
  if (imageNumber<0) imageNumber = 5
  changeSliderDetails()
}

changeProjectText = () => {
  let xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

  xhr.open('get', `../assets/slideshow/projects-html/project-${imageNumber + 1}.html`, true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
          document.getElementById("project-text").innerHTML = xhr.responseText;
      }
  }
  xhr.send();
}
