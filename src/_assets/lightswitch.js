// Set storage value
const lightStorageValue = localStorage.getItem('lightTheme');
if (lightStorageValue === null) {
    localStorage.setItem('lightTheme', window.matchMedia('(prefers-color-scheme)').media === 'not all')
}

const switchLight = () => {
    const isLight = localStorage.getItem('lightTheme') === 'true' ? 'false' : 'true'
    localStorage.setItem('lightTheme', isLight)

    const r = document.querySelector(':root');
    if (isLight === 'true') {
        r.style.setProperty('--c-text', '#0d0707')
        r.style.setProperty('--c-textSeparator', '#1e1819')
        r.style.setProperty('--c-background', '#edebeb')
        r.style.setProperty('--c-backgroundseparator', '#a8b2c0')
        r.style.setProperty('--c-background-gradient', 'linear-gradient(to bottom, #edebeb, #f1eded)')
    } else {
        r.style.setProperty('--c-text', '#edebeb')
        r.style.setProperty('--c-textSeparator', '#a8b2c0')
        r.style.setProperty('--c-background', '#0d0707')
        r.style.setProperty('--c-background-gradient', 'linear-gradient(to bottom, #0d0707, #090505)')
        r.style.setProperty('--c-backgroundseparator', '#1e1819')
    }
}

switchLight()
switchLight()