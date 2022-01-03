import React from 'react'
import Description from '../../components/question/Description'
import Title from '../../components/question/Title'
import Upvotes from '../../components/question/Upvotes'
import SecondaryLayout from '../../layout/SecondaryLayout'

export default function SingleQuestion() {
    return (
        <SecondaryLayout>
            <div className='row ms-auto px-3 py-4 content border'>
                <Upvotes upvotes="3" />
                <Title title="Title"/>
                <Description Description="asdsad" />
            </div>
        </SecondaryLayout>
    )
}
