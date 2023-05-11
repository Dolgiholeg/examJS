let but = document.getElementById('but1')
let forma = document.getElementById('form1')

forma.onsubmit = f1                                      /* скобки убрать, перехват управления формой */

function f1() {
    console.log(forma.elements)                          /* массив в консоль  */
    console.log(forma.elements.length)                   /* длина массива в консоль  */
    let stroka = ''                                      /* stroka - переменная куда выводим наш выбор  */
    let elems = forma.elements
    for (e in elems) {
        if (elems[e].type == 'checkbox' && elems[e].checked) {
            stroka += elems[e].name
            stroka += ' --  выбран' + '\n'
        }
        if (elems[e].type == 'radio' && elems[e].checked) {
            stroka += elems[e].name
            stroka += ' -- ' + elems[e].value + '\n'
        }

        if (e == forma.elements.length - 1) {
            break
        }                                                                /* break - выход из цикла  */
        if (elems[e].name == '') {
            continue
        }                                                               /* continue - пропустить, перейти к следующей терации цикла  */
        if (elems[e].value == undefined) {
            continue
        }

        if (elems[e].type!='checkbox' && elems[e].type!='radio') {
            stroka += elems[e].name                                       /* что хотим забрать из массива name,value */
            stroka += ' -- ' + elems[e].value + '\n'                          /* '\n' строки в столбец  */
        }

    }
    console.log(stroka)
    saveToPC(stroka)
    return false                                                      /* не отправлять */
}
function saveToPC(str){
let blob = new Blob([str], {type: "text/plain"});
let link = document.createElement("a");
link.setAttribute("href", URL.createObjectURL(blob));
link.setAttribute("download", "123.txt");
link.click();
}