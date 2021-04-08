import React from 'react';
import { Grid, Checkbox, Text } from '@occmundial/occ-atomic';

const colSettings = { col: 2 }
const colorChart = [
    { color: 'black', back: 'black', font: '#fff' },
    { color: 'brown', back: 'maroon', font: '#fff' },
    { color: 'red', back: 'red', font: '#fff' },
    { color: 'orange', back: '#f90', font: '#000' },
    { color: 'yellow', back: '#ff0', font: '#000' },
    { color: 'green', back: '#00b050', font: '#000' },
    { color: 'blue', back: '#0070c0', font: '#000' },
    { color: 'violet', back: '#90f', font: '#fff' },
    { color: 'grey', back: '#a6a6a6', font: '#fff' },
    { color: 'white', back: '#ffffff', font: '#000' },
    { color: 'gold', back: '#ffd100', font: '#000' },
    { color: 'silver', back: '#ddd', font: '#000' },
    { color: 'pink', back: '#fdf', font: '#000' },
    { color: 'none', back: 'transparent', font: '#000' },
]

const capitalStr = (phrase) => phrase.charAt(0).toUpperCase() + phrase.slice(1)
const getLabel = (labelTxt, colorStyle) => (<Text large style={{ color: colorStyle.font }}>{labelTxt}</Text>)
const findColorStyle = (dbColor) => {
    let colorProps = colorChart.find(color => color.color === dbColor.toLowerCase())
    return colorProps === null
        ? { color: 'default', back: '#fff', font: '#000' }
        : colorProps
}

class Value extends React.Component {
    render() {
        return <>
            {this.props.rows.map(row => {
                let colorStyle = findColorStyle(row.color)
                return (
                    <Grid.Row style={{ background: colorStyle.back, color: colorStyle.font }}>
                        <Grid.Col xxs={colSettings} xs={colSettings} sm={colSettings} md={colSettings} lg={colSettings} xl={colSettings}>
                            {getLabel(capitalStr(row.color), colorStyle)}
                        </Grid.Col>
                        <Grid.Col xxs={colSettings} xs={colSettings} sm={colSettings} md={colSettings} lg={colSettings} xl={colSettings}>
                            {(
                                row.band !== null
                                    ? <Checkbox
                                        label={getLabel(row.band, colorStyle)}
                                        value={row.color === this.props.band1.band}
                                        onChange={(checked) => { this.props.band1.setBand(checked ? row.color : '') }} />
                                    : ''
                            )}
                        </Grid.Col>
                        <Grid.Col xxs={colSettings} xs={colSettings} sm={colSettings} md={colSettings} lg={colSettings} xl={colSettings}>
                            {(
                                row.band !== null
                                    ? <Checkbox
                                        label={getLabel(row.band, colorStyle)}
                                        value={row.color === this.props.band2.band}
                                        onChange={(checked) => { this.props.band2.setBand(checked ? row.color : '') }} />
                                    : ''
                            )}
                        </Grid.Col>
                        <Grid.Col xxs={colSettings} xs={colSettings} sm={colSettings} md={colSettings} lg={colSettings} xl={colSettings}>
                            {(
                                row.multiplier !== null
                                    ? <Checkbox
                                        label={getLabel('x10^' + row.multiplier, colorStyle)}
                                        value={row.color === this.props.band3.band}
                                        onChange={(checked) => { this.props.band3.setBand(checked ? row.color : '') }} />
                                    : ''
                            )}
                        </Grid.Col>
                        <Grid.Col xxs={colSettings} xs={colSettings} sm={colSettings} md={colSettings} lg={colSettings} xl={colSettings}>
                            {(
                                row.tolerance !== null
                                    ? <Checkbox
                                        label={getLabel(row.tolerance + '%', colorStyle)}
                                        value={row.color === this.props.band4.band}
                                        onChange={(checked) => { this.props.band4.setBand(checked ? row.color : '') }} />
                                    : ''
                            )}
                        </Grid.Col>
                    </Grid.Row>
                )
            })}
        </>;
    }
}

export default Value;