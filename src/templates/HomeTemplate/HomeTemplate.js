import { Fragment } from "react";
import { Header } from "./Layout/Header/Header";
import { Footer } from './Layout/Footer/Footer';



export const HomeTemplate = (props) => {

    return (
        <Fragment>

            <Header />

            {props.children}
            <Footer />
        </Fragment>
    )
}