document.body.style.webkitTransform =  'scale(1)';
document.body.style.msTransform =   'scale(100)';
document.body.style.transform = 'scale(1)';
document.body.style.zoom = screen.logicalXDPI / screen.deviceXDPI;

let main = document.getElementById('main-content')
let title = document.getElementById('main-title')
let about = document.getElementById('about-main')
let projects = document.getElementById('projects-main')
let contact = document.getElementById('contact-main')

// displayPositions = () => {
//   console.log("main", main.scrollTop, main.offsetHeight, main.scrollHeight)
//   console.log("title", title.scrollTop, title.offsetHeight, title.scrollHeight)
//   console.log("about", about.scrollTop, about.offsetHeight, about.scrollHeight)
//   console.log("projects", projects.scrollTop, projects.offsetHeight, projects.scrollHeight)
//   console.log("contact", contact.scrollTop, contact.offsetHeight, contact.scrollHeight)
//   console.log(" ")
// }

scrolling = (position) => {
  switch (position) {
    case 'about':
      main.scrollTo({
        top: (title.offsetHeight),
        behavior: 'smooth'
      })
      break
    case 'projects':
      main.scrollTo({
        top: (title.offsetHeight + about.offsetHeight),
        behavior: 'smooth'
      })
      break
    case 'contact':
      main.scrollTo({
        top: (title.offsetHeight + about.offsetHeight + projects.offsetHeight),
        behavior: 'smooth'
      })
      break
  }
}

addEvent = (title, scrollingTo) => {
  title.getElementById('arrow').addEventListener("click", () => scrolling(scrollingTo))
}

window.addEventListener("load", function() {
  let svgTitle = document.getElementById('title-arrow').contentDocument;
  let svgAbout = document.getElementById('about-arrow').contentDocument;
  let svgWork = document.getElementById('projects-arrow').contentDocument;

  addEvent(svgTitle, 'about')
  addEvent(svgAbout, 'projects')
  addEvent(svgWork, 'contact')
})
