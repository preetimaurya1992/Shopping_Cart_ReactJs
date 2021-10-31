import React, { useState } from 'react';
import styles from './ItemCard.module.css';
import ItemCard from './ItemCard';
import data from '../dataCenter';

function ItemBody() {
    const {categories,items,users, NavbarItem} = data;
    console.log(data);
  return (
    <div className={styles.container}>
      {/* this is item body */}
      {
          items.map(item=>{
              return (<div className={styles.itemBody}><ItemCard item={item} /></div>)
          })
      }
    </div>
  );
}

export default ItemBody;