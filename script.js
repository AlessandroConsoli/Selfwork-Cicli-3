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
            selected = 0;
            alert(`Scelta non valida!`);
            break;
    }
} while (selected < 1 || selected > 3 || typeof selected != `number`);