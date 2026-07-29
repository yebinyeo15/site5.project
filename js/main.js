const filterForm = document.querySelector('.filter-form');
const filterChips = [...document.querySelectorAll('.filter-chip')];

const setChipSelected = (chip, selected) => {
    chip.classList.toggle('is-selected', selected);
    chip.setAttribute('aria-pressed', String(selected));
};

filterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
        setChipSelected(chip, !chip.classList.contains('is-selected'));
    });
});

filterForm.addEventListener('reset', () => {
    window.requestAnimationFrame(() => {
        filterChips.forEach((chip) => {
            setChipSelected(chip, false);
        });
    });
});

filterForm.addEventListener('submit', (event) => {
    event.preventDefault();
});
