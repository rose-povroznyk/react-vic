import { Component } from 'react';
import defaultImg from './defaultImg.jpg';
import styles from './AnimalSlider.module.css';

class AmimalSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: defaultImg,
      caption: 'This is some dog)',
    };
    this.id = null;
  }

  loadImg = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => this.setState({ imgSrc: data.message }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.id = setInterval(this.loadImg, 2002);
  }

  componentWillUnmount() {
    clearInterval(this.id);
    this.id = null;
  }

  render() {
    const { imgSrc, caption } = this.state;
    return (
      <div>
        <figure className={styles.sliderContainer}>
          <img src={imgSrc} alt='dog' />
          <figcaption>{caption}</figcaption>
        </figure>
      </div>
    );
  }
}

export default AmimalSlider;
