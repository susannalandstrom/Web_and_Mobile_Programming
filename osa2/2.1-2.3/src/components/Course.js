import React from "react"

const Header = (props) => (
    <h1>{props.course}</h1>
)

const Contents = (props) => (
    <div>
        {props.parts.map(part => <Part key={part.id} courseName={part.name} courseExercises={part.exercises} />)}
    </div>
)

const Part = (props) => (
    <p>{props.courseName} {props.courseExercises}</p>
)

const Total = (props) => (
    <p> Total: {props.parts.reduce((sum, part) => {return sum + part.exercises}, 0)}</p>

)

const Course = (props) => (
    <div>
        <Header course={props.course.name} />
        <Contents parts={props.course.parts} />
        <Total parts={props.course.parts} />
    </div>
)

export default Course