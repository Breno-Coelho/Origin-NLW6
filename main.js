/*Abre e fecha o menu, vulgo toggle*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*Esconde o menu quando algum item é clicado*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*mudar o header quanto tiver scroll */
function changeHeaderScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/*Slides dos testemunhos */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/*scrollReveal: mostra os elementos devagarinho conforme vai descendo a página*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 800,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
`,
  { interval: 100 }
)

/*Botão para voltar para o topo */
function backToTop() {
  const button = document.querySelector('.back-to-top')

  if (window.scrollY > 1060) {
    button.classList.add('show')
  } else {
    button.classList.remove('show')
  }
}

/*Listener de Scroll*/
window.addEventListener('scroll', function () {
  changeHeaderScroll()
  backToTop()
})
