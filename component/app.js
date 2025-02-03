function Menu(e){
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[60px]'), list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[60px]'), list.classList.remove('opacity-100'));
}