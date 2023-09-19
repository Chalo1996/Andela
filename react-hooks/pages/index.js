import React, {useState} from 'react';

const InputElement = () => {
  const [ inputText, setInputText ] = useState( "" );
  const [ historyList, setHistoryList ] = useState( [] );
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Text"
        onChange={
          (e) => {
            setInputText( e.target.value );
            setHistoryList( [ ...historyList, e.target.value ] );
          }
        }
      />
      <p>{ inputText }</p>
      <hr /><br />
      <ul>
        {
          historyList.map( ( item ) => {
            return (
              <div>
                { item }
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}

export default InputElement;
