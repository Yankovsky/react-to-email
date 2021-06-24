import React from 'react'

import { Title } from '../../components/Title'
import { Text } from '../../components/Text'
import { StyledTable } from './styled'

export const MyExamplePage = () => {
  return <StyledTable>
    <Title>My Title</Title>
    <Text>My Text</Text>
  </StyledTable>
}