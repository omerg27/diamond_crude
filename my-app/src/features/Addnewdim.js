import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { adddiamondAsync,selectDimonds } from './counter copy/newdiamondSlice';


export function Addnewdim  () {
  const diamonds_data = useSelector(selectDimonds);
  const diamondsArray = Object.values(diamonds_data);
  const dispatch = useDispatch();
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
      <input  onChange={e => setCarat((e.target.value))} />
      <input  onChange={e => setCut(e.target.value)} />
      <input  onChange={e => setColor(e.target.value)} />
      <input  onChange={e => setClarity(e.target.value)} />
      <input  onChange={e => setDepth(e.target.value)} />
      <input  onChange={e => setTable(e.target.value)} />
      <input   onChange={e => setPrice(e.target.value)} />
      <input  onChange={e => setX(e.target.value)} />
      <input  onChange={e => setY(e.target.value)} />
      <input  onChange={e => setZ(e.target.value)} />
      <div>
<button onClick=
{(()=>dispatch(adddiamondAsync(
    {carat,cut,color,clarity,depth,table,price,x,y,z})))}>
        Add Data</button>
        {diamondsArray>0&&diamondsArray[0].carat}
        {diamondsArray.map((dim,i)=><div key={i}></div>)}
        
        </div>

            </div>
  );
}
