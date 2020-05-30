class App extends React.Component {
    render() {
        return(
            <div>
                <Hello
                    to="unes" 
                    from="me"
                    bangs={4}
                    img="a.jpg"
                />
                <Hello
                    to="unes" 
                    from="me"
                    bangs={10}
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));