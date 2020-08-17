import Serie from './Serie'
import {
	getDataItem
} from '../utils/items'

import data from '../../data/data.json';

const {
	items
} = data;

class SeriesFactory {
	__seriesMap__ = {}

	createArray(
		name,
		maxArrayLength,
		mathFunc,
		seriesOptions = {
			dashStyle: 'Solid',
		},
		options = {
			getter: item => item.spending.sum,
		}
	) {
		if (!this.__seriesMap__[name]) {
			this.__seriesMap__[name] = [];
		}

		const serie = new Serie({
			name
		})

		serie.data = Object.keys(items).map(dateString => {
			const item = items[dateString];

			if (this.__seriesMap__[name].length === maxArrayLength) {
				this.__seriesMap__[name] = this.__seriesMap__[name].slice(1);
			}

			this.__seriesMap__[name].push(options.getter(item));

			return getDataItem(dateString, mathFunc(this.__seriesMap__[name]));
		})

		serie.dashStyle = seriesOptions.dashStyle

		return serie.toJSON();
	}
}

export default SeriesFactory