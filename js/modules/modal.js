function modal(){
       //modal window

       const modalTrigger = document.querySelectorAll('[data-modal]'),
       modal = document.querySelector('.modal');

 function openModal(){
     modal.classList.add('show');
     modal.classList.remove('hide');
     // modal.classList.toggle('show');
     document.body.style.overflow = 'hiden'; //отмена прокрутки страницы, когда открыто модалное окно
     clearInterval(modalTimerId); //если пользователь сам нажал на модальное
 }


 modalTrigger.forEach(btn => {
     btn.addEventListener('click', openModal);
 });

 function closeModal(){
     modal.classList.add('hide');
     modal.classList.remove('show');
     // modal.classList.toggle('show');
     document.body.style.overflow = '';
 }


 //hпи кллике на подложку закрывается модальное окно
 modal.addEventListener('click', (e)=> {
     if (e.target === modal || e.target.getAttribute('data-close') == ''){
         closeModal();
     }
 });

 //закрытие при нажатие на esc
 document.addEventListener('keydown', (e)=>{
     if (e.code === "Escape" && modal.classList.contains('show')){
         closeModal();
     }
 });

 //открытие модального окна автоматически через некоторок
 const modalTimerId = setTimeout(openModal,5000);

 function showModalByScroll(){
     if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1){
         openModal();
         window.removeEventListener('scroll', showModalByScroll);//удаляем обработчик, чтобы повторно не открывалось при пролистовании вниз
     }
 }
 window.addEventListener('scroll', showModalByScroll); 
}

module.exports = modal;