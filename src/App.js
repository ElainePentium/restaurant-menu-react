import React from 'react';
import './App.css';
import MenuList from './components/MenuList';
import foodItems from './data';

const App = () => {
  return (
    <div>
      <h1>Wild Restaurant Menu</h1>
      <MenuList foodItems={foodItems} />
      {/* pass the variable foodItems as props to MenuList component */}
    </div>
  );
};

export default App;


// dans MenuList, affiche un composant MenuItem pour chaque élément du tableau et transmets toutes les propriétés de l'objet en tant que props ;

// dans MenuItem, crée un état isFavorite qui aura une valeur initiale définie sur props.isFavorite.
// dans MenuItem accède à chaque props pour afficher le nom, l'image, la description et le prix de l'aliment ;

// crée une fonction handleClickFavorite qui fera passer l'état isFavorite de vrai à faux ;
// dans MenuItem, à l'intérieur de la div avec l'id favorite, appelle la méthode handleClickFavorite lorsqu'un événement de clic se produit ;
// sur la même div, modifie conditionnellement className : "isFavorite" ou "notFavorite", en fonction de l'état isFavorite.
// 🆙 Bonus :
// Déplacer la variable foodItems vers un autre fichier data.js. INDICE : n'oublie pas d'exporter la variable, et de l'importer dans ton composant !
// 🧐 Critères d'acceptation
//  l'application affiche correctement les éléments du menu ;
//  quand on clique sur l'image du coeur, elle passe de favorite à non favorite ;