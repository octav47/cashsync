class Serie {
	__type__ = 'spline'
	__data__ = []

	constructor ({ name }) {
		this.__name__ = name
	}

	set data (value) {
		this.__data__ = value
	}

	get data () {
		return this.__data__
	}

	set dashStyle (value) {
		this.__dashStyle__ = value
	}

	get data () {
		return this.__dashStyle__
	}

	toJSON () {
		return {
			type: this.__type__,
			name: this.__name__,
			data: this.__data__,
			dashStyle: this.__dashStyle__,
		}
	}
}

export default Serie