const btnValue = document.getElementById('btn');
const textValue = document.getElementById('text');

btnValue.addEventListener('click', ()=>{
  textValue.textContent = 'ボタンをクリックしました';
});