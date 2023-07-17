import react from 'react';
export default function transalte(){
    return(
        <div className='container'>
            <div className='wrapper'>
                <div className='textinput'>
                   <textarea spellCheck="false" id="translate" placeholder="Enter text" cols="30" rows="10"></textarea>
                   <textarea readOnly spellcheck="false "id="translate" placeholder="translation" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div>
    )

}