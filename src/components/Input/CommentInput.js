import React from 'react'
import { useField } from 'formik'
import classNames from '../../helper/ClassMerger'

export default function CommentInput({...props}) {
    const [field,meta] = useField(props)
    const inputClass = classNames(
        'comment','form-control', meta.error && meta.touched && 'border-red'
    )
    return (
        <div className="mb-3">
            <input {...field} {...props} className={inputClass}/>            
            <div className='text-danger comment pt-1'>
                {meta.error && meta.touched && meta.error}
            </div>
        </div>
    )
}
