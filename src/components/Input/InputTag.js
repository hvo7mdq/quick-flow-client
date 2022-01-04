import { FieldArray, useField } from 'formik'
import React,{useState} from 'react'

export default function InputTag({tags,label,...props}) {
    const [field,meta] = useField(props)
    const [input,setInput] = useState('')
    const onSpace = (e,arrayHelpers) => {
        const {key} = e
        const trimmedInput = input.trim()

        if(key === ' ' && trimmedInput.length && !tags.includes(trimmedInput)){
            e.preventDefault()
            arrayHelpers.push(input)
            setInput('');       
        }
    }

    const onChange = (e) => {
        const { value } = e.target;
        setInput(value);
      };

    return (
        <>
        <FieldArray name="tags" 
        render={arrayHelpers=>(
            <>            
                {tags && tags.length>0 ? tags.map((tag,index)=>(
                    <div key={index} className='text-primary d-inline rounded mx-1 px-1 py-1 tags border'>
                        {tag}                        
                    <button type="button" className='btn pt-0' onClick={() => arrayHelpers.remove(index)} > x</button>
                    </div>
                )):<></>}
                <input 
                    {...field} 
                    {...props}  
                    value={input}
                    className='mt-3 mb-2 form-control w-25' 
                    onChange={onChange} 
                    onKeyDown={(e)=>onSpace(e,arrayHelpers)}  
                    placeholder="Enter maximum 5 tag"  
                />
            </>
        )}
        ></FieldArray>
        <div className='text-danger error-txt pb-2'>
            {meta.error && meta.touched && meta.error}
        </div>
        </>
    )
}
