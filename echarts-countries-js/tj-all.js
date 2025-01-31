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
	echarts.registerMap('countries/tj/tj-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Districts of Republican Subordination"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@˂ÖþƬʰƘÐľNÒĚN¸ĩþÈmäŐDø¶ȒSŜ¤ȖȔĎ°ēŨ_źpîƚ¦ʘVŏȌUĵ¦¥ĮNİðÐčØE¢íyÃơƁNƓ¹¯ŃoŃ·ĻkƓŽūRęĺęO¹ǒȗ£Ʒý­ŻšïúƻTœĜĝSŧĽÓlďĳȋƑ·ÌũƵoŅÛġZŭi}şµãnõÝđƿIzİÐ²vĪď´ũĴïƆVĴĬɄ"],
				"encodeOffsets": [
					[69834, 39839]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gorno-Badakhshan Autonomous Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@żŢ®Ƹþ¤ȘºǑĚPĚĹŬQƔžļlń¸ńpº°MƔƢƂzÄĪżȸxȸ©Ȫ|ĀoĬzǖþà¿¥ŗÐĞōúÍ÷ąSµÅÌċq¼ĵƼñîðĦ|ˎƙŨs°ƍO¯ĊwpīĆ»GƗ°ĕÏñąǼůićȭÃéĆŉĩUƹċmùÉȁĹÅǳ`¼ČJĄŕMŁŋwé`ųµ±ãšƩăħƩ˱ʵƛƥŋƗQĥþŋʖlŶVʎªǀ¢îGĲÉ~ǑÇ»ĆĠƨEĆǭŌįpµÞÇµųtƉğıȍŅÅ×Ëa¤ÊĶ^ʊêØ"],
				"encodeOffsets": [
					[72130, 39441]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Khatlon Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǀJÞĒmö¶ä~ŠŮjĢYņÜƶpŪ¸ËȌƒĐĴÔkŨľĞTŔěƼSðùé×]ʉÉĵb£ĳ³\\ãĨçŇŁġƩ ʝģVĹŋǡkÝí£ĩEȯǪʡ¥½Ýíǻ¡¡ėáRĻïɧƘNþ¸ĮĸĶưǚĎǀŜm"],
				"encodeOffsets": [
					[69918, 38822]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sughd Province"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ȓčȕś£ȑT÷µŏCnãÇý·ĪęMÑĽMƗÏʯƫÕýˁđĲơH«sƑAyŨɱæòŸ©ĶjÚ˲êŪµɲ¡ʤiĘĚ`ǸȨX¸Àëĸĺf ô͍ÝčÊȺºɌtɨCƢĶ»¬ŎhǀĈrø}ĴŃľÊɲ®ʮŤrňÖ^ê½ƀƳðÁʥȉƇ£ÛƨdħºÃņVdËĝaCý«©çøĝTŏÒĭ\\Żò́ĹŝR{ézåßc¿Êćçwā´ėVƣĢeƴÆǘʤvƴ³ǺþŀÂã"],
					["@@ǈWûñċĊ"]
				],
				"encodeOffsets": [
					[
						[72411, 40451]
					],
					[
						[72219, 40834]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
