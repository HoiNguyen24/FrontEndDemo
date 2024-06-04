const table = document.querySelector('#customers_table table');
const searchInput = document.querySelector('#customers_table .input-group input');

searchInput.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const rows = table.getElementsByTagName('tr');

  for (let i = 1; i < rows.length; i++) {
    const nameCell = rows[i].getElementsByTagName('td')[1];
    const name = nameCell.textContent.toLowerCase();
    if (name.includes(searchTerm)) {
      rows[i].style.display = '';
    } else {
      rows[i].style.display = 'none';
    }
  }
});
document.getElementById('backButton').addEventListener('click', function() {
  // Chuyển hướng về trang index.html
  window.location.href = '../user.html';
});
