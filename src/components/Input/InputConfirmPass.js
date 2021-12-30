import React from 'react'
import { Field, useField } from 'formik'

export default function InputConfirmPass({children,label,...props}) {
    const [field,meta] = useField(props)
    const inputClass = `form-control ${meta.error && meta.touched && 'border-red'}`
    return (
        <div className="mb-3">
            <label htmlFor={props.name} className="form-label">{label}</label>
            <input {...field} {...props} className={inputClass}/>
            {children}
            
            <div className='text-danger error-txt'>
                {meta.error && meta.error}
            </div>
        </div>
    )
}
