import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {

  const actors = ["Sakib Khan", "Shoriful Raj", "Rubel", "Jasim", "Salman Shah"];

  const books = [
    {id:1, name: 'Physics', price: 100},
    {id:2, name: 'Math', price: 150},
    {id:3, name: 'Chemistry', price: 200},
    {id:4, name: 'Biology', price: 250},
  ]

  const singers = [
    { id: 1, name: "Dr. Mahfuzur Rahman", age: 68},
    { id: 2, name: "Eva Rahman", age: 38},
    { id: 3, name: "Shuvro Dev", age: 68},
    { id: 4, name: "Pritom", age: 28}
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>

      {/* <Singer></Singer> */}

      {
        singers.map(singer => <Singer singer ={singer}></Singer>)
      }

      <Actor name ={"Bappa Raj"}></Actor>

      {
        actors.map(actor => <Actor name = {actor}></Actor>)
      }

      {/* <Todo task = "Learn React" isDone = {false}></Todo>
      <Todo task = "Explore Core Concepts" isDone = {true}></Todo>
      <Todo task = "Try jsx" isDone = {true}></Todo> */}
      {/* <Device name = "laptop" price = "55"></Device>
      <Device name = "mobile" price = "17"></Device>
      <Device name = "watch" price = "3"></Device>
      <Peraon></Peraon>
      <Student grade = "7" score = "99"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device (props) {
  return (
    <h2>This is Device: {props.name} price: {props.price} </h2>
  )
}

function Peraon () {
  const age = 25;
  const money = 20;
  const person = {name: 'sakib', age: 12};
  return <h3>I am {person.name} with age: {age + money}</h3>
}

function Student ({grade = 1, score = 0}) {
  // const {grade, score} = props;
  return (
    <div className='student'>
    <h3>This is a studen</h3>
    <p>Class: {grade}</p>
    <p>score: {score}</p>
  </div>
  )
}

function Developer () {
  const developerStyle = {
    margin: '20px',
    padding: '20ox',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h3>Devo Devo</h3>
      <p>Codding</p>
    </div>
  )
}

export default App
