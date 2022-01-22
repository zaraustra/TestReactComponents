import React from "react"
import styled, {css} from "styled-components"

export interface FlexProps {
  display?: "flex"| "inline-flex",
  justifyContent?: string
}

const Flex = styled.div<FlexProps>`
  ${({justifyContent, display}) => css`
    display: flex;
    ${display && `display: ${display};`}
    ${justifyContent && `justify-content: ${justifyContent};`}
  `}
`

export default Flex
