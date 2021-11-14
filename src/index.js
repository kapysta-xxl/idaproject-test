import './index.scss';


(() => {
    let filter = document.querySelector('.filter'),
        name = filter.querySelector('.filter__name');

    filter.addEventListener('click', function({ target }) {
        if(filter.classList.contains('filter--open') && target.tagName === 'LI'){
            [name.innerHTML, target.innerHTML] = [target.innerHTML, name.innerHTML] 
        }
        this.classList.toggle('filter--open')
    });
})();
