import React from 'react'
import { useField } from 'formik'
import classNames from 'classnames'

export default function InputName({label,...props}) {
    const [field,meta] = useField(props)
    const inputClass = classNames({
        'form-control' : true,
        'border-red' : meta.error && meta.touched
    })
    return (
        <>
            <label htmlFor={props.name} className="form-label">{label}</label>
            <input {...field} {...props} className={inputClass}/>
            <div className='text-danger error-txt'>
                {meta.error && meta.touched && meta.error}
            </div>
        </>
    )
}
