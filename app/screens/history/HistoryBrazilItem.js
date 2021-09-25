import React from 'react'
import { Card, Heading, Text } from "native-base"

const HistoryBrazilItem = ({item}) => {
    return (
            <Card>
                <Heading size="md">{item.country} Dia: {item.day}</Heading>

                
            </Card>
    )
}

export default HistoryBrazilItem