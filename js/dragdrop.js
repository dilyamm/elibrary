const dragItems = document.querySelectorAll('.drag-item');
const dragContainer = document.getElementById('drag-items');
const dropZone = document.getElementById('drop-zone');

dragItems.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

dropZone.addEventListener('dragover', dragOver);
dropZone.addEventListener('drop', drop);
dragContainer.addEventListener('dragover', dragOver);
dragContainer.addEventListener('drop', dropBack);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hidden');
    }, 0);
}

function dragEnd(e) {
    e.target.classList.remove('hidden');
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('text');
    const draggedElement = document.getElementById(id);
    draggedElement.classList.remove('hidden');
    dropZone.appendChild(draggedElement);
}

function dropBack(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('text');
    const draggedElement = document.getElementById(id);
    draggedElement.classList.remove('hidden');
    dragContainer.appendChild(draggedElement);
}
