import React from 'react';
import ReactDOM from 'react-dom';

const lists = ['JavaScript', 'Java', 'Node', 'Python'];


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            age: 21
        };
    }

    render() {
        return (
            <div>
                <h1>Hello, World!, My son's name is {this.state.name}</h1>
                <h2>{this.state.age}</h2>
                <MyComponent name="haha"/>
                <ul>
                    {lists.map((result, index) => {
                        return (<li key={index}>{result}</li>)
                    })}
                </ul>

            </div>
        );
    }
}



App.propTypes = {
    name: React.PropTypes.string
};

App.defaultProps = {
    name: "erbi"
};

const MyComponent = (props) => (
    <div><h1>My component name is {props.name}</h1></div>
);

ReactDOM.render(<App name='chen,xiang'/>, document.getElementById('app'));