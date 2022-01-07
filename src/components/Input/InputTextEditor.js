import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function InputTextEditor({onChange,description}) {
    const onChanged = (val) => {
        // console.log("changed")
        onChange(description,val)
    }
    const  modules  = {
        toolbar: [
            [{ font: [] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script:  "sub" }, { script:  "super" }],
            ["blockquote", "code-block"],
            [{ list:  "ordered" }, { list:  "bullet" }],
            [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
            ["link", "image", "video"],
            ["clean"],
        ],
    };
    return (
        <ReactQuill className='mb-3' modules={modules} onChange={onChanged} theme="snow" placeholder="Content goes here..."/>
    )
}
