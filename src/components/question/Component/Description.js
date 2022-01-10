import React from 'react'

export default function Description({Description}) {
    function getText(html){
        var divContainer= document.createElement("div");
        divContainer.innerHTML = html;
        return divContainer.textContent || divContainer.innerText || "";
    }
    return (
        <div className='col-11 crop-text-2 py-4 ps-4'>
            {getText(Description)}
        </div>
    )
}
