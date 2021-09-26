import React from 'react'
import { Card, Heading, Text } from "native-base"

const StatsItem = ({item}) => {
    return (
            <Card>
                <Heading size="md">{item.country}</Heading>

 
            </Card>
    )
}

export default StatsItem