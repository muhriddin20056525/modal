const openModalBtn = document.querySelector(".modal-btn");
const closeModalBtn = document.querySelector(".ri-close-line");
const modal = document.querySelector(".modal");

openModalBtn.addEventListener("click", () => modal.classList.add("active"));
closeModalBtn.addEventListener("click", () => modal.classList.remove("active"));
