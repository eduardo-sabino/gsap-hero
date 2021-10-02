import { gsap } from './node_modules/gsap/index.js'

window.toggleListItemClass = function (e){
    const list = document.getElementsByTagName('ul').item(0)
    const items = list.getElementsByTagName('li')
    const clickedItem = e.currentTarget
    const checkbox = document.getElementById("icon")
    displayNavBar(checkbox)
    removeClassFromLinks(items)
    addClassToLink(clickedItem)
}
function displayNavBar(checkbox){
  checkbox.checked = false
}
function removeClassFromLinks(items){
    for (let i = 0; i < items.length; i++) {
        let link = items.item(i).getElementsByTagName('a').item(0)
        link.className = ""
    }
}
function addClassToLink(item){
    const link = item.getElementsByTagName('a').item(0)
    link.className = "active"
}

gsap.from('header', { duration: 0.6, ease: 'power2.out', y: -60})
gsap.from('.hero-content', { duration: 0.6, ease: 'power2.out', x: -50, opacity: 0, delay: 0.5})
gsap.from('.illustration', { duration: 0.6, ease: 'power2.out', opacity: 0, delay: 0.9})
gsap.to("#red-car",{
    duration: 8,
    x: 1960,
    y: 439,
    easy: 'none',
    repeat: -1,
    repeatDelay: .01,
})

gsap.to("#blue-car",{
    duration: 6,
    x: 612,
    y: 210,
    easy: 'none',
    repeat: -1,
    repeatDelay: .01,
})

gsap.to("#yellow-car",{
    duration: 8,
    x: 884,
    y: 1114,
    easy: 'none',
    repeat: -1,
    repeatDelay: .01,
})
