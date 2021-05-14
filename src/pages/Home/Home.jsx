import NavBar from '../../shared/NavBar/NavBar';
import { NavLink } from 'react-router-dom';
import styles from './Home.module.css';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>
          Welcome to your Personal Phonebook!
        </h1>
        <p className={styles.text}>
        My name is Diana Kuzmina and this is my first application! <br /> Here you can find a lot of useful things! <br /> This is the place where you can safely keep all your contacts.
        </p>
        
        <h2 className={styles.title}>Let's start &#128640;</h2>
        <p className={styles.text}>
        But first register!{' '}
          <NavLink exact to="/register" className={styles.listLink}>
            here
          </NavLink>
        </p>
        <p className={styles.text}>
          If you are already registered, just{' '}
          <NavLink exact to="/login" className={styles.listLink}>
            Log in
          </NavLink>{' '}
          and check your{' '}
          <NavLink exact to="/contacts" className={styles.listLink}>
            Contacts
          </NavLink>
        </p>
      </div>
    </>
  );
};

export default HomePage;