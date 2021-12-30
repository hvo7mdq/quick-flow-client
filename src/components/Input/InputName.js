import React from 'react'
import { useField } from 'formik'

export default function InputName({label,...props}) {
    const [field,meta] = useField(props)
    const inputClass = `form-control w-100 ${meta.error && meta.touched && 'border-red'}`
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
