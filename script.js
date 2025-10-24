AOS.init();
document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

document.getElementById('admissionForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const modal = new bootstrap.Modal(document.getElementById('ackModal'));
  modal.show();
  this.reset();
});

const tableViewBtn = document.getElementById('tableViewBtn');
const gridViewBtn = document.getElementById('gridViewBtn');
const tableView = document.getElementById('tableView');
const gridView = document.getElementById('gridView');

    tableViewBtn.addEventListener('click', () => {
    tableView.classList.remove('d-none');
    gridView.classList.add('d-none');
    tableViewBtn.classList.add('btn-primary');
    tableViewBtn.classList.remove('btn-outline-primary');
    gridViewBtn.classList.remove('btn-primary');
    gridViewBtn.classList.add('btn-outline-primary');
});

    gridViewBtn.addEventListener('click', () => {
    gridView.classList.remove('d-none');
    tableView.classList.add('d-none');
    gridViewBtn.classList.add('btn-primary');
    gridViewBtn.classList.remove('btn-outline-primary');
    tableViewBtn.classList.remove('btn-primary');
    tableViewBtn.classList.add('btn-outline-primary');
});

