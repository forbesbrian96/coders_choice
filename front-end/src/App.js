import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Record from './components/Record.js'
import Add from './components/Add.js'
import Edit from './components/Edit.js'
const App = () => {
  //STATES
  const [records, setRecords] = useState([])
  const [showEdit, setShowEdit] = useState(false)
  const [selectedRecord, setSelectedRecord] = useState(null)
  //CREATE
  const handleCreate = (data) => {
    axios.post('http://localhost:3000/records', data)
    .then((response) => {
      let newRecords = [...records, response.data]
      setRecords(newRecords)
    })
  }
  //READ
  const getRecord = () => {
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
      toggleEdit()
    })
  }
  //DELETE
  const handleDelete = (deletedRecord) => {
    axios.delete('http://localhost:3000/records/' + deletedRecord._id)
    .then((response) => {
      let newRecords = records.filter((record) => {
        return record._id !== deletedRecord._id
      })
      setRecords(newRecords)
    })
  }
  const toggleEdit = (record = null) => {
    setShowEdit(!showEdit)
    setSelectedRecord(record)
  }
  useEffect(() => {
    getRecord()
  }, [])
  return (
    <div>
      <h1>Add Album To Catalogue</h1>
      <Add handleCreate={handleCreate}/>
      <div className="cards-container">
        {records.map((record) => {
          return (
            <div className="card" key={record._id}>
              <Record record={record} />
              {showEdit && selectedRecord && selectedRecord._id === record._id && (
                <Edit record={selectedRecord} handleEdit={handleEdit} />
              )}
              <button onClick={() => toggleEdit(record)}>Edit</button>
              <button onClick={() => {
                handleDelete(record) 
              }}>Remove</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}
export default App;
