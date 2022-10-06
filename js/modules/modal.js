function openModal(modalSelector, modalTimerId){
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    // modal.classList.toggle('show');
    document.body.style.overflow = 'hiden'; //отмена прокрутки страницы, когда открыто модалное окно
    console.log(modalTimerId)
    if (modalTimerId){
        clearInterval(modalTimerId); //если пользователь сам нажал на модальное
    }
    
}

function closeModal(modalSelector){
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    // modal.classList.toggle('show');
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId){
       //modal window

       const modalTrigger = document.querySelectorAll(triggerSelector),
       modal = document.querySelector(modalSelector);

 

 modalTrigger.forEach(btn => {
     btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
 });



 //hпи кллике на подложку закрывается модальное окно
 modal.addEventListener('click', (e)=> {
     if (e.target === modal || e.target.getAttribute('data-close') == ''){
         closeModal(modalSelector);
     }
 });

 //закрытие при нажатие на esc
 document.addEventListener('keydown', (e)=>{
     if (e.code === "Escape" && modal.classList.contains('show')){
         closeModal(modalSelector);
     }
 });



 function showModalByScroll(){
     if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1){
         openModal(modalSelector, modalTimerId);
         window.removeEventListener('scroll', showModalByScroll);//удаляем обработчик, чтобы повторно не открывалось при пролистовании вниз
     }
 }
 window.addEventListener('scroll', showModalByScroll); 
}

export default modal;
export {closeModal};
export {openModal};