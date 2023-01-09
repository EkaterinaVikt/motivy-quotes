## Не работает компонента QuoteOfDay

она получает в пропсах дату, но отображает пустую строку, и больше дата у неё не обновляется, хотя state переписан при клике на бтн. Видимо, этот state в компоненту QuoteOfDay уже не попадает, т.к. является локальным?
Также здесь явно неправильно сделаны приходящие пропсы -- это объект, в котором Array. И, конечно, оно отображается undefined при попытке сделать props.data.

## Модальное окно

В бигбаге было реализовано через диспатч. В редьюсере определяется state для modalActive: true/false. При клике вызывалась функция, которая в свою очередь вызывала dispatch() через const dispatch = useDispatch() (нужно посмотреть документацию о нём, это библиотека react-redux).

dispatch(setModalAction(AUTH_REQUEST, true));
В редьюсере action creator выглядит так (это thunk?):
export const setModalAction = (name, activate) => (dispatch) => {
dispatch({ name, type: activate ? OPEN_MODAL : CLOSE_MODAL });
};

Получается, при нажатии вызывается функция, эта функция диспатчит нужный экшн в редьюсер, и редьюсер изменяет state.

## BLL

В Reducer есть initialState. State содержит
{ background: #fcd,
button: 'active',
quote: "";
}

Порядок действий:

1. Изначальное состояние: quote: "", btn: true, localStorage: "";
2. Кнопка нажимается
3. Срабатывает рандомайзер, выдаёт число.
4. Получаем quote. State обновляется
5. Записываем quote в localStorage
6. Обращаемся к localStorage, получаем цитату, которую туда записали
7. Выводим эту цитату на экран.

Подумать вот об этом:
React.useEffect(() => {
document.documentElement.dataset.theme = theme -- вот здесь устанавливается dataset
localStorage.setItem('theme', theme)
}, [ theme ])

## Action:

Стору (store) нужны редьюсеры (reducer), чтобы работать со стейтом (state).
