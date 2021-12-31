import React from 'react'
import SecondaryLayout from '../../layout/SecondaryLayout'

export default function Home() {
    return (
        <>
            <SecondaryLayout>
            <div className='ms-auto px-3 py-4 content border'>
                <div>
                    Top Questions
                </div>
                <div className='row mt-3'>
                    <div className='col-1 border'>
                        Votes
                    </div>
                    <div className='col-11 border'>
                        Question ko title yeta hunxa
                    </div>
                    <div className='col-1 border'>
                        Answers
                    </div>
                    <div className='col-11 border'>
                        Question ko hlka description jati Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nulla aperiam ratione dignissimos ad. Sunt dolores quae maiores optio, consectetur fuga aliquam nihil necessitatibus soluta, exercitationem beatae illo odit laboriosam!
                    </div>
                    <div className='col-12 border'>
                        tag tag tag tag
                    </div>
                </div>
            </div>
            </SecondaryLayout>
        </>
    )
}
