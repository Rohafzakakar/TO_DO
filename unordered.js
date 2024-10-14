
function rk(){
    const taskinput=document.getElementById('task')

    const tasklist=document.getElementById('tasklist')

const ili =document.createElement('li')
const spe=document.createElement('span')
spe.className='fa fa-trash'
ili.textContent=taskinput.value
spe.addEventListener('click', function() {
  tasklist.removeChild(ili)
})
ili.appendChild(spe)
tasklist.appendChild(ili)
taskinput.value=""
}