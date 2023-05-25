import React, { useState, useCallback } from "react";
import { ChildArea } from "./components/ChildArea";

export const App = () => {
    const [inputText, setInputText] = useState("");
    const [open, setOpen] = useState(false);

    const onChangeText = (e) => setInputText(e.target.value);
    const onClickButton = () => setOpen(!open);
    const onClickClose = useCallback(() => setOpen(false),[]);

    return(
        <>
        <div className="App">
            <input 
                placeholder="InputText"
                onChange={onChangeText}
                value={inputText}
            />
            <button onClick={onClickButton}>表示</button>
            <ChildArea 
                open={open}
                onClickClose={onClickClose}
            />
        </div>
        </>
    );
}