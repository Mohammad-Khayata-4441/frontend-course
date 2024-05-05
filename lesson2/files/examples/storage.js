document.addEventListener("DOMContentLoaded", function () {

    const toggleModeBtn = document.getElementById('mode-toggle-btn')
    let storedMode = localStorage.getItem('colorMode');

    setMode(storedMode)

    // ? Toggle (switch ) Mode
    toggleModeBtn.addEventListener('click', () => {
        
        const newMode = storedMode === 'dark' ? 'light' : 'dark';
        setMode(newMode)
    })


    function setMode(mode) {
        document.body.dataset.bsTheme = mode;
        localStorage.setItem('colorMode', mode)
        storedMode = mode;
    }
});