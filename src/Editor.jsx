import { useDispatch, useSelector } from "react-redux";
import { changeText } from "./store/slice";
import Header from "./Header";

function Editor() {
    const dispatch = useDispatch();
    let text = useSelector((state) => state.markdown.markdown);

    const updateText = (action) => {
        dispatch(changeText(action.target.value));
    }
    return (
        <div className="text-box half">
            <Header name="Editor" />
            <textarea name="editor" id="editor" onChange={updateText} value={text} />
        </div>
    )
}

export default Editor;