function filtrarPorLetra(heroes,letra){

    for (let i=0; i<heroes.length; i++){

        for (let k=0; k<heroes[i].length; k++){
            let v=heroes[i].charAt(k);
            if (v.toUpperCase()===letra.toUpperCase())
                console.log(heroes[i]);
        }
    }
}



let heroes =["Doom", "Dr. Strange","Hulk","She Hulk","Spiderman","Captain Marvel"];


let heroesCon = filtrarPorLetra(heroes,"m")