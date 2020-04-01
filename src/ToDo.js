import React, { useState, useEffect } from 'react';
require('dotenv-flow').config();

function ToDoList(props) {
  //   const [tasks, setTasks] = useState([]);
  const [list, setList] = useState([]);
  const uri = process.env.REACT_APP_API_URI;
  // console.log(uri);
  useEffect(() => {
    fetch(`${uri}task`)
      .then(res => res.json())
      .then(data => {
        // setTasks(res.data);
        console.log(data);
        let tasks = data;
        let L = tasks['data'].map((v, i) => {
          return <li key={i}>{v.name}</li>;
        });
        setList(L);
      });
  }, []);
  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
}
export default ToDoList;
