import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import shortid from "shortid";

const Detail = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  const reviews = useSelector((state) => state.reviews);

  const todo = todos.filter((todo) => todo.id === id)[0];

  return (
    <>
      <div>
        {todo.id}
        <br />
        {todo.title}
        <br />
        {todo.body}
        <br />
        {todo.isDone.toString()}
        <br />
        <button onClick={() => navigate("/")}>이전 화면으로</button>
      </div>
      <div>
        <input
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch({
              type: "ADD_TODO",
              payload: {
                id: shortid.generate(),
              },
            });
          }}
        >
          작성
        </button>
        {reviews.map((r) => {
          return (
            <div
              style={{
                border: "1px solid black",
                margin: "10px",
                padding: "10px",
              }}
            >
              <li
                style={{
                  listStyle: "none",
                }}
              >
                content : {r.content}
              </li>
              <li
                style={{
                  listStyle: "none",
                }}
              >
                id : {r.id}
              </li>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Detail;
