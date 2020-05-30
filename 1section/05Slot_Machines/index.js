class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Slot Machines!</h1>
                <Machine 
                    e1="❤"
                    e2="😍"
                    e3="👍"
                />
                <Machine 
                    e1="❤"
                    e2="❤"
                    e3="❤"
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));