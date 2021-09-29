import React from 'react'
import { Card, Heading, Text } from "native-base"

const StatsItem = ({item}) => {
    return (
            <Card>
                <Heading size="md">{item.country}</Heading>
                <Text>Populacao: {item.population}</Text>
            <Card>
                    <Heading>Casos</Heading>
                    <Text>Ativos: {item.cases.active}</Text>
                    <Text>Novos: {item.cases.new}</Text>
                    <Text>Total: {item.cases.total}</Text>
                </Card>
                <Card>
                    <Heading>Mortes</Heading>
                    <Text>Novos: {item.deaths.new}</Text>
                    <Text>Total: {item.deaths.total}</Text>
                </Card> 

                <Card>
                    <Heading>Testes</Heading>
                    <Text>Total: {item.tests.total}</Text>
                </Card>
 
            </Card>
    )
}

export default StatsItem