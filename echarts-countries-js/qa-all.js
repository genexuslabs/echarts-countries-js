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
	echarts.registerMap('countries/qa/qa-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Al Ghuwariyah"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ZPU~F`VJXhT@fkG]XM`XEXTRQxƐJ@¸ŘLF´@DsE÷ăěHDzȭE"],
				"encodeOffsets": [
					[52126, 26348]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Al Jumaliyah"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ȮFCyĜGK×·@åęATĹMĉGBśɯGF|QxE~AÎJOÄFVQVJXQT\\®LTY`xr\\DTWHePGHwLOhLYcf\\hDx[r_OWPX`|L^f`A^ce¡VYGclMRe^TAH^dTA\\[ZRA\\hn_@uOSQkXW`MnHNKT^"],
				"encodeOffsets": [
					[52126, 26348]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Al Khawr"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@øĄFÔBCņzYLGrcYfRR[WkWAR}¨r^ZRC×JRiCUoaOUCgvSN[[uA]UGcv_FWxSHkdCOyMIOiKImT[M]ƻDc`¸LØ"],
				"encodeOffsets": [
					[52481, 26318]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Al Wakrah"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@äGĂŎ¶IVRtTfoBkQ_LHWgBoRQtARMeOBKjQCNuvDI__WaKMWZO§}eYQa_QLWImMQAwœDK˔"],
				"encodeOffsets": [
					[52574, 25688]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ar Rayyan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@FÓĤNsLÂę^BhJUōµHāãQC`@\\nØ^RŠūASĺĚB"],
				"encodeOffsets": [
					[52519, 26099]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ash Shamal"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@DŅÓACt³@EŗK@·ƏIkHAzfTIVNbZPJdEpXdh@hPKL\\ZZZA\\VdMvdNv ~ZKh`ZFrazM²E¡nhWBZU"],
				"encodeOffsets": [
					[52648, 26584]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Doha"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@î|waxMMX@D]YECgr@ZQVRrOZ^l¥}SBQsSQg]AÁĚ"],
					["@@VRjSHeh"]
				],
				"encodeOffsets": [
					[
						[52682, 25967]
					],
					[
						[52770, 25984]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jariyan Al Batnah"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ɰHAŜĊHNŬB ş]Q×m@[_RDL˓ŔCqcIiWMw@YcSM]_QiZB`xjCjS`cES[aDW_ekO[Bm[I]zQvFpY`@PQ]kDQ}w@UµQ]MµOÕl}XÇ¯Č}¦¤zVn\\NW^EbPhBlInUpmbGfqr@brQUfg\\Cp"],
				"encodeOffsets": [
					[51992, 25733]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Umm Salal"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@d_ƼC_`kASfaViZMN[O]R[OSí{KMtģEÔ@æ"],
				"encodeOffsets": [
					[52519, 26182]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
