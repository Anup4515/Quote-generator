import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [colorTheme, setTheme] = useState('black');
  const [quote, setQuote] = useState('');
  const [writer, setWriter] = useState('');

  const colors = [
    'Crimson', 'Teal', 'Turquoise', 'Salmon', 'Olive', 'Gold',
    'Coral', 'Periwinkle', 'Lavender', 'Sienna', 'Fuchsia', 'Chartreuse',
  ];

  useEffect(() => {
    fetchQuote(); // Fetch the first quote on component mount
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('http://localhost:5500/api/quote'); // Replace with your backend URL
      const data = await response.json();
      setQuote(data.quote);
      setWriter(data.writer);

      // Change theme color
      const indexofcolor = Math.floor(Math.random() * colors.length);
      setTheme(colors[indexofcolor]);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div className="container" style={{ backgroundColor: colorTheme }}>
      <h1>Random Quote Generator</h1>
      <br />
      <div className="myquote-box" style={{ color: colorTheme }}>
        <div className="quotetext">
          `{quote}`
          <br />
          <h3 style={{ float: 'right', marginRight: '30px' }}>- {writer}</h3>
        </div>
        <br />
        <div className="function-buttons">
          <button className="social-media-buttons" style={{ color: 'white', backgroundColor: colorTheme }}>Twitter</button>
          <button className="social-media-buttons" style={{ color: 'white', backgroundColor: colorTheme }}>Insta</button>
          <button
            className="newquotebutton"
            onClick={fetchQuote}
            style={{ color: 'white', backgroundColor: colorTheme }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
