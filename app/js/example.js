var Parent = React.createClass({
    render: function() {
        return (
            <div>
                <Child name="xiang"/>
            </div>
        );
    }
});

var Child = React.createClass({
    render : function() {
        return (<div>
            My child name is <strong>{this.props.name}</strong>
        </div>)
    }
});

ReactDOM.render(
    <Parent />,
    document.getElementById('content')
);