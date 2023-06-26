import shortid from "shortid";
export const ADD_REVIEW = "addReview";
const initialState = [
  {
    id: shortid.generate(),
    content: "hello",
  },
  {
    id: shortid.generate(),
    content: "hello",
  },
  {
    id: shortid.generate(),
    content: "hello",
  },
];

export const addReview = (payload) => {
  return {
    type: ADD_REVIEW,
    payload,
  };
};

const reviews = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_REVIEW":
      return { reviews: [...state.reviews, action.payload] };
    case "DELETE_REVIEW":
      return state.filter((review) => review.id !== action.payload);
    default:
      return state;
  }
};

export default reviews;
