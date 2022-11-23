const btnIn = document.getElementById("btnIn");
const txtIn = document.getElementById("txtIn");
const lists = document.getElementById("lists");

btnIn.onclick = () =>{
  lists.innerHTML += 
  ` <div id="list">しなければならないこと<br>${ txtIn.value }</div> `;
}
