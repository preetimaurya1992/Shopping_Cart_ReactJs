import styles from './Navbar.module.css';
import data from '../dataCenter';

function Navbar(props) {
    const {categories,items,users, NavbarItem} = data;
    const {category,setCategory} = props;
    console.log('navbar props',props);
  return (
    <div className={styles.container}>
      {
          NavbarItem.map(currentCategory => {
            // <div className={"btn-group pull-right" + (this.props.showBulkActions ? ' show' : ' hidden')}>
              return (
                <div 
                  className={styles.navbarItem+ ' '+ (currentCategory === category ? styles.navbarHover : null)} 
                  onClick={()=>setCategory(currentCategory)}>
                  {currentCategory}
              </div>
              )
          })
      }
    </div>
  );
}

export default Navbar;