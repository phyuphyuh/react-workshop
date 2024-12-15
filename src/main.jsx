import './index.css';

import * as ReactDOM from 'react-dom/client';

import App from './App';

// function Hello() {
//   return <h1>Hello everyone!!</h1>;
// }
// function Hello( {name, age} ) {
//   // console.log(props.name);

//   // const name = props.name;
//   // const age = props.age;

//   // const { name, age } = props;

//   // const array = [1,2,3];
//   // const [one, two, three] = array;
//   // console.log(one);
//   // console.log(two);

//   // return (
//   //   <h1>
//   //     Hello, I'm {props.name}, {props.age} years old.
//   //   </h1>
//   // );
//   return (
//     <h1>
//       Hello, I'm {name}, {age} years old.
//     </h1>
//   );

// }

const rootContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(rootContainer);
// root.render(<h1>Hi everyone!</h1>);
// root.render(<Hello />);
// root.render(<Hello name="Jarod" age="21" />)
root.render(<App />);
