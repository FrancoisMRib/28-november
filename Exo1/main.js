const leInput = document.getElementById("todo");
const leButton = document.getElementById("btn");
/*
façon 2 de faire le bouton si on ne met pas 'onclick' dans le fichier index.
leButton.addEventListener('click', ()=>{
    function ajouterTask() {
        const element = document.createElement('li');
        element.textContent = leInput.value ;
        laList.append(element);
    }
}) ;
*/
const laList = document.getElementById("ul");

console.log(leInput);

function ajouterTask() {
    //const inputContent = leInput.value ;
    const element = document.createElement('li');
    element.textContent = leInput.value ;
    
    laList.append(element);
    //Bonus : après avoir ajouté une task, vider l'input
    leInput.value = '' ;
}

//façon 3 de faire le bouton
//leButton.addEventListener('click', ajouterTask) ;