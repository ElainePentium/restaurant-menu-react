import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
  console.log(foodItems);
  return (
    <div>
      {/*render a MenuItem component to each element of the props array*/
      foodItems.map(foodItem => (
        <MenuItem foodItem={foodItem} key={foodItem.itemName}/>
      ))}
    </div>
  )
}


export default MenuList;




// const foodItems = [
  // {
  //   itemName: "Caesar's Salad",
  //   description: "The original Caesar's Salad recipe",
  //   foodImage: 'https://bit.ly/2GJFu5W',
  //   price: 12,
  //   isFavorite: false
  // },