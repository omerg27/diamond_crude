import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { updatadiamondAsync, selectDimonds } from './counter copy/newdiamondSlice';

export function Updatdim() {
  const diamondsData = useSelector(selectDimonds);
  const diamondsArray = Object.values(diamondsData);
  const dispatch = useDispatch();
  const [diamond, setdiamond] = useState(0);
  const [carat, setCarat] = useState(0);
  const [cut, setCut] = useState('');
  const [color, setColor] = useState('');
  const [clarity, setClarity] = useState(0);
  const [depth, setDepth] = useState(0);
  const [table, setTable] = useState(0);
  const [price, setPrice] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);
  return (
    <div>
      <input  onChange={e=>setdiamond(+e.target.value)}></input>
      <input  onChange={e => setCarat((e.target.value))} />
      <input  onChange={e => setCut(e.target.value)} />
      <input  onChange={e => setColor(e.target.value)} />
      <input  onChange={e => setClarity(e.target.value)} />
      <input  onChange={e => setDepth(e.target.value)} />
      <input  onChange={e => setTable(e.target.value)} />
      <input  onChange={e => setPrice(e.target.value)} />
      <input  onChange={e => setX(e.target.value)} />
      <input  onChange={e => setY(e.target.value)} />
      <input  onChange={e => setZ(e.target.value)} />
    <button   onClick={()=>dispatch(updatadiamondAsync({diamond,carat,cut,color,clarity,depth,table,price,x,y,z}))}>hhhhh</button> 
    <table>
        <thead>
          <tr>
            <th>diamond</th>
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
              <td>{diamond.diamond}</td>
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
  )       
}        