import MUIRichTextEditor from 'mui-rte'
import './mui.css';

export default function RichTextEditor() {

    function myBlockStyleFn(contentBlock) {
        const type = contentBlock.getType();
        console.log(type)
        if (type === 'unstyled') {
            return 'sampleFont';
        }
    }
    return (
        <MUIRichTextEditor
            toolbarButtonSize={"small"}
            draftEditorProps={
                {
                    blockStyleFn:  myBlockStyleFn,
                }}
        />
    )
}
