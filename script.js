let selected = prompt(`Inserisci il numero corrispondente alla bevanda`);

// if (selected == 1) {
//     alert(`E’ stata selezionata Acqua`);
// }else if (selected == 2) {
//     alert(`E’ stata selezionata Coca cola`);
// }else if (selected == 3) {
//     alert(`E’ stata selezionata Birra`);
// }else if (typeof selected != `number`) {
//     alert(`Devi inserire il numero corrispondente alla bevanda`);
// }else{
//     alert(`Scelta non valida`)
// }

switch (selected) {
    case `1`:
        alert(`E’ stata selezionata Acqua`);
        break;
    case `2`:
        alert(`E’ stata selezionata Coca cola`);
        break;
    case `3`:
        let age = prompt(`Hai selezionato un alcolico. Quanti anni hai?`);
            if (age >= 18) {
                alert(`Birra in erogazione`);
            }else{
                alert(`Sei minorenne, non puoi bere alcolici`);
            }
        break;
    default:
        alert(`Scelta non valida`);
        break;
}

// EXTRA

