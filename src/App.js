import { useEffect, useState, useRef } from 'react'
import './App.css';

const App = () => {
  const [columns, setColumns] = useState(0)
  const [rows, setRows] = useState(0)
  const [targetCell, setTargetCell] = useState('')
  const [coordsTab, setCoordsTab] = useState([0,0])
  const tableRef = useRef()
  const tbRef = useRef()

  //Creating table every new dimensions change
  useEffect(() => {
    tbRef.current.innerHTML= ''

    if(rows !== 0 & columns !==0) {
      for (let r = 0; r < rows; r++) {
        let tr = document.createElement('TR')
        tbRef.current.appendChild(tr)
        
        for(let c = 0; c < columns; c++) {
          let td = document.createElement('TD')
          tr.appendChild(td)
        }
      }
    }
  }, [columns, rows])

  //Debuging selected cell coords
  useEffect(() => {
    console.log('coords:', coordsTab)
  },[coordsTab])


  //Capturing clicked cell
  const handleCoords = (e) => {
    targetCell ? targetCell.style.background = 'none' : 
     
    setCoordsTab([e.target.parentElement.rowIndex, e.target.cellIndex])
    e.target.style.background = "white"
    setTargetCell(e.target)
  }

  return (
    <div className="App">
      <h1>Dynamic Table Generator</h1>

      <div className="inputs-container">
        <label htmlFor="rows">ROWS</label>
        <input name="rows" type="number" min="0"
          onChange={(event) => setRows(event.target.value)}
        />
        <label htmlFor="cols">COLUMNS</label>
        <input name="cols" type="number" min="0"
          onChange={(event) => setColumns(event.target.value)}
        />
      </div>

      <table ref={tableRef}>
        <tbody ref={tbRef} onClick={(e) => { handleCoords(e) }}>

        </tbody>
      </table>
    </div>
  );
}

export default App;


  //ANOTHER WAY TO CREATE THE TABLE
  // useEffect(() => {
  //   function handleChangeTab() {
  //     console.log(coordsTab)
  //     let tableText = ''
      
  //     if(rows !== 0 & columns !==0) {
  //       console.log(columns, rows)
        
  //       for (let r = 0; r < rows; r++) {
  //         tableText += '<tr onClick: (e) => handleChange(e) >'

  //         for(let c = 0; c < columns; c++) {
  //           tableText += '<td></td>'
  //         }
  //         tableText +='</tr>'
  //         let table = tableRef

  //         console.log(table)

  //         // console.log('row :', table.current.childNodes[0].currentChildNodes.rowIndex)
  //         // console.log('active', table.active)

  //         table.current.childNodes[0].innerHTML = tableText
  //       }
  //     } else {
  //       tableText= ''
  //     }
  //    setTableContent(tableText)
  //   }
  //   handleChangeTab()

  // },[columns, rows, coordsTab])
    



