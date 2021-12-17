const readAll = document.querySelectorAll('.read-all');
const masterInfo = document.querySelectorAll('.master-info')

function showHiddenReviews() {
    for(let i = 0; i <= readAll.length - 1; i++){
        readAll[i].addEventListener('click', () => {
            masterInfo[i].classList.toggle('master-info-full');
        });
    }
}
showHiddenReviews();


