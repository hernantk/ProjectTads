import React from 'react'
import { Card, Heading, Text } from "native-base"

const StatsItem = ({item}) => {
    return (
        <>

            <Card style={styles.cardCnt} rounded={40} >
                <Heading>{item.country}</Heading>
                <Text>População: {item.population}</Text>
            </Card>

                <Card style={styles.cardCnt} backgroundColor="yellow.200" rounded={20}>
                    <Heading>Casos</Heading>
                    <Text>Ativos: {item.cases.active}</Text>
                    <Text bold>Novos: {item.cases.new}</Text>
                    <Text>Total: {item.cases.total}</Text>
                </Card> 

                <Card style={styles.cardCnt} rounded={20} backgroundColor="red.100">
                    <Heading>Mortes</Heading>
                    <Text bold>Novos: {item.deaths.new}</Text>
                    <Text>Total: {item.deaths.total}</Text>
                </Card> 

                <Card style={styles.cardCnt} rounded={20} backgroundColor="green.100">
                    <Heading>Testes</Heading>
                    <Text>Total: {item.tests.total}</Text>
                </Card>
                </>
                
 
    )
}
const styles = {
    cardCnt: {
         borderWidth: 1, 
 
         shadowColor: 'rgba(0,0,0, 0.0)', 
         shadowOffset: { height: 0, width: 0 },
         shadowOpacity: 0,
         shadowRadius: 0,
         
         
         elevation: 0 
   }
 };

export default StatsItem