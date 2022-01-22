import React, {FC} from "react"
import styled from "styled-components"

const Input = styled.input`
  border-radius: 8px;
  border: 2px solid #bbb;
  padding: 8px;
  box-shadow: 3px 3px 5px #ccc;
`

interface Props {
  value?: string,
  onChange: (str: string) => void
}

const TextInput: FC<Props> = ({value = "", onChange}) => {
  return (
    <Input
      type="text"
      data-testid="text-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default TextInput
