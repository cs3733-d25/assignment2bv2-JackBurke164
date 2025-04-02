import { useState } from 'react'

function Intro(props) {

    const [name1] = useState(props.nameOne);
    const [name2] = useState(props.nameTwo);

    return (
        <div>
            <p>Hi, my name is {name1} (but I usually go by Jack) and I'm a Junior and a CS major.</p>
            <p>Hello, my name is {name2}. I am a Junior RBE major from Camden, ME. Among other things one of my favorite hobbies is snowboarding</p>
        </div>
    )
}
export default Intro