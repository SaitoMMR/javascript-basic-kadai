const btnValue = document.getElementById('btn');
const textValue = document.getElementById('text');

btnValue.addEventListener('click', ()=>{
  setTimeout(()=>{
    textValue.textContent ='ボタンをクリックしました';
  },2000);
});