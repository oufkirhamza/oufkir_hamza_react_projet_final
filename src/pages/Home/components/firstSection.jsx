
import { useContext } from 'react';
import './firstSection.sass'
import { MyContext } from '../../../utils/contextProvider';
import { Footer, FooterSection } from '../../../layouts/footer';
export const FirstSection = () => {
    const [test, setTest] = useContext(MyContext)
    return (
        <>
        {/* <h1>Hello World!</h1>
        <h1>test</h1> */}
        {/* <FooterSection/> */}
        </>
    );
}
