import styles from './ItemCard.module.css';
import data from '../dataCenter';
import {ReactComponent as Rupee } from '../images/Indian-Rupee-symbol.svg';
import Star from '../star/star';

function ItemCard(props) {
    // const {categories,items,users, NavbarItem} = data;
    const {item}=props;
    console.log('item',props);
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageContainer}>
        <img src={require(`../images/mobile1.jpg`).default} alt="mobile" className={styles.itemImage}/>
      </div>
      <div>
        <div className={styles.itemName}>
          {item.name}
        </div>
        <div className={styles.itemPrice}>
          <Rupee className={styles.rupeeIcon}/>
          {item.price}
        </div>
        <div className={styles.itemRating}>
          <Star rating={item.rating} className={styles.starIcon}/>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;