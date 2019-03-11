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

addClickEvent = (title, id, scrollingTo) => {
  title.getElementById(id).addEventListener("click", () => scrolling(scrollingTo))
}

addArrowPointer = (svgFile) => {
  svgFile.getElementById('el_oAMJda4ZC6_an_6JxcnEJeL').style.cursor="pointer"
}

window.addEventListener("load", function() {
  let svgTitle = document.getElementById('title-arrow').contentDocument;
  let svgAbout = document.getElementById('about-arrow').contentDocument;
  let svgWork = document.getElementById('projects-arrow').contentDocument;

  addArrowPointer(svgTitle)
  addArrowPointer(svgAbout)
  addArrowPointer(svgWork)

  addClickEvent(svgTitle, 'arrow', 'about')
  addClickEvent(svgAbout, 'arrow', 'projects')
  addClickEvent(svgWork, 'arrow', 'contact')

  addClickEvent(document, 'about-text-link-1', 'about')
  addClickEvent(document, 'projects-text-link-1', 'projects')
  addClickEvent(document, 'contact-text-link-1', 'contact')

  addClickEvent(document, 'about-text-link-2', 'about')
  addClickEvent(document, 'projects-text-link-2', 'projects')
  addClickEvent(document, 'contact-text-link-2', 'contact')
})
