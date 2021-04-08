import React from 'react';
import { Text } from '@occmundial/occ-atomic';

class Value extends React.Component {
    render() {
        return <div>
            <Text heading center>{this.props.title}</Text>
            <Text subheading center>{this.props.body}</Text>
        </div>;
    }
}

export default Value;
