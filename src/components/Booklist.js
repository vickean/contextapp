import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

const BookList = (props) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map((el) => {
          return (
            <li key={el.id} style={{ background: theme.ui }}>
              {el.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
