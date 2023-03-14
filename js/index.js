const monitor = document.querySelector('#result');
const vars = document.querySelectorAll('.keyboard input');
const fo = document.querySelector('#formula');
const lo = document.querySelector('#log');
const select = document.querySelector('#weight');
const weight = monitor.nextElementSibling.nextElementSibling.querySelector('.select-selected');
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
        const opt = select.options.selectedOptions?.[0];

        const value = calculate();
        setValue(value / parseFloat(opt?.value.trim() || 1));
        monitor.nextElementSibling.value = value;
    })
})

function setValue(value) {
    monitor.innerHTML = value;
}

let un = 0;
weight.addEventListener('click', e => {
    const index = select.options.selectedIndex;
    if (un === index) return;
    un = index;
    const value = parseFloat(monitor.nextElementSibling.value.trim() || 0.0);
    const opt = Array.from(select.options)[index];

    setValue(value / parseFloat(opt.value.trim() || 1));
});

function calculate() {
    const values = Array.from(vars).map(item => {
        return parseFloat(item.value.trim() || 0) / 10;
    });
    console.log(values, Array.from(vars).map(i => i.value))
    return formula(...values);
}

function formula(ac, fl, hc, bpd) {
    const a = 0.00386 * ac * fl;
    const b = 0.0064 * hc;
    const c = 0.00061 * bpd * ac;
    const d = 0.0424 * ac;
    const e = 0.174 * fl;

    let res = 1.3596 - a + b + c + d + e;
    return Math.pow(10, res);
}

/**
 * 
 * @param {string} formula 
 */
function parseFormula(formula) {
    formula = formula.trim();
    const steps = [];
    //----
    let pos = 0;
    let ch = '';
    for (; ;) {
        ch = formula.charAt(pos);
        if (ch === undefined) break;
        //-----

    }
}

function createNode(type) {

}