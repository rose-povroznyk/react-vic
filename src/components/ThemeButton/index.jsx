const ThemeButton = (props) => {
  console.log(props);
  const { isLight, changeByChild } = props;

  const inlineStyle = {
    color: isLight ? 'white' : 'black',
    backgroundColor: isLight ? 'black' : 'white',
  };

  return (
    <button onClick={changeByChild} style={inlineStyle}>
      {isLight ? 'Dark' : 'Light'}
    </button>
  );
};

export default ThemeButton;
