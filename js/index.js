const monitor = document.querySelector('#result');
const vars = document.querySelectorAll('input');
const fo = document.querySelector('#formula');
//----

const form = {
    a: 0.00386,
    b: 0.0064,
    c: 0.00061,
    d: 0.0424,
    e: 0.174
}

vars.forEach(item => {
    item.addEventListener('keyup', e => {
        const value = calculate();
        monitor.innerHTML = value;
    })
})

function convert() {

}

function calculate() {
    const values = Array.from(vars).map(item => {
        return parseFloat(item.value.trim() || 0);
    });

    return formula(...values);
}

function formula(ac, fl, hc, bpd) {
    const a = 0.00386 * ac * fl;
    const b = 0.0064 * hc;
    const c = 0.00061 * bpd * ac;
    const d = 0.0424 * ac;
    const e = 0.174 * fl;

    return 1.3596 - a + b + c + d + e;
}

function parseFormula(formula) {

}