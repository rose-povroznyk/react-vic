import React from 'react';
import classNames from 'classnames';
import { ThemeContext } from '../../contexts';
import CONSTANTS from '../../constants';
import styles from './Footer.module.sass';

const { LIGHT, DARK, PINK } = CONSTANTS.THEME;

const UserPage = () => {
  return (
    <div>
      <Header />
      <main>Main content</main>
      <Footer />
    </div>
  );
};

export default UserPage;

const Header = () => {
  return (
    <header>
      <span>Header</span>
      <ThemeSwitcher />
    </header>
  );
};

const ThemeSwitcher = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => {
        const changeTheme = ({ target: { value } }) => {
          setTheme(value);
        };

        return (
          <select value={theme} onChange={changeTheme}>
            <option value={LIGHT}>Light</option>
            <option value={DARK}>Dark</option>
            <option value={PINK}>Pink</option>
          </select>
        );
      }}
    </ThemeContext.Consumer>
  );
};

const Footer = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        const footerClassName = classNames({
          [styles.lightTheme]: theme === LIGHT,
          [styles.darkTheme]: theme === DARK,
          [styles.pinkTheme]: theme === PINK,
        });

        return <footer className={footerClassName}>Footer</footer>;
      }}
    </ThemeContext.Consumer>
  );
};
