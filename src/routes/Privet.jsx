import { PropTypes } from 'prop-types';
const Privet = ({children}) => {
    return (
        <div>
            <h2 className="text-white">Hlw Privet Routes</h2>
            {children}
        </div>
    );
};


export default Privet;


Privet.propTypes = {
    children: PropTypes.node
}