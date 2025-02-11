import { RotatingLines } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader: React.FC = () => (
  <div className={s.loader}>
    <RotatingLines
      strokeColor="blue"
      strokeWidth="5"
      animationDuration="0.75"
      width="50"
      visible={true}
    />
  </div>
);

export default Loader;
