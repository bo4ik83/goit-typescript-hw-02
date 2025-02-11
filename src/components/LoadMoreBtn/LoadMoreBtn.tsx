import React from "react";
import s from "./LoadMoreBtn.module.css";

// Описание типа для props
interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => (
  <button className={s.button} onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreBtn;
