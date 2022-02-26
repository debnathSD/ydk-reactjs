let stateCursor = 0;
const states = [];

// const React = {
// 	createElement: (tag, props, ...children) => { // children is an array
// 		if (typeof tag === "function") {
// 			return tag(props);
// 		}
// 		const element = {
//             tag,
//             props: {...props, children}
//         };
// 		console.log(element)
// 		return element;
// 	},
// }

// const render = (reactElement, container) => {
//     if (['string', 'number'].includes(typeof reactElement)) {
//         container.appendChild(doucument.createTextNode(String(reactElement)));
//         return;
//     }

// 	const actualDomEle = document.createElement(reactElement.tag)
	
// 	// Now take the props, apply them on this actual DOM element, and nest rest of the children
// 	if (reactElement.props) {
// 		Object.keys(reactElement.props)
// 			// filter out children
// 			.filter(p => p !== "children")
// 			// for each of them, apply them on the actual DOM element
// 			.forEach(p => actualDomEle[p] = reactElement.props[p])

// 	}
// 	// for children, render recursively and continue same above process
// 	if (reactElement.props.children) {
// 	// Here render wach child inside the actualDomElement -> so now the container is actualDomEle
// 		reactElement.props.children.forEach(child => render(child, actualDomEle));
// 	}
	
// 	// At the last step, append the root to the container
// 	container.appendChild(actualDomEle);
// }

// const useState = (initialState) => {
// 	// freeze the index value with currentr scope
// 	const cursorIdx = stateCursor;
// 	states[cursorIdx] = states[cursorIdx] || initialState; // its wither the value stored in our gobal state or the initial state
// 	const setState = newState => {
// 		states[cursorIdx] = newState;
// 		rerender();
// 	}
	
// 	//Move the stateCursor to next level
// 	stateCursor++;
	
// 	return [states[cursorIdx], setState];
// }

const App = () => {
	// const [name, setName] = useState("person");
	return (
		<div className="ydk-react">
			<h1>Hello, {name}!</h1>
			<input value={name} onChange={e => setName(e.target.value)} placeholder="name" />
			<p>How are you?</p>
		</div>
	)
};

// render(<App />, doucment.getElementById('root'));

// const rerender = () => {
// 	stateCursor = 0;
// 	document.querySelector.firstChild.remove("#root"); // to remove duplicate React elements
// 	render(<App />, doucment.getElementById('root'));
// };