const results = document.getElementById('results')
const erase = document.getElementById('delete')
const reset = document.getElementById('reset')
const equal = document.getElementById('equal')
const btns = document.querySelectorAll('.btn')

btns.forEach(
    (btn) => {
        btn.addEventListener("click", () => {
            results.value += btn.value
        })
    }
)

erase.addEventListener("click", () => {
    results.value = results.value.slice(0, -1)
})

reset.addEventListener("click", () => {
    results.value = ""
})

equal.addEventListener("click", () => {
    try {
        results.value = eval(results.value)
    } catch (error) {
        results.value = "Error"
    }
})

function themeSwitch(value) {
    let styles = document.getElementsByClassName('styles')
    styles[0].href = value
}