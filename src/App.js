import { Component } from 'react';
import { createContext } from 'react';
import CONSTANTS from './constants';
import { ThemeContext } from './contexts';
import UserPage from './pages/UserPage';
import styles from './App.module.sass';
import classNames from 'classnames';
const { LIGHT, DARK, PINK } = CONSTANTS.THEME;
// import {
//   getDate,
//   getDay,
//   startOfMonth,
//   startOfWeek,
//   endOfMonth,
//   getWeek,
//   getYear,
//   addDays,
//   parse,
// } from 'date-fns';
// import Counter from './Counter/Counter';
// import StopWatch from './components/StopWatch';
// import AnimalSlider from './components/AnimalSlider';
// import ViewPortParams from './components/ViewPortParams';
// import StopWatch from './components/StopWatch';
// import ThemeButton from './components/ThemeButton';
// import LoginForm from './components/LoginForm/LoginForm';
// import UsersLoader from './components/UsersLoader';
// import ImageWrapper from './components/ImageWrapper';

// const NamedList = ({ name, children }) => {
//   return (
//     <>
//       <h2>{name}</h2>
//       {children}
//     </>
//   );
// };

// const WEEK_DAYS = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
// ];

// const DataContext = createContext();

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isVisible: false,
//       isLight: true,
//     };
//   }

//   handleClick = () => {
//     const { isVisible } = this.state;
//     this.setState({ isVisible: !isVisible });
//   };

//   changeByChild = () => {
//     const { isLight } = this.state;
//     this.setState({ isLight: !isLight });
//   };

//   render() {
//     const data = 'dat654645';
//     const { isVisible, isLight } = this.state;
//     const currentDate = new Date();
//     const date = new Date();
//     console.log('date', getDate(currentDate));
//     console.log('day', WEEK_DAYS[getDay(currentDate)]);
//     const startWeek = getWeek(startOfMonth(date));
//     const endWeek = getWeek(endOfMonth(date));
//     const monthDays = [];

//     for (let i = startWeek; i <= endWeek; i++) {
//       const weekDays = [];
//       let startWeekDay = startOfWeek(
//         parse(`${i}`, 'w', new Date(getYear(date), 0, 1))
//       );
//       console.log(startWeekDay);
//       for (let j = 0; j < 7; j++) {
//         weekDays.push(getDate(addDays(startWeekDay, j)));
//       }
//       monthDays.push(weekDays);
//       console.log(weekDays);
//     }

//     return (
//       <>
//         {/* <button onClick={this.handleClick}>
//           {isVisible ? 'Unmount' : 'Mount'}
//         </button>
//         {isVisible && <AnimalSlider />}{' '}
//         <ThemeButton changeByChild={this.changeByChild} isLight={isLight} />
//         <LoginForm /> */}
//         {/* <ImageWrapper width='400px' height='300px'>
//           <img
//             src='https://images.pexels.com/photos/789380/pexels-photo-789380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//             alt='home'
//           />
//         </ImageWrapper> */}
//         <DataContext.Provider value={data}>
//           <Child />
//         </DataContext.Provider>
//       </>
//     );
//   }
// }

// export default App;

// function Child() {
//   return (
//     <div>
//       <ChildChild />
//     </div>
//   );
// }

// function ChildChild() {
//   return (
//     <DataContext.Consumer>
//       {(data) => <div>I am ChildChild: {data} </div>}
//     </DataContext.Consumer>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: LIGHT,
    };
  }

  setTheme = (newTheme) => {
    this.setState({
      theme: newTheme,
    });
  };

  render() {
    const { theme } = this.state;
    const pageClassName = classNames({
      [styles.lightTheme]: theme === LIGHT,
      [styles.darkTheme]: theme === DARK,
      [styles.pinkTheme]: theme === PINK,
    });
    return (
      <ThemeContext.Provider value={{ theme, setTheme: this.setTheme }}>
        <div className={pageClassName}>
          <UserPage />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
