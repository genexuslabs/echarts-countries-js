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
	echarts.registerMap('countries/tm/tm-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Ahal"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ü¿ŐÔɴ|ϬjȒØ̊Ȕ¥Ŵċ̘MӂRY̏¾×ǖòŵƠvі\\oƣǯÝ̗ŗQįı§ŚΡȖƏǔɅĩ£ĿġþɛȐƨËĔíƋñóŢƛЦԳ֑ĢqQùįÃþŇÓŃŋdxžİû|ĐŸïʀƀĈЃqˣNßņćúŁƢĥlƅêǵLi®şŎIƌ¦ĽaƙĲőɕ_ī¨©µɫoúƧțĀǹÉeƏâtÞœǖ×Dćã¿ÂƳĚƻvşÌHĊƎʎȊՂê´hƆ³òWŘÔƌè"],
				"encodeOffsets": [
					[58501, 41029]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Balkan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÄƽƊƓżɵĤéłɥŁĬŃƋçÓXŗ´ñgƅé³ȉՁƍʍGĉŠËƼuƴęÀÁƁfŹÐţǃ\\ĕãaùʁKɭ¢ʱƙăŭƹŽĹÛwƿĳõùlƹćŹɝvŭ͘eƨ¦ʂTƺŒxŚÞŲöĦǫƐğpǛȼó¦ÍuɃÀŔĦǨnÂÑƂRìÀŁēĤ®ÌŎÜÁ¶şē×Ł¢ƓAơ¥āĺ~æ¹ľȦĖŜ|ƮĬİū­×Ć{ƀLŪ¤êĲŔƅͤÆȼGƔvÍøŮVŎæ¬ÞeŐɃǒǥÐǝńãĀ{ȤďĀpČ×ĨʧhɝƙCőïƹȕ³cĭŬ¹ƭɁŚ~ŠśÞ̠҆ӰƖծúҾ˝ƠũCÕƔȇǚȁƸŝ̈́äҬ"],
				"encodeOffsets": [
					[57784, 42292]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Daşoguz"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ԨĤ¯ÒWŠ¡ð¬ôłfÒ·@ğì§ĨƮIþêüFòŬęîãLùƚɊƆæAhłðŚ æ½ǄJcĎŵ¾Ťâƨĺ`ĊÎǺƧŚ£ĺdĄÛùňËŎ]ɘzǂāßÞOåć{ȒšćįĈďËëUŇ͐ǉǪɖSAȟُm@ՙǸyªۥƟuñŶǕ½ØZ̐ӁQ̗NųČȓ¦̉ȑ×ϫiɳ{ŏÓÛÀīńłŁɦģêŻɶƉƔÃƾ"],
				"encodeOffsets": [
					[57784, 42292]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lebap province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ʞđøFúŚǤiȌĳðó^ƳńȭĂóŢÏÄɝa×úŭ̴ֶͅǅżģX¡ІɝżvǈŭʮƅǰÕŒēͤǵͤ¡ʐñżķȄe²©ŅƝSǱĊăëŇĥřJŃïÆͧĐ£ÙHđąċ˥uų^ɉĝÅpġýેMјȚǸѽаΝĺ̢̛ৃߠƧOѕ[©ۦǷz@՚ِnBȠ"],
				"encodeOffsets": [
					[62408, 42238]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mary"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƨPৄߟ̡̜ΞĹѾЯșǷїૈNĵƷqånĻéŃšŷi©ŁJǥŇǭÁƃYëÁǙ£ǯOľŽœ¿ýďÁEͽǡƏ¾ŷųcļɓǄÏTƁ¡ǥƯĪYÔńýňİÄRúġr֒ХԴƜôšƌòēîƧÌȏýɜĢŀĪ¤ǓɆȕƐř΢Ĳ¨RİŘÞ̘ǰpƤ"],
				"encodeOffsets": [
					[62427, 40456]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
