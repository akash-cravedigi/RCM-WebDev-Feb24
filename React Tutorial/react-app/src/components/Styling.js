import React from "react";
import "./Styling.css";
import styles from "./CssStyles.module.css";

const Styling = () => {

    let itemStyle2 = {
        padding: "10px",
        border: "2px solid black"
    }
    return (
        <>
            <div style={itemStyle2}>Div Tag 2</div>
            <div className={styles.itemStyle}>Div Tag</div>
            <span style={{backgroundColor:"red",color: "white", border:"2px solid red"}}>
                This is inline style
            </span>
        </>
    )
}

export default Styling;