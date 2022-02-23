import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances({incomeTotal, expenseTotal}) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance  title="Incoming:" value={incomeTotal} color="green"/>
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance  title="Expenses:" value={expenseTotal} color="red"/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default DisplayBalances