import CircularProgress from '@material-ui/core/CircularProgress';
import ClassNames from "./Loader.module.css";

const Loader = () => {
    return (
        <CircularProgress className={ClassNames.Loader} />
    );
}
export default Loader;