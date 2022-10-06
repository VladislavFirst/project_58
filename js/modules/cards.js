function cards(){
        //используем классы для карточек

        class MenuCard {
            constructor(src, alt, title, description, price, parentSelector, ...classes){
                this.src = src;
                this.alt = alt;
                this.title = title;
                this.description = description;
                this.price = price;
                this.classes = classes;
                this.parent = document.querySelector(parentSelector);
                this.transfer = 27;
                this.changeToUAH();
            }
    
            changeToUAH(){
                this.price = this.price * this.transfer;
            }
    
            render(){
                const element = document.createElement('div');
     
                if (this.classes.length === 0){
                    this.element = 'menu__item';
                    element.classList.add(this.element);
                } else {
                    this.classes.forEach(className => element.classList.add(className));
                }
    
                element.innerHTML = `
                            <img src=${this.src} alt=${this.alt}>
                            <h3 class="menu__item-subtitle">${this.title}</h3>
                            <div class="menu__item-descr">${this.description}</div>
                            <div class="menu__item-divider"></div>
                            <div class="menu__item-price">
                                <div class="menu__item-cost">Цена:</div>
                                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                            </div>
                `;
                this.parent.append(element);
            }
    
    
        }
    
        // const div = new MenuCard();
        // div.parent();
    //использование мтеода и обьекта на месте, чтобы не делать лишнии манипуляции
        const getResources  = async (url,  data) => {
            const res = await fetch(url);
    
            if (!res.ok){
                throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }
    
            return await res.json();
        };
    
    //использование сторонней библиотеки axios
        axios.get('http://localhost:3000/menu')
            .then(data => {
                       data.data.forEach(({img, alt, title, description, price,})=> {
                new MenuCard(img, alt, title, description, price, '.menu .container').render();
                         });
            });
    
    
}

module.exports = cards;