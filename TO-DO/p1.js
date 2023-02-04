document.addEventListener('DOMContentLoaded', function(){
  const list = document.querySelector('#book-list ul');
  const forms = document.forms;

  list.addEventListener('click', (e) => {
    if (e.target.className === 'delete') {
      e.target.closest('li').remove();
    }
  });

  // add books
  const addForm = forms['add-book'];
  addForm.addEventListener('submit', function(e){
    e.preventDefault();
    // create elements
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    const checkbox = document.createElement('input');
    // add text content
    bookName.textContent = value;
    deleteBtn.textContent = '🗑️';
    checkbox.type = 'checkbox';
    checkbox.value = '';
    checkbox.checked = false;
    // add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
    checkbox.classList.add('checkbox1');
    // append to DOM
    li.append(bookName, deleteBtn, checkbox);
    list.append(li);

    const progressBar = document.querySelector('#progress-bar');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    function updateProgress() {
      const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
      const percent = (checkedCount / checkboxes.length) * 100;
      progressBar.style.width = percent + '%';
      if (percent === 100) {
        alert("Task Completed!");
      }
    }
    checkboxes.forEach(checkbox => checkbox.addEventListener('change', updateProgress));
  });     
});
