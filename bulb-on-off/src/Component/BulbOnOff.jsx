import React, { useState } from 'react';

const BulbOnOff = (props) => {
    const [lightOn, setLightOn] = useState(true);
    // const { white, yellow} = props
    return(
        <div>
               <div onClick={() => {setLightOn(!lightOn)}} className="App">
      {lightOn === false ? <img src={props.white} /> : <img src={props.yellow} />}
    </div>
        </div>
    )
}
export default BulbOnOff;