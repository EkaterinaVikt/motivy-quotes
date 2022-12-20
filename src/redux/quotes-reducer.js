const GET_QUOTE = "GET_QUOTE";

const initialState = {
  quotes: [
    "Do it for your future self",
    "Будьте так увлечены улучшением собственной жизни, чтобы у вас не было времени ненавидеть, критиковать, судить, спорить и сплетничать о других",
    "The cost of procrastination is the life you could've had",
    "Человек становится самодостаточным лишь тогда, когда он уверен в себе и знает, на что способен сам, а не заставляет других поверить в это",
    "Focuse on the step in front on you, not the whole staircase",
    "Create a life you can't wait to wake up to",
    "Не ожидайте чудес от смартфона",
    "Неудача — обратная связь в процессе достижения успеха",
    "Нет ничего более постоянного, чем перемены",
    "Great things never come from comfort zone",
    "I'm doing this for me",
    "Учись не потому, что «надо». Учись потому, что знание — сила",
    "Будущее — сумма того, как ты проводишь каждый свой день в настоящем",
    "То, где ты сейчас находишься — необходимый этап",
    "Если устаёшь — научись отдыхать, а не сдаваться",
  ],
  quoteOfDay: null,
  background: "#000",
  buttonIsToggle: true,
};

const quotesReducer = (state = initialState, action) => {
  switch (action) {
    case GET_QUOTE:
      return {
        ...state,
        quoteOfDay: action.quote,
      };

    default:
      return state;
  }
};

export const getQuoteAC = (quote) => ({
  type: GET_QUOTE,
  quote,
});

export default quotesReducer;
