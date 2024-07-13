const rootElement = document.getElementById("root")

// types, prop, children
const ele1 = React.createElement("h1", null, "hello world!!")
// we just created an element
// we will now use the react dom library
ReactDOM.createRoot(rootElement).render(ele1)