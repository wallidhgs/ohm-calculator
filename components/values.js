import React from 'react';
import { Flexbox } from '@occmundial/occ-atomic';
import Value from './value';

class Values extends React.Component {
    render() {
        return <Flexbox display="flex" justifyContent="evenly" style={{marginLeft:'100px', marginRight:'100px'}}>
            <Value title='Resistance' body={(this.props.result.resistance > -1 ? `${this.props.result.resistance} Ω` : '?')} />
            <Value title='Minimum' body={(this.props.result.tolerance.min > -1 ? `${this.props.result.tolerance.min} Ω` : '?')} />
            <Value title='Maximum' body={(this.props.result.tolerance.max > -1 ? `${this.props.result.tolerance.max} Ω` : '?')} />
      </Flexbox>;
    }
}

export default Values;
