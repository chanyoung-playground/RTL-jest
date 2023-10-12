import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [isDisabled, setIsDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        onClick={() => {
          setButtonColor(newButtonColor);
        }}
        disabled={isDisabled}
        style={{ backgroundColor: buttonColor }}>
        {buttonColor}
      </button>
      <label htmlFor='disable-button'>disable button</label>
      <input
        id='disable-button'
        defaultChecked={isDisabled}
        onChange={(e) => setIsDisabled(e.target.checked)}
        type='checkbox'
      />
    </div>
  );
}

export default App;
