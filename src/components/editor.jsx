import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Box, color } from '@mui/system';
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material";
import { tokens } from '../theme';

const Editor_Wrapper = styled(Box)((props) => ({
    // background:'red',
    padding:'10px, 25px',
    overflow: 'hidden',
    width: '90%',
    margin: 'auto',
    "& .ck-editor__main > .ck-editor__editable": {
        minHeight: "500px",
        backgroundColor: props.bgcolor == 'dark'?'#1F2A40':'#fff'
    }
}));


export default function Editor() {
    const theme = useTheme();
    return (
        <Editor_Wrapper 
        bgcolor = {theme.palette.mode}
        >
            <h1>Write the post</h1>
            <CKEditor
                editor={ClassicEditor}
                data="<p style='color:red'>Hello from CKEditor 5!</p>"
                onReady={editor => {
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
        </Editor_Wrapper>
    )
}