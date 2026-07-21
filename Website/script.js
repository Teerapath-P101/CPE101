const editor = document.getElementById('editor');
const saveStatus = document.getElementById('save-status');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
window.addEventListener('DOMContentLoaded', () => {
    const savedText = localStorage.getItem('saved');
    if (savedText) {
        editor.value = savedText;
    }
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.src = 'sunset.png';
    } else {
        themeIcon.src = 'dark-mode.png';
    }
});

editor.addEventListener('input', (e) => {
    const currentText = e.target.value;
    debouncedAutoSave(currentText);
});


let saveDelayTimer;
function debouncedAutoSave(text) {
    saveStatus.textContent = '...Saving...';
    
    clearTimeout(saveDelayTimer);
    
    saveDelayTimer = setTimeout(() => {
        localStorage.setItem('saved', text);
        saveStatus.textContent = 'Saved';
    }, 300);
}
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.src = 'sunset.png';
    } else {
        localStorage.setItem('theme', 'light');
        themeIcon.src = 'dark-mode.png';
    }
});
