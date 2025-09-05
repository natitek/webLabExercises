var counter = 0;
document.querySelector('#clickBtn').addEventListener('click', ()=>{
    counter++;
    document.querySelector('#counter').innerHTML = counter
})