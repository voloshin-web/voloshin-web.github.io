window.addEventListener('DOMContentLoaded', () => {
    // catalog 
    const sort = document.querySelector('.catalog .sort'), 
          filters = document.querySelector('.catalog .filters'),
          overlay = document.querySelector('.overlay'),
          filtersTitle = document.querySelectorAll('.filters-title');
    console.log(filtersTitle);

    function openCatalogDetails(overlay, filterSelector, activeClass) {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        document.querySelector(filterSelector).classList.add(activeClass);
    }

    function closeCatalogDetails(overlay, filterSelector, activeClass) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';

        document.querySelector(filterSelector).classList.remove(activeClass);
    }

   

    filters.addEventListener('click', () => {
        openCatalogDetails(overlay, '.catalog__list', 'catalog__list_active');
    });

    sort.addEventListener('click', () => {
        openCatalogDetails(overlay, '.catalog-content__header', 'catalog-content__header_active' );
    });

    overlay.addEventListener('click', () => {
        if (document.querySelector('.catalog__list').classList.contains('catalog__list_active')) {
            closeCatalogDetails(overlay, '.catalog__list', 'catalog__list_active');
        }
        else {
            closeCatalogDetails(overlay, '.catalog-content__header', 'catalog-content__header_active');
        }
    });

    filtersTitle.forEach(title => {
        title.addEventListener('click', (e) => {
            const target = e.target;

            console.log(target);

            if (target.classList.contains('catalog__list-title')) {
                closeCatalogDetails(overlay, '.catalog__list', 'catalog__list_active');
            } else if (target.classList.contains('catalog-content__header-title')) {
                closeCatalogDetails(overlay, '.catalog-content__header', 'catalog-content__header_active');
            }
        });
    });
});