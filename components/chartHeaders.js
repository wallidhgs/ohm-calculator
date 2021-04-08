import React from 'react';
import { Grid, Text } from '@occmundial/occ-atomic';

const colSettings = { col: 2 }

class ChartHeaders extends React.Component {
    render() {
        return <>
          <Grid.Row>
            <Grid.Col xxs={colSettings} xs={colSettings} sm={colSettings} md={colSettings} lg={colSettings} xl={colSettings}></Grid.Col>
            <Grid.Col xxs={colSettings} xs={colSettings} sm={colSettings} md={colSettings} lg={colSettings} xl={colSettings}><Text large>Band A</Text></Grid.Col>
            <Grid.Col xxs={colSettings} xs={colSettings} sm={colSettings} md={colSettings} lg={colSettings} xl={colSettings}><Text large>Band B</Text></Grid.Col>
            <Grid.Col xxs={colSettings} xs={colSettings} sm={colSettings} md={colSettings} lg={colSettings} xl={colSettings}><Text large>Band C</Text></Grid.Col>
            <Grid.Col xxs={colSettings} xs={colSettings} sm={colSettings} md={colSettings} lg={colSettings} xl={colSettings}><Text large>Band D</Text></Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col xxs={colSettings} xs={colSettings} sm={colSettings} md={colSettings} lg={colSettings} xl={colSettings}><Text large>Color</Text></Grid.Col>
            <Grid.Col xxs={colSettings} xs={colSettings} sm={colSettings} md={colSettings} lg={colSettings} xl={colSettings}><Text large>1st Digit</Text></Grid.Col>
            <Grid.Col xxs={colSettings} xs={colSettings} sm={colSettings} md={colSettings} lg={colSettings} xl={colSettings}><Text large>2nd Digit</Text></Grid.Col>
            <Grid.Col xxs={colSettings} xs={colSettings} sm={colSettings} md={colSettings} lg={colSettings} xl={colSettings}><Text large>Multiplier</Text></Grid.Col>
            <Grid.Col xxs={colSettings} xs={colSettings} sm={colSettings} md={colSettings} lg={colSettings} xl={colSettings}><Text large>Tolerance</Text></Grid.Col>
          </Grid.Row>
        </>;
    }
}

export default ChartHeaders;
