
import { useContext } from 'react';
import './firstSection.sass'
import { MyContext } from '../../../utils/contextProvider';
import { Brahim, Carousel, Carousell } from './carousel';

export const FirstSection = () => {
    const [test, setTest] = useContext(MyContext)
    return (
        <>
            <Carousell />
        </>
    );
}
