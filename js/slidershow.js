let imageNumber = 0
let images = [1,2,3,4]
let imageTitle = ["Trick or Eat Brains", "Chitter Twitter",
                  "Personal Website", "Binary Steganography"]
let imageText = ["Final project at Makers. Worked in a team using Agile and XP practices to create a frontend web app game. All written with React and tested with Jest/Enzyme and Cypress. Learnt the fundamentals of React, expanding JavaScript knowledge and applied testing principals I had learnt using Jest and Cypress for the first time. Tickets created using waffle.io and CI using Travis. Daily stand ups and two day sprints (12 day project). Mixture of pair and individual programming. Review  each others code on each PR.",
                 "Created over a weekend, my own version of twitter using the knowledge I have learnt so far but also incorporating the use of databases, in this case PostgreSQL.",
                 "On going project using HTML, CSS and JavaScript to create an dynamic and visually pleasing website based on me!",
                 "Currently the text message you add is converted to the character key integer then to binary. The image is broken down into into pixels and then each pixel containing four pieces of information (RGBA) is broken down to binary. One bit at a time from the converted text is inserted into the first bit of the red pixels(at the moment). When reading the image the opposite is essentially done. Unless you knew what to look for there is no way you could tell the message was there. Learning to use canvas and how to manipulate the data. Searching for how to test the loading of a file in Cypress took some research and from online sources."]

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
  document.getElementById('project-text').innerHTML = imageText[imageNumber]
}

checkImageNumber = (direction) => {
  if (direction === 'next') imageNumber++
  if (direction === 'prev') imageNumber--
  if (imageNumber>3) imageNumber = 0
  if (imageNumber<0) imageNumber = 3
  changeSliderDetails()
}
