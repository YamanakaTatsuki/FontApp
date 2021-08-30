import MUIRichTextEditor from 'mui-rte'
import DoneIcon from '@material-ui/icons/Done'
import { EditorState } from 'draft-js'
import './mui.css';

export default function RichTextEditor() {

    function myBlockStyleFn(contentBlock) {
        const type = contentBlock.getType();
        console.log(type)
        if (type === 'unstyled') {
            return 'sampleFont';
        }
    }

    const style = {
        fontSize:36,
        fontFamily:'ScrumFontLine-Bold'
    }

    return (
        <MUIRichTextEditor
            controls={["title", "bold", "italic", "underline", "strikethrough", "highlight", "undo", "redo", "numberList", "bulletList", "quote", "code", "clear"]}
            customControls={[
                {
                    name:'title',
                    type:'inline',
                    inlineStyle:{style}
                }
            ]}
            draftEditorProps={
                {
                    blockStyleFn:  myBlockStyleFn,
                }}/>
    );}
