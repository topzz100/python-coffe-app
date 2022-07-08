const navigation = document.querySelector('.nav-links');
const menu = document.querySelector('.menu-bar');
const searchBar = document.querySelector('.search-bar');
const searchIcon = document.querySelector('.search-icon');
const cartCon = document.querySelector('.cart-container');
const cartIcon = document.querySelector('.cart-icon');
const header = document.querySelector('header')


 menu.addEventListener('click', () => {
   navigation.classList.toggle('active');
   searchBar.classList.remove('active');
   cartCon.classList.remove('active');
   
 });

searchIcon.addEventListener('click', () => {
  searchBar.classList.toggle('active');
  navigation.classList.remove('active')
  cartCon.classList.remove('active');
   
 })

 cartIcon.addEventListener('click', () => {
   cartCon.classList.toggle('active');
   navigation.classList.remove('active')
   searchBar.classList.remove('active');
 })
 
 window.addEventListener('onscroll', () => {
  navigation.classList.remove('active')
  searchBar.classList.remove('active');
   cartCon.classList.remove('active');
 })
 const headerHeight = header.getBoundingClientRect().height;

const scrollLinks = document.querySelectorAll('.scroller')

scrollLinks.forEach(link =>{
  link.addEventListener('click', (e) => {
    const id = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    window.scrollTo({top: element.offsetTop - headerHeight})
    e.preventDefault()
    navigation.classList.remove('active')
    searchBar.classList.remove('active');
     cartCon.classList.remove('active');
  })
})