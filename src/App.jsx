//import { useState } from 'react'
import './App.css'
import CheckboxItem from "./CheckboxItem";

const data = [
  {
    name: "US",
    children: [
      {
        name: "CA",
        children: [
          { name: "Irvine" },
          { name: "LA" }
        ]
      }
    ]
  }
];

function App() {

  return (
    <div style={{ padding: '20px'}}>
      { data.map((item, index) => (
          <CheckboxItem key={index} item={item} />
      ))}
    </div>
  );
}

export default App;
