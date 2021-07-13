const heading = document.getElementById('hello')
const heading2 = document.getElementsByClassName('h2-class')
// const heading2 = document.querySelector('#h2-id')


const allList = document.querySelectorAll('h2')


setTimeout(() => {
  addStylesTo(heading)
}, 2000)


setTimeout(() => {
  addStylesTo(allList)
}, 3000)


function addStylesTo(node) {
    node.textContent = 'I now learning DOM JS'
    node.style.color = 'purple'
    node.style.backgroundColor = 'yellow'
    node.style.padding = '70px'
    node.style.textAlign = 'center'

    
}










