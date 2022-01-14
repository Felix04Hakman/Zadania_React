const Input = ({setInput, handleInput, value }) =>{
       return <input onKeyPress={ setInput } onChange={handleInput } value={ value } type="text"
                  placeholder='Whats needs to be done?'/>
}

export default Input;