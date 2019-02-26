import React from 'react'
import ReactDOM from 'react-dom'

const countAverage = (good, neutral, poor) => {
    const sum = good + neutral + poor
    return ((good + poor * (-1)) / sum).toFixed(2)
}

const countPercentage = (good, neutral, poor) => {
    const sum = good + neutral + poor
    return ((good / sum) * 100).toFixed(2)
}

const Button = (props) => (
    <button onClick={props.increment}>{props.title}</button>
)

const Statistics = (props) => (
    <div>
        <table>
            <tbody>
            <tr>
                <td>hyvä</td>
                <td>{props.good}</td>
            </tr>
            <tr>
                <td>neutraali</td>
                <td>{props.neutral}</td>
            </tr>
            <tr>
                <td>huono</td>
                <td>{props.poor}</td>
            </tr>
            <Statistic title={'keskiarvo'} statistic={countAverage(props.good, props.neutral, props.poor)}/>
            <Statistic title={'positiivisia'} statistic={countPercentage(props.good, props.neutral, props.poor) + '%'}/>
            </tbody>
        </table>
    </div>
)

const Statistic = (props) => (
    <tr>
        <td>{props.title}</td>
        <td>{props.statistic}</td>
    </tr>
)

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            good: 0,
            neutral: 0,
            poor: 0
        }
    }

    incrementGood = () => {
        this.setState({good: this.state.good + 1})
    }

    incrementNeutral = () => {
        this.setState({neutral: this.state.neutral + 1})
    }

    incrementPoor = () => {
        this.setState({poor: this.state.poor + 1})
    }

    render() {
        const klikattu = this.state.good > 0 || this.state.neutral > 0 || this.state.poor > 0
        return (
            <div>
                <h1>anna palautetta</h1>

                <Button title={'hyvä'} increment={this.incrementGood}/>
                <Button title={'neutraali'} increment={this.incrementNeutral}/>
                <Button title={'huono'} increment={this.incrementPoor}/>
                <h1>statistiikka</h1>
                {klikattu
                    ? <Statistics good={this.state.good} neutral={this.state.neutral} poor={this.state.poor}/>
                    : <p>ei yhtään palautetta annettu</p>
                }
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)