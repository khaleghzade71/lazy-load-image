function showVisible() {
    for (let img of document.querySelectorAll('img')) {
        let realSrc = img.dataset.src;
        if (!realSrc) continue;

        if (isVisible(img)) {
            img.src = realSrc;
            img.dataset.src = '';
        }
    }
}

function isVisible(img) {
    let imgTop = img.offsetTop;
    let scrollTop = container.scrollTop;
    if (scrollTop > imgTop) return true;

}

container.onscroll = showVisible;