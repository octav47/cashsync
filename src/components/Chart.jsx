import React from 'react';
import Highstocks from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import SeriesFactory from '../Entities/SeriesFactory'

import { mean, median } from '../utils/array';
import { getDataItem } from '../utils/items'

import data from '../../data/data.json';

const { items } = data;

const seriesFactory = new SeriesFactory()


const options = {
  title: {
    text: 'Mean and median',
  },
  chart: {
    height: '800px',
  },
  legend: {
    enabled: true,
  },
  rangeSelector: {
    selected: 0,
  },
  xAxis: [
    {
      type: 'datetime',
      dateTimeLabelFormats: {
        month: '%e. %b',
        year: '%b',
      },
      title: {
        text: 'Date',
      },
    },
    {
      type: 'datetime',
      dateTimeLabelFormats: {
        // don't display the dummy year
        month: '%e. %b',
        year: '%b',
      },
      title: {
        text: 'Date',
      },
    },
  ],
  series: [
    seriesFactory.createArray('median 2w', 14, median),
    seriesFactory.createArray('mean 2w', 14, mean, {
      dashStyle: 'Dash',
    }),
    seriesFactory.createArray('median 1w', 7, median),
    seriesFactory.createArray('mean 1w', 7, mean, {
      dashStyle: 'Dash',
    }),
    seriesFactory.createArray('median 30d', 30, median),
    seriesFactory.createArray('mean 30d', 30, mean, {
      dashStyle: 'Dash',
    }),
    {
      type: 'spline',
      name: 'current balance',
      data: Object.keys(items).map(dateString => {
        const item = items[dateString];

        return getDataItem(dateString, item.current);
      }),
    },
  ],
};

const Chart = () => {
  return (
    <div>
      <HighchartsReact
        highcharts={Highstocks}
        constructorType={'stockChart'}
        options={options}
      />
    </div>
  );
};

export default Chart;
