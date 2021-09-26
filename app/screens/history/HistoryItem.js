import React from 'react'
import { Card, Heading, Text } from "native-base"

const HistoryItem = ({item}) => {
    return (
            <Card>
                <Heading size="md">{item.country} Dia: {item.day}</Heading>
                <Text>Populacao: {item.population}</Text>
                <Card>
                    <Heading>Casos</Heading>
                    <Text>Ativos: {item.cases.active}</Text>
                    <Text>Novos: {item.cases.new}</Text>
                    <Text>Total: {item.cases.total}</Text>
                </Card>
                <Card>
                    <Heading>Mortes</Heading>
                    <Text>Novos: {item.death.new}</Text>
                    <Text>Total: {item.death.total}</Text>
                </Card> 

                <Card>
                    <Heading>Testes</Heading>
                    <Text>Total: {item.tests.total}</Text>
                </Card>
 
            </Card>
 
    )
}

export default HistoryItem