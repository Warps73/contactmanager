import React from 'react';
import {
    Button
} from 'reactstrap';

const Increase: React.FC = (props) => {
    const [countClick, setCountClick] = React.useState(0);
    const clickMe = () => setCountClick(countClick + 1);
    const clickMeLess = () => setCountClick(countClick - 1);
    return (
        <React.Fragment>
            <Button onClick={clickMe} >More</Button>
            <Button onClick={clickMeLess} >Less</Button>
            <div>{countClick}</div>
        </React.Fragment>
    );
};

export default Increase;
