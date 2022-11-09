const wrap = document.querySelector(".wrap")
console.log(wrap);

const multiplicationTableUl = document.querySelector(".multiplicationTable_ul")


for(let i = 1;i <= 9;i++){
    for(let num = 1; num <= 9;num++){
        multiplicationTableUl.innerHTML += `
        <li class="ans">${i * num}</li>
        `
    }
}