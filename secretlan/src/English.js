

function English(props) {
    let [text, setText] = props.text
    let onInput = (e) => {
        setText(e.target.value)
        
    }
    return(
        <div>
            <p>engish goes here</p>
             <textarea id="landiv" onChange={onInput}>

            </textarea>
        </div>
    )
}

export default English