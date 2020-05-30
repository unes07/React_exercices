class App extends React.Component {
    render() {
        return(
            <div>
                <Friend
                    name = "unes"
                    hobbies = {["Football", "reading"]}
                />
                <Friend
                    name = "Nb"
                    hobbies = {["me", "asking me", "cooking"]}
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));