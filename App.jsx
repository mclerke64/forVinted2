import { useState } from 'react';
import './App.css';

function App() {
  const [spalva, setSpalva] = useState('#ee4747');

  const handleColorChange = (e) => {
    setSpalva(e.target.value);
  };

  return (
    <div>
      <h2>Pasirink spalvą</h2>
      <div>
        <input
          type="color"
          value={spalva}
          onChange={handleColorChange}
        />
        <div
          style={{
            backgroundColor: spalva,
            width: '500px',
            height: '180px',
            marginTop: '24px',
          }}
        />
      </div>
      <div>
        Selected color: {spalva}
      </div>
    </div>
  );
}

export default App;