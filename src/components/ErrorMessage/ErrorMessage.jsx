import PropTypes from "prop-types";
import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => (
  <div className={s.error}>
    <p>{message}</p>
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
