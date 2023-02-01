import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getdiamondAsync, selectDimonds } from './newdiamondSlice';

export function Dimond() {
  const diamonds_data = useSelector(selectDimonds);
  const diamondsArray = Object.values(diamonds_data);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(getdiamondAsync(selectDimonds))}>trrrrrr</button>
      <table>
        <thead>
          <tr>
            <th>carat</th>
            <th>cut</th>
            <th>color</th>
            <th>clarity</th>
            <th>depth</th>
            <th>table</th>
            <th>price</th>
            <th>x</th>
            <th>y</th>
            <th>z</th>
          </tr>
        </thead>
        <tbody>
          {diamondsArray.map((diamond, index) => (
            <tr key={index}>
              <td>{diamond.carat}</td>
              <td>{diamond.cut}</td>
              <td>{diamond.color}</td>
              <td>{diamond.clarity}</td>
              <td>{diamond.depth}</td>
              <td>{diamond.table}</td>
              <td>{diamond.price}</td>
              <td>{diamond.x}</td>
              <td>{diamond.y}</td>
              <td>{diamond.z}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

