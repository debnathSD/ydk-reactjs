const React = {
	createElement: (tag, props, ...children) => { // children is an array
		if (typeof tag === "function") {
			return tag(props);
		}
		const element = {
            tag,
            props: {...props, children}
        };
		return element;
	},
}

const render = (reactElement, container) => {
    if (['string', 'number'].includes(typeof reactElement)) {
        container.appendChild(document.createTextNode(String(reactElement)));
        return;
    }

	const actualDomEle = document.createElement(reactElement.tag)
	
	// Now take the props, apply them on this actual DOM element, and nest rest of the children
	if (reactElement.props) {
		Object.keys(reactElement.props)
			// filter out children
			.filter(p => p !== "children")
			// for each of them, apply them on the actual DOM element
			.forEach(p => actualDomEle[p] = reactElement.props[p])

	}
	// for children, render recursively and continue same above process
	if (reactElement.props.children) {
	// Here render wach child inside the actualDomElement -> so now the container is actualDomEle
		reactElement.props.children.forEach(child => render(child, actualDomEle));
	}
	
	// At the last step, append the root to the container
	container.appendChild(actualDomEle);
}

let stateCursor = 0;
const states = [];

const useState = (initialState) => {
	// freeze the index value with currentr scope
	const cursorIdx = stateCursor;
	states[cursorIdx] = states[cursorIdx] || initialState; // its whether the value stored in our gobal state or the initial state
	const setState = newState => {
		states[cursorIdx] = newState;
        rerender();
	}
	
	//Move the stateCursor to next level
	stateCursor++;
	
	return [states[cursorIdx], setState];
}

const App = () => {
	const [name, setName] = useState("person");
    const [value, setValue] = useState(0);
	return (
		<div className="ydk-react">
			<h1>Hello, {name}!</h1>
			<input type="text" placeholder="name" value={name} onchange={e => setName(e.target.value)} />
            <div>
                <button alt="increment" onclick={e => setValue(value + 1)}>+</button>
                <button alt="decrement" onclick={e => setValue(value - 1)}>-</button>
            </div>
			<p>How are you?</p>
            <h1>{value}</h1>
		</div>
	)
};

const rerender = () => {
	stateCursor = 0;
	document.querySelector("#root").firstChild.remove(); // to remove duplicate React elements
	render(<App />, document.getElementById('root'));
};

render(<App />, document.getElementById('root'));