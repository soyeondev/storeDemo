import './App.css';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import TodoList from './todo/todoList';

function App() {
  return (
    <div className="App">
    <RecoilRoot>
      {/* <CharacterCounter /> */}
      <TodoList />
    </RecoilRoot>
    </div>
  );
}


// const textState = atom({
//   key: 'textState', // unique ID (with respect to other atoms/selectors)
//   default: '', // default value (aka initial value)
// });

// export function CharacterCounter() {
//   return (
//     <div>
//       <TextInput />
//       <CharacterCount />
//     </div>
//   );
// }

// function TextInput() {
//   // useRecoilState는 recoil을 통해 저장해야 할 값들을 변화시키는 역할을 함
//   // setter의 역할을 함
//   const [text, setText] = useRecoilState(textState); 

//   const onChange = (event) => {
//     setText(event.target.value); // setText를 통해서 useRecoilState를 사용
//   };

//   return (
//     <div>
//       <input type="text" value={text} onChange={onChange} />
//       <br />
//       Echo: {text}
//     </div>
//   );
// }
// // selector는 atom에 저장된 값을 바라보고 있으면서 값에 변화가 생기면 그 값을 처리하여 나타내줄 수 있음
// const charCountState = selector({
//   key: 'charCountState', // unique ID (with respect to other atoms/selectors)
//   get: ({get}) => {
//     const text = get(textState);

//     return text.length;
//   },
// });

// function CharacterCount() {
//   const count = useRecoilValue(charCountState);

//   return <>Character Count: {count}</>;
// }

export default App;
