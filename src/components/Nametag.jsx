

import React from 'react';
import styles from './Styles.css';

function Nametag() {

  const [name, setName] = React.useState('SARAH SKILLEN');
  const [color, setColor] = React.useState('blue');
 
  return (
    <div data-testid="color"
      className={styles.Main} style={{ background: color }}>
      <div >
        <div className={styles.Greeting}>
             Hello My Name is: 
        </div>
        <div className={styles.Name}>
          {name}
        </div> 
        <div className={styles.Change}>
          <input placeholder="Enter your name"
            type="name" onChange={e => setName(e.target.value)} />
          <input type="color" onChange={e => setColor(e.target.value)} />
        
        </div>
      </div>
    </div>
  );
}

export default Nametag;



