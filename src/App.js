import { Component } from 'react';
// import Counter from './Counter/Counter';
// import StopWatch from './components/StopWatch';
// import AnimalSlider from './components/AnimalSlider';
// import ViewPortParams from './components/ViewPortParams';
// import StopWatch from './components/StopWatch';
// import ThemeButton from './components/ThemeButton';
// import LoginForm from './components/LoginForm/LoginForm';
import UsersLoader from './components/UsersLoader';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      isLight: true,
    };
  }

  handleClick = () => {
    const { isVisible } = this.state;
    this.setState({ isVisible: !isVisible });
  };

  changeByChild = () => {
    const { isLight } = this.state;
    this.setState({ isLight: !isLight });
  };

  render() {
    const { isVisible, isLight } = this.state;

    return (
      <>
        {/* <button onClick={this.handleClick}>
          {isVisible ? 'Unmount' : 'Mount'}
        </button>
        {isVisible && <AnimalSlider />}{' '}
        <ThemeButton changeByChild={this.changeByChild} isLight={isLight} />
        <LoginForm /> */}
        <UsersLoader />
      </>
    );
  }
}

export default App;
