import React, {FC, useState} from "react"

import TextInput from "../components/TextInput"

const Homepage: FC = () => {
  const [text, setText] = useState("")
  return (
    <div>
      <h3>Test Text Input</h3>
      <TextInput onChange={setText} value={text} />
      <p>{text}</p>
    </div>
  )
}

export default Homepage
