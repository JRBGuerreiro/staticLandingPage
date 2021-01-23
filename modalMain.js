//our modalInner component
var modalInner = document.getElementById("modal-inner");

//our modal component
var modal = document.getElementById("modal")

//button to open the modal
var modalBtn = document.getElementById("signUp")

//close button in modal
var closeBtn = document.getElementById("modal-close");

//Is modal open?
var isOpen = false

const closeModal = () => {
    modalInner.style.top = '-100vh';
        modal.style.display = 'none'
        isOpen = false;
}


closeBtn.addEventListener('click', () => {
    closeModal()
})

window.addEventListener('click', (e) => {
    if(isOpen && e.target == modal) {
        closeModal()
    }
})

modalBtn.addEventListener('click', () => {
    if(!isOpen) {
        modal.style.display = 'block';
        modalInner.style.top = 'calc(50% - 250px)';
        isOpen = true;
    }
})




