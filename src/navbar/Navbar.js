import styles from './Navbar.module.css';
import data from '../dataCenter';

function Navbar() {
    const {categories,items,users, NavbarItem} = data;
    console.log(data);
  return (
    <div className={styles.container}>
      {
          NavbarItem.map(category => {
              return (<div className={styles.navbarItem}>
                  {category}
              </div>)
          })
      }
    </div>
  );
}

export default Navbar;