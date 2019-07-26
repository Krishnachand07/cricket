import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data)
{
    return _.round(_.sum(data)/data.length); //using _ lodash for straight forward calculation...
}

export default function Chart(props) { // props using for which data would be passed that will used here...
  return (
    <div>
        <Sparklines height={150} width={180} data={props.data}>
            <SparklinesLine color={props.color} />
            <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>
        {average(props.data)} {props.unit}
    </div>
    </div>
  );
}
//functional component..


