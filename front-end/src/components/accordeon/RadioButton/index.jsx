import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import './radio.css';

export default () => {
  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue);
  };

  return (
    <div className="contain">
      <div className="radio">
        <div>
          <span className="span">Sim</span>
        </div>

        <div>
          <Radio
            type="radio"
            checked={selectedValue === 'a'}
            onChange={(e) => setSelectedValue(e.target.value)}
            value="a"
            name="radio-buttons"
          />
        </div>
      </div>

      <div className="radio">
        <div>
          <span className="span" >Não</span>
        </div>
        <div>
          <Radio
            checked={selectedValue === 'b'}
            onChange={handleChange}
            value="b"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'B' }}
          />
        </div>
      </div>
      <div className="radio">
        <div>
          <span className="span">S/N</span>
        </div>
        <div>
          <Radio
            checked={selectedValue === 'c'}
            onChange={handleChange}
            value="c"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'B' }}
          />
        </div>
      </div>
 
    </div>
  );
};
