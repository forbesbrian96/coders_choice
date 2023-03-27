import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Record from './components/Record'
import Add from './components/Add'
import Edit from './componenets/Edit'

const App = () => {
  //STATES
  const [records, setRecords] = useState([])

  //CREATE
  const handleCreate = (data) => {
    axios.post('http://localhost:3000/records', data)
    .then((response) => {
      let newRecords = [...records, response.data]
      setRecords(newRecords)
    })
  }

  //READ
  const getRecords = () => {
    axios.get('http://localhost:3000/records')
    .then((response) => {
      setRecords(response.data)
    }
    , (err) => 
    console.log(err))
    .catch((error) => console.log(error))
  }

  //UPDATE
  const handleEdit = (data) => {
    axios.put('http://localhost:3000/records/' + data._id, data)
    .then((response) => {
      let newRecords =records.map((record) => {
        return record._id !== data._id ? record : data
      })
      setRecords(newRecords)
    })
  }

  //DELETE
  const handleDelete = (deletedRecord) => {
    axios.delete('http://localhost:3000/records' + deletedRecord._id)
    .then((response) => {
      let newRecords = records.filter((record) => {
        return record._id !== deletedRecord._id
      })
      setRecords(newRecords)
    })
  }

  return (
  <>
  <Add handleCreate={handleCreate}/>

  {records.map((record) => {
    return (
      <>
      <Record record={record} />
      <Edit record={record} handleEdit={handleEdit} />
      <button onClick={() => {
        handleDelete(record) 
      }}
      >Remove From</button>

      
      </>
    )
  })}
  </>
  );
}

export default App;
