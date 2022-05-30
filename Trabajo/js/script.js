let indexcaja1 = 0;
let indexcaja2 = 0;
let indexcaja3 = 0;

$('.ingrediente').draggable();
$('.cajonT').droppable({ 
    drop: function( event, ui ) {
        let elmId = $(ui.draggable).attr("id");
        let  elm = $(ui.draggable);
        if(indexcaja1 == 0){
            checkId1(elmId);
        }
        else
        if(indexcaja2 == 0){
            checkId2(elmId);
        }
        else
        if(indexcaja3 == 0){
            checkId3(elmId);
        }
        $(elm).draggable( "disable" )
}

});

// ESTAS FUNCIONES SIRVEN PARA COMPROBAR CUAL DE LOS
// OBJETOS HA SIDO DROPEADO EN LAS CAJAS
function checkId1(parameter1){
    
    if(parameter1=="HO"){
        indexcaja1 =1;
    }
    if(parameter1=="FA"){
        indexcaja1 =2;
    }
    if(parameter1=="SC"){
        indexcaja1 =3;
    }
    if(parameter1=="CS"){
        indexcaja1 =4;
    }
    if(parameter1=="RT"){
        indexcaja1 =5;
    }
    if(parameter1=="FT"){
        indexcaja1 =6;
    }
    if(parameter1=="PC"){
        indexcaja1 =7;
    }
    if(parameter1=="FE"){
        indexcaja1 =8;
    }
    if(indexcaja1 != 0 && indexcaja2 != 0 && indexcaja3 != 0){
        result();
    }

}

function checkId2(parameter1){

    if(parameter1=="HO"){
        indexcaja2 =1;
    }
    if(parameter1=="FA"){
        indexcaja2 =2;
    }
    if(parameter1=="SC"){
        indexcaja2 =3;
    }
    if(parameter1=="CS"){
        indexcaja2 =4;
    }
    if(parameter1=="RT"){
        indexcaja2 =5;
    }
    if(parameter1=="FT"){
        indexcaja2 =6;
    }
    if(parameter1=="PC"){
        indexcaja2 =7;
    }
    if(parameter1=="FE"){
        indexcaja2 =8;
    }

    if(indexcaja1 != 0 && indexcaja2 != 0 && indexcaja3 != 0){
        result();
    }

}
function checkId3(parameter1){

    if(parameter1=="HO"){
        indexcaja3 =1;
    }
    if(parameter1=="FA"){
        indexcaja3 =2;
    }
    if(parameter1=="SC"){
        indexcaja3 =3;
    }
    if(parameter1=="CS"){
        indexcaja3 =4;
    }
    if(parameter1=="RT"){
        indexcaja3 =5;
    }
    if(parameter1=="FT"){
        indexcaja3 =6;
    }
    if(parameter1=="PC"){
        indexcaja3 =7;
    }
    if(parameter1=="FE"){
        indexcaja3 =8;
    }

    if(indexcaja1 != 0 && indexcaja2 != 0 && indexcaja3 != 0){
        result();
    }

}

// AL PONER TRES OBJETOS EN LA "TETERA" GENERA UNO DE ESTOS EFECTOS
function result(){
    
    let elementos =[indexcaja1, indexcaja2,indexcaja3]
    let numerode1=0;
    let numerode2=0;
    let numerode3=0;
    let numerode4=0;
    let numerode5=0;
    let numerode6=0;
    let numerode7=0;
    let numerode8=0;
    let acertado = false;


    for(let i=0; i<3; i++){
        if(elementos[i]==1){
            numerode1++;
        }
        if(elementos[i]==2){
            numerode2++;
        }
        if(elementos[i]==3){
            numerode3++;
        }
        if(elementos[i]==4){
            numerode4++;
        }
        if(elementos[i]==5){
            numerode5++;
        }
        if(elementos[i]==6){
            numerode6++;
        }
        if(elementos[i]==7){
            numerode7++;
        }
        if(elementos[i]==8){
            numerode8++;
        }
    }


    if(numerode1==1&&numerode2==1&&numerode3==1){
        alert("Té Cítrico")
        acertado = true
    }
    if(numerode1==1&&numerode2==2){
        alert("Caramelo de oasis")
        acertado = true
    }
    if(numerode1==1 && numerode3==1 && numerode4==1){
        alert("Terrón ahumado")
        acertado = true
    }
    if(numerode1==1 && numerode5==1 && numerode6==1){
        alert("Terapia de trébol")
        acertado = true
    }
    if(numerode1==1 && numerode7==2){
        alert("Poleo de fuego")
        acertado = true
    }
    if(numerode2==1 && numerode3==1 && numerode6==1){
        alert("Frutos amargos")
        acertado = true
    }
    if(numerode2==1 && numerode7==1 && numerode8==1){
        alert("Especias oníricas")
        acertado = true
    }
    if(numerode2==1 && numerode4==1 && numerode5==1){
        alert("Trébol saciante")
        acertado = true
    }
    if(numerode3==1 && numerode5==1 && numerode8==1){
        alert("Esencia de luces")
        acertado = true
    }
    if(numerode5==1 && numerode7==1 && numerode8==1){
        alert("Ocaso cáustico")
        acertado = true
    }
    if(numerode4==1 && numerode6==1 && numerode8==1){
        alert("Tónico seco")
        acertado = true
    }
    if(numerode4==1 && numerode5==1 && numerode7==1){
        alert("Elixir Layton")
        acertado = true
    }
    if(acertado == false){
        alert("Esto no huele muy bien...")
    }

}
