
let theme = localStorage.getItem('theme')

// local storage to save theme
if (theme === null) {
    setTheme('blue')
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; themeDots.length > 1; i++) {
    themeDots[i].addEventListener('click', function (){
        let mode = this.dataset.mode
        console.log('Option clicked:', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == "light") {
        document.getElementById("theme-style").href = 'default.css'
    }

    if (mode == "blue") {
        document.getElementById("theme-style").href = 'blue.css'
    }


    localStorage.setItem('theme', mode)
}