# Try Redux

### Redux : 전역으로 상태관리를 하기 위한 라이브러리

- dispatch로 action을 reducer로 보내주면 reducer는 요청이 오는 action에 따라서
  상태값을 변경시켜 준다.
- 직접 값을 바꾸는게 아니라 무조건 dispatch action 값에 맞게 값이 수정되어야 한다.

#### - reducer( state , action )

```javascript
export default function countReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCRESE':
      return {
        ...state,
        count: state.count + 1,
      };
```

reducer는 state , action 두 가지 파라미터를 받는다.
action은 dispatch로 보낼때 type값을 넣어서 보내준다.

#### - dispatch( { type : action.type , payload : data } )

dispatch는 리덕스로 상태값을 변경시킬때 쓰는 훅이다 .
type에는 특정 액션을 스트링 형식으로 보내주고, data같은 경우에는 payload에 담아서 보내준다.

####reducer를 rootReducer로 묶어준다.

```javascript
import countReducer from './CounterReducer';
export const rootReducer = combineReducers({
  countReducer: countReducer,
});
```

### Redux를 사용하려면 Provider 로 컴포넌트를 감싸줘야 한다.

provider store={store}를 넣어줘야 하는데 store는 생성해 줘야 한다.

```javascript
const store = createStore(
  rootReducer,
);
return (
  <Provider store={store}>
    <App />
  </Provider>;
)
```

#### Redux 상태값을 이용해서 사용할때는 useSelector( ) 사용한다.

```javascript
const count = useSelector((state) => state.countReducer.count);
```
