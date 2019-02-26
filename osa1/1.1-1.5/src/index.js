import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
    <div>
        <p>{props.course}</p>
    </div>
)

const Contents = (props) => (
    <div>
        <Part courseName = {props.parts[0].name} courseExercises = {props.parts[0].exercises} />
        <Part courseName = {props.parts[1].name} courseExercises = {props.parts[1].exercises} />
        <Part courseName = {props.parts[2].name} courseExercises = {props.parts[2].exercises} />
    </div>
)

const Part = (props) => (
    <div>
        <p>{props.courseName} {props.courseExercises}</p>
    </div>
)

const Total = (props) => (
    <div>
        <p>Total {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} exercises</p>
    </div>
)

const App = () => {
    const course = {
        name: 'Superadvanced web and mobile programming',
        parts: [
            {
                name: 'Basics of React',
                exercises: 8
            },
            {
                name: 'Using props',
                exercises: 10
            },
            {
                name: 'Component states',
                exercises: 12
            }
        ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Contents parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)