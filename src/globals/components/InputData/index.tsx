import { useState } from 'react';
import { DateTime } from 'luxon';
import { InputDataProps } from '../../interfaces/interfaces';

export default function InputData({setData, defaultValue}:InputDataProps) {

  function handleChange(event: any) {
    setData(event.target.value);
  }

  return (
    <input type="date" value={defaultValue} onChange={handleChange} />
  );
}