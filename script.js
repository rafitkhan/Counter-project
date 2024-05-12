let result = document.querySelectorAll('.result')
let buttonTop = document.querySelector('.buttonTop')
let arr = Array.from(result)

buttonTop.addEventListener('click',()=>{

arr.map((item)=>{
    let i = 0
    let count = ()=>{
        i++
        item.innerHTML = i + '+'
        if(item.dataset.number == i){
            clearInterval(stop)

        }
    }
    let stop = setInterval(()=>{
        count()
    },3)
})


})

