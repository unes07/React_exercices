class App extends React.Component {
    render() {
        return(
            <div>
                <Hello to="unes" from="me"/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));