import { useRef } from "react";
import "./Modal.css";
export default function Modal({children, close}) {
    const ref = useRef(null);
    function handleClick(e) {
        if(e.target === ref.current)
            close();
    }
    return (
        <div className="modal" onClick={handleClick} ref={ref}>
            {children}
        </div>
    );
}