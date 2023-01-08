import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()
  useEffect(() => {
    if (!selectedFile) {
        setPreview(undefined)
        return
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [selectedFile])

const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined)
        return
    }
    setSelectedFile(e.target.files[0])
}



  return (
    <div className="App">
  <input type='file' onChange={onSelectFile} />
            {selectedFile &&  <img src={preview} /> }
    </div>
  );
}

export default App;
