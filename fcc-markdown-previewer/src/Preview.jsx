import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import "../node_modules/highlight.js/styles/stackoverflow-light.css";
import { useSelector } from "react-redux";
import Header from "./Header";

function Preview() {
    let text = useSelector((state) => state.markdown.markdown);
    const marked = new Marked(
        markedHighlight({
            langPrefix: 'hljs language-',
            highlight(code, lang) {
                const language = hljs.getLanguage(lang) ? lang : 'javascript';
                return hljs.highlight(code, { language }).value;
            }
        })
    );
    const addFormat = (text) => {
        let newText = "";
        let tag = null;
        text.split('\n').forEach((line) => {
            tag = line.match(/^<.*?>/) || tag;
            if (line && line[0] == '<') {
                newText += line + '\n';
            }
            else {
                newText += '<br>' + line + '\n';
            }
        });
        newText = newText.replace("<a", "<a target='_blank'");
        return newText;
    }
    let parsedText = addFormat(marked.parse(text));
    return (
            <div className="text-box half">
                <Header name="Preview" />
                <div id="preview" dangerouslySetInnerHTML={{__html: parsedText}}/>
            </div>
    );
}

export default Preview