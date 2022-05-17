import * as ReactDOM from "react-dom";
import "./Modal.css";

function Modal (props) {
    const ModalContent = <div className="Modal">
        { props.children }
    </div>
    
    return ReactDOM.createPortal(
        ModalContent,
        document.getElementById("modal")
    );
}

export { Modal };