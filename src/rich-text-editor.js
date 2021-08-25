import MUIRichTextEditor from 'mui-rte'
import DoneIcon from '@material-ui/icons/Done'
import { EditorState } from 'draft-js'

export default function RichTextEditor() {

    return (

        <MUIRichTextEditor
            controls={["title"]}
            toolbarButtonSize={"small"}
            customControls={[
                {
                    name: "my-callback",
                    icon: <DoneIcon />,
                    type: "callback",
                    onClick: (editorState, name, anchor) => {
                        console.log(`Clicked ${name} control`)
                        return EditorState.createEmpty()
                    }
                }
            ]}
        />
    )
}
