import React from "react";
import { memo } from "react";

export const ChildArea = memo((props) => {
    const style = {
        width: "500px",
        height: "200px",
        backgroundColor: "green"
    }

    const { open, onClickClose } = props;

    const data = [...Array(2000).keys()];

    data.forEach(() => {
        console.log("hi")
    });

    return(
        <>
        {open ?
        (
            <div style={style}>
                <p>子コンポーネント</p>
                <button onClick={onClickClose}>閉じる</button>
            </div>
        ) : null} 
        </>
    );
})