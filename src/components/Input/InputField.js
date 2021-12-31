import React from 'react'
import { useField } from 'formik'
import classNames from '../../helper/ClassMerger'

export default function InputField({children,label,...props}) {
    const [field,meta] = useField(props)
    const inputClass = classNames(
        'form-control', meta.error && meta.touched && 'border-red'
    )
    return (
        <div className="mb-3">
            <label htmlFor={props.name} className="form-label">{label}</label>
            <input {...field} {...props} className={inputClass}/>
            {children}
            
            <div className='text-danger error-txt'>
                {meta.error && meta.touched && meta.error}
            </div>
        </div>
    )
}
