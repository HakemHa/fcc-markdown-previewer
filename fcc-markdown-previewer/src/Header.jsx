import ReactDOMServer from 'react-dom/server';
import FCCSVG from "./assets/free-code-camp.svg?react";
import ExpandSVG from "./assets/expand.svg?react";
import MinimizeSVG from "./assets/minimize.svg?react";

function Header({name}) {
    return (
        <div className="header">
            <span><FCCSVG /><p>{name}</p></span><button onClick={changeSize}><ExpandSVG /></button>
        </div>
    )
}

function changeSize(e) {
    e.preventDefault();
    let changeDiv = e.target;
    while(!changeDiv.classList.contains('text-box')) {
        changeDiv = changeDiv.parentNode;
    }
    let btn = e.target;
    while(btn.tagName != "BUTTON") {
        btn = btn.parentNode;
    }
    if (changeDiv.classList.contains('half')) {
        changeDiv.classList.add('full');
        changeDiv.classList.remove('half');
        document.querySelectorAll('.half').forEach((div) => div.style.display = 'none');
        btn.innerHTML = ReactDOMServer.renderToString(<MinimizeSVG />);
    }
    else {
        changeDiv.classList.add('half');
        changeDiv.classList.remove('full');
        document.querySelectorAll('.half').forEach((div) => div.style.display = 'block');
        btn.innerHTML = ReactDOMServer.renderToString(<ExpandSVG />);
    }
}

export default Header