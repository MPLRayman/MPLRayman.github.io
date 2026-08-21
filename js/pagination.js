(function () {
  'use strict';

  function createButton(label, page, className) {
    var button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.dataset.page = page;
    if (className) button.className = className;
    return button;
  }

  function setupPagination(list, listIndex) {
    var items = Array.prototype.slice.call(list.children);
    var pageSize = parseInt(list.dataset.pageSize, 10) || 5;
    var pageCount = Math.ceil(items.length / pageSize);

    if (pageCount <= 1) return;

    var label = list.dataset.paginationLabel || 'List';
    var nav = document.createElement('nav');
    var status = document.createElement('span');
    var currentPage = 1;

    nav.className = 'list-pagination';
    nav.setAttribute('aria-label', label + ' pages');
    status.className = 'sr-only';
    status.id = 'pagination-status-' + listIndex;
    status.setAttribute('aria-live', 'polite');
    nav.setAttribute('aria-describedby', status.id);
    nav.appendChild(createButton('Prev', 'prev', 'pagination-direction'));

    for (var page = 1; page <= pageCount; page += 1) {
      nav.appendChild(createButton(String(page), String(page), 'pagination-number'));
    }

    nav.appendChild(createButton('Next', 'next', 'pagination-direction'));
    nav.appendChild(status);
    list.insertAdjacentElement('afterend', nav);

    function render(page, shouldFocus) {
      currentPage = Math.max(1, Math.min(page, pageCount));

      items.forEach(function (item, index) {
        item.hidden = index < (currentPage - 1) * pageSize || index >= currentPage * pageSize;
      });

      Array.prototype.forEach.call(nav.querySelectorAll('button'), function (button) {
        var target = button.dataset.page;
        var isCurrent = target === String(currentPage);
        button.classList.toggle('is-active', isCurrent);
        if (isCurrent) {
          button.setAttribute('aria-current', 'page');
        } else {
          button.removeAttribute('aria-current');
        }
        button.disabled = (target === 'prev' && currentPage === 1) || (target === 'next' && currentPage === pageCount);
      });

      status.textContent = label + ', page ' + currentPage + ' of ' + pageCount;
      if (shouldFocus) list.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    nav.addEventListener('click', function (event) {
      var button = event.target.closest('button[data-page]');
      var target;
      if (!button || button.disabled) return;

      target = button.dataset.page;
      if (target === 'prev') render(currentPage - 1, true);
      else if (target === 'next') render(currentPage + 1, true);
      else render(parseInt(target, 10), true);
    });

    render(1, false);
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-paginated-list]'), setupPagination);
}());
