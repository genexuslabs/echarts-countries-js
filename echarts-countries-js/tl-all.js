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
	echarts.registerMap('countries/tl/tl-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Aileu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XDâhFbIBwpK`e@gn}Asa©EbpKX­IaWyµ{TWaXx¬SnXPW´"],
				"encodeOffsets": [
					[128530, -8824]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ainaro"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@djvTx@´S¶|Xzb®JLWaoGumÛcsB}q]kiOnDªt_fsXriG^wMwMÏEemCO`pqZ@flLfuVOz¤hnfn"],
				"encodeOffsets": [
					[128448, -9205]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Baucau"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Nb_j@d}dSL±¹gQĥV{EKZZÏDaA}^¥UD§f{Uo¼PzM_pPzMlbpJxnFnrjC\\m¨]¢}îÜ"],
				"encodeOffsets": [
					[129757, -8613]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bobonaro"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@BLQ CreCb[lnÏqR±n_ÂGemm£gPyvUKek@erYoZsh§fb\\k~\\ B¬S@o~qoayK«fQhD®ÐZ~L~PvK "],
				"encodeOffsets": [
					[128094, -8951]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cova Lima"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¨egtYP_Dn£yiG«µ«Ecmk]^A }FlcPyzQ_nB¤j@pKpqtJ"],
				"encodeOffsets": [
					[128181, -9390]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Dili"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@jsqsWE{¯OJaEágNà\\Mº@JnªEjW¶VdX¢Td\\"],
					["@@j@F{Q}o{ASykosXk@{pvPÊî"]
				],
				"encodeOffsets": [
					[
						[128847, -8694]
					],
					[
						[128634, -8329]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ermera"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@d|AVÔ²t@h°@X³OWTmw«bWX@³SwuciÁHm`Q²rmÐka\\Dqf"],
				"encodeOffsets": [
					[128186, -8961]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lautém"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@_ÊhR²ºKcTc~@ia`M^RghHĴ¶|pxVJrclGbi¬IVzpbC¤ObQDiOkw{]m}ąÇïýKY½@y}Y}M·ZiS"],
					["@@kPAjnB@{"]
				],
				"encodeOffsets": [
					[
						[129783, -8967]
					],
					[
						[130388, -8647]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Liquiçá"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@MßWC¯@gs@Ó±U{BcDKRAT~Elr¦Ö|N¸D^ZĚx|SpF\\ZlA~h"],
				"encodeOffsets": [
					[128549, -8742]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Manatuto"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°P|XFrtitt`ŖYoØOz^PlM`NOyp»¥Y¯F£Áa[@w·LÕZav]Xu[¡msfJ]`Jgbc®`³DbªBtm~@h_foLAx"],
				"encodeOffsets": [
					[128733, -8787]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Manufahi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@F´C_­dhaI_^Iten­y«sçVwoHgqAyyqjWets`©CmjP^l~rtAdnÜHv"],
				"encodeOffsets": [
					[128707, -9016]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Oecusse"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`pBtjDbb\\~XBNT^PX¼DX\\\\LzOSCYaRm_CeK{D{smZmmieBR¦s´|oUw{O_faE¹Î"],
				"encodeOffsets": [
					[127019, -9564]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Viqueque"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@|V¨eC¦V~]bBÐCYLY|FĦU`ÉiB³YsF£§}aa]É@³_§gÝNE]Wu^YbKÖ¸@xb\\¤Â°E¦Z"],
				"encodeOffsets": [
					[129250, -8885]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
