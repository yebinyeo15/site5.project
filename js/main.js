const filterForm = document.querySelector('.filter-form');
const filterChips = [...document.querySelectorAll('.filter-chip')];
const filterSheet = document.querySelector('.filter-sheet');
const filterOpenButton = document.querySelector('.category-chip--filter');
const filterCloseButtons = [
    document.querySelector('.filter-sheet__handle'),
    document.querySelector('.filter-sheet__close'),
];

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

const closeFilterSheet = () => {
    filterSheet.classList.add('is-closing');
    filterSheet.setAttribute('aria-hidden', 'true');
    filterOpenButton.setAttribute('aria-expanded', 'false');
};

const openFilterSheet = () => {
    filterSheet.classList.remove('is-closing');
    filterSheet.removeAttribute('aria-hidden');
    filterOpenButton.setAttribute('aria-expanded', 'true');
};

filterCloseButtons.forEach((button) => {
    button.addEventListener('click', closeFilterSheet);
});

filterOpenButton.addEventListener('click', openFilterSheet);
