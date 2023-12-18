const sortBtns = document.querySelectorAll('.filter-menu > *');
const sortItems = document.querySelectorAll('.filter-item > *');

sortBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    sortBtns.forEach(btn => btn.classList.remove('current'));
    this.classList.add('current');

    const targetData = this.getAttribute('data-target');

    sortItems.forEach(item => {
      item.classList.remove('active');
      item.classList.add('delete');

      if (item.getAttribute('data-item') === targetData || targetData === 'all') {
        item.classList.remove('delete');
        item.classList.add('active');
      }
    });
  });
});