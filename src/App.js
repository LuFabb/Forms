import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState({ normal: '', text: '', select: '' })
  const handleChange = (e) => {
    setValue((state) => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }
  console.log(value)
  return(
    <div>
      {value.length < 5 ? <span>minimum length of 5</span> : null}
      <input type="text" name="normal" value={value.normal} onChange={handleChange} />
      <textarea name='text' onChange={handleChange} value={value.text} />

      <select value={value.select} name="select" onChange={handleChange}>
        <option value="">-- Selection --</option>
        <option value="chanchofeliz">Chancho feliz</option>
        <option value="chanchitofeliz">Chanchito feliz</option>
        <option value="chanchitotriste">Chanchito triste</option>
        <option value="felipe">Felipe</option>
      </select>
    </div>
  )
}


export default App