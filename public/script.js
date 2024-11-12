function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = content.previousElementSibling.querySelector('.fa-arrow-right');

    if (content.classList.contains('opacity-0')) {
        content.classList.remove('opacity-0', 'h-0');
        content.classList.add('opacity-100', 'h-auto');
        icon.style.transform = 'rotate(45deg)';
    } else {
        content.classList.add('opacity-0', 'h-0');
        content.classList.remove('opacity-100', 'h-auto');
        icon.style.transform = 'rotate(0deg)';
    }
}
