// const buttons = document.querySelectorAll('button');
// const contents = document.querySelectorAll('.contenu');

// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const id = button.getAttribute('id').replace('btn-', '');
//     buttons.forEach(b => b.classList.remove('active'));
//     button.classList.add('active');
//     contents.forEach(content => {
//       content.style.display = 'none';
//       if (content.id === `onglet-${id}`) {
//         content.style.display = 'block';
//       }
//     });
//   });
// });


const buttons = document.querySelectorAll("button");
const contents = document.querySelectorAll(".contenu");

// Boucle pour chaque bouton
for (let i = 0; i < buttons.length; i++) {
  // On ajoute un écouteur d'événement click sur chaque bouton
  buttons[i].addEventListener("click", function() {
    // Pour chaque bouton, on retire la classe active
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("active");
      contents[j].style.display = "none";
    }
    // On ajoute la classe active sur le bouton cliqué
    this.classList.add("active");
    // On récupère l'id du bouton cliqué
    const id = this.getAttribute("id").split("-")[1];
    // On affiche le contenu associé au bouton cliqué en utilisant son id
    document.getElementById(`onglet-${id}`).style.display = "block";
  });
}