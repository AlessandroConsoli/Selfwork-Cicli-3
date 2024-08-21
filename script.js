// let selected = Number(prompt(`Inserisci il numero corrispondente alla bevanda`));

// switch (selected) {
//     case 1:
//         alert(`E’ stata selezionata Acqua`);
//         break;
//     case 2:
//         alert(`E’ stata selezionata Coca cola`);
//         break;
//     case 3:
//         let age = prompt(`Hai selezionato un alcolico. Quanti anni hai?`);
//             if (age >= 18) {
//                 alert(`Birra in erogazione`);
//             }else{
//                 alert(`Sei minorenne, non puoi bere alcolici`);
//             }
//         break;
//     case typeof selected != Number:
//         alert(`Devi inserire il numero corrispondente alla bevanda`)
//         break;
//     default:
//         alert(`Scelta non valida`);
//         break;
// }
    //    EXTRA

let selected;

do {
    selected = Number(prompt(`Inserisci il numero corrispondente alla bevanda desiderata \n1 - Acqua \n2 - Coca cola \n3 - Birra`))

    switch (selected) {
        case 1:
            alert(`In erogazione Acqua`);
            break;
        case 2:
            alert(`In erogazione Coca cola`);
            break;
        case 3:
            let age = prompt(`Hai selezionato un alcolico. Quanti anni hai?`);
                if (age >= 18) {
                    alert(`In erogazione Birra`);
                }else{
                    alert(`Sei minorenne, non puoi bere alcolici`);
                }
            break;
        default:
            prompt(`Scelta non valida! \nInserisci il numero corrispondente alla bevanda desiderata`);
            break;
    }
} while (selected < 1 || selected > 3 || typeof selected != Number);