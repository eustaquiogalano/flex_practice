const slider = document.querySelector("#slider");
const mediaQuery = document.querySelector("#media-query");


slider.addEventListener('input', () => {
    
    mediaQuery.style.width = `${slider.value}px`
    
});