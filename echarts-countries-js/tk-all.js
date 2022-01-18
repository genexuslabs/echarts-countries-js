(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['exports', 'echarts'], factory);
	} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
		factory(exports, require('echarts'));
	} else {
		factory({}, root.echarts);
	}
}(this, function(exports, echarts) {
	var log = function(msg) {
		if (typeof console !== 'undefined') {
			console && console.error && console.error(msg);
		}
	};
	if (!echarts) {
		log('ECharts is not Loaded');
		return;
	}
	if (!echarts.registerMap) {
		log('ECharts Map is not loaded');
		return;
	}
	echarts.registerMap('countries/tk/tk-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Tokelau"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@LIT[C@[f"],
					["@@E`FC@["],
					["@@BJKBGPVMCM"]
				],
				"encodeOffsets": [
					[
						[-175308, -9559]
					],
					[
						[-175909, -9370]
					],
					[
						[-176608, -8768]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
