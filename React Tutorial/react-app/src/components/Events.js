import React, { useEffect, useRef } from "react";

const Events = () => {

    const handleClickEvent = (event) => {
        console.log(event.target.innerText);
    }

    const ref = useRef(null);

    useEffect(() => {
        const handleClick = event => {
          console.log('Button clicked');
        };
    
        const element = ref.current;
        element.addEventListener('click', handleClick);
    
        // 👇️ remove the event listener when the component unmounts
        return () => {
          element.removeEventListener('click', handleClick);
        };
      });

    const removeBtnEvent = () => {
        let btn = document.getElementById("btn");
        btn.removeEventListener("click", alert("Event removed"))
    }
    
    return (
        <>
            <div>
                <button ref={ref}>Click</button>
            </div>
            <button onClick={removeBtnEvent}>Remove Event</button>
            <button id="btn" onClick={handleClickEvent}>Click</button>
            <input type="text" onKeyPress={(e) => {console.log(e.key)}}></input>
        </>
    )
}

export default Events;