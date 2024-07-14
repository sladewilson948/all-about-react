const rootElement = document.getElementById("root")

// types, prop, children

function HelloWorld() {
    // it is time ot use JSX now 
    // instead of all this
    // return React.createElement("h1", null, "Broski we are getting started with react fr fr")
    /// babble converrtst the JSX syntax to React Syntax k
    return (<>
            <h1>Hello World!!!</h1>
        </>)
}

ReactDOM.createRoot(rootElement).render(HelloWorld())