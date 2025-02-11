import React from "react";
import s from "./ErrorMessage.module.css";

// Определяем тип пропса
interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className={s.error}>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
