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
	echarts.registerMap('countries/ss/ss-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Central Equatoria"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ ÂƀŸ~`àE®¸Á¼hƼŤǈĖÒ¦ªÒFǘb¾¼ĊxĶuðįÐýĊȹǸƠZêŰΆ˱ОZ²I¾pÚTɀ]îWƢQFą»ÅÏ[¯~ĥG±Ļ@¨ǽĉÂùrħ¥ûïįůŏ»¹ā½¿¥ƭXěIqýÛō}sǋĄ½Ŀ@ūďGoµ»áëwð¥µhËÁndHê{úßY¹Ã¶ÍÅaaìtDÈĕbÖÍfNÒ¿ªÃSEÄbľ"],
				"encodeOffsets": [
					[30530, 4672]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Eastern Equatoria"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ħ[ྀùǪÒĈvŸ¾Ĕhǈ®Oç\\¯ľǟG¿ưķFgíú|þ¸ÂUº{þJĐ«ÝëA˛ŌţIYȵ@@¶¥^ÕċAóż´ŎOfƅ[ČZěÃţÝʟĥǫ·w_ñĥ˩ˣË¡ЉГ˭pŷĪŁÝƱ¡ʯmǿũjo­ĕz®ëgAÜăŢ¹WĜ¦Ʈ¾ÀĂ¼ºŐŰðİ¦üqĨÁúĊ§Ǿ@ļH²}Ħ\\°ÆÐ¼EĆ"],
				"encodeOffsets": [
					[33003, 6041]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jonglei"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĀĘ½Ǌ³žYêôįÚıúƗ¼µĊķƜǐĺĂĤªFuUñĒNȿtïêùÐkìS{h§EĭéGāl³ĀÙâkL¹¨»ǌcÔÏÊŊ[¾ LĄ¾ÍäyĖÿ¿FëÆđîJùÜ©¾ôNÐÉZ[»ºw^ä©\\Ì¿~bÖMĴĿX{R§ēpQÇ±@­Ǉ­ēgŷ½ćuǩÑཿúĥ\\ơRíXȿ^ÙSÕŬ¯ÚƎ¦¥ĢþėƒrŕŎõ¦i~įØóä×ƈwþ¿ÊSò·øKÂĔėƖĦ©¢BƖWîf¦_ÊÁĒ æËäFÜĒE¢ªØäÄÐNmÞĸúêÞHź[ȞS"],
				"encodeOffsets": [
					[31682, 9758]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lakes"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ʬýĶrĂĪUȄÉĠź¥¾kĪžÎИҺȂzȄs¾ĭ¨ĵ¤×ĘȯťlQǂHŮIǨZİ×j}ö¥ŖōqĘƑý¦ġ¥ƍ°ÙÖū½o±JНY΅˲éůƟYŃSğɴ˓YjƱƍƷµˏԃ¶ɓǠɗ̴Aǐ"],
				"encodeOffsets": [
					[29189, 6618]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Northern Bahr el Ghazal State"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@µĈëöɏÃ¢}źž¢PɰĚĲp̜EɂažLŒɝǣϑSÓHïÕǑÝƝ¯ġñħÃ÷½˥Ɲù©ŧ¹×PÛ~ëªĉ»¶ġÀíøsČfɶWøÍľľfƮd࠾"],
				"encodeOffsets": [
					[26705, 10300]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Unity State"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ ÂÒZΜ@@˨ͺǦ¸@Ѿ˝ʰȽHĎA@ȃȝTŹ\\ÝGùéķnÝMÃÏã©×F¡đEÛÌãåÂđ`Ée¥XíAƕª¡ĥĘƕēLÁ¸÷TñÀÉxýØƇôãǧYŭJǁGkRŦėȰ£Ø§Ķ½ĮtȃgʠRǰeŊ» õ¤ǁń»ĲĽǬËàíTǷC}ʲ¼ČƶŦjv"],
				"encodeOffsets": [
					[29696, 9906]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Upper Nile State"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@ȄȮ@ĐTê´̴π¼úŲɪƈôɜɚ¶áŚ@Ѵʛȴղ@\\ÂwȈӀcÏÕͯˁÄǡÌͽq¥ɪŕŶǙŔęĎƏÈsB­p{Iŧsģ¡WwȗȖBϽ@Υ©¯uq¥ZÏeqÑÉSßh[¸±t·Dřiuuïąwd©}CĉlÅ×}K¥]A©álÿÚk´HĂêFĮg¨|ëTÏléúsðMɀđVòvEģ©ĹāƛǏĉĸ»¶ùƘÙĲóİéŽZǉ´ė¾ÿ"],
				"encodeOffsets": [
					[31682, 9758]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Warrap"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°ÞƞÖǒGðTÔǤϒőɞÓƴ@̺ʚ@Ҽ@ʾ@@бiuƵť»ċ~ʱǸDîSÌßľǫ¼ıǂŃö£¼fŉQǯhʟȁyЗҹŽÍlĩ¦½ŹÊğVȃāĩĵqʫþ͔cȖLĈƬ{ÔëìÞĭÒăŏüǅ¦ÕŉƸ¡ü»Ǝ"],
				"encodeOffsets": [
					[28307, 8522]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Western Bahr el Ghazal State"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@c࠽eƭĽÎĽX÷eɵtċî÷Ģ¿¼µĊì©Ü}ØOŨºúª˦ƞø¾ĨÄĢò¼ƍ¢ûŊƷÖǆ¥ŐûĄĮÑÝìë|ÓƫKćdȕ͓qɼƟš@ĥ¦ŇØˡ«˛̕{̉śŧÄŽƐÏ¨uÈ·n£ÔínïÆAÑ¦ÛíRąÐozM¼¹ªO§BÄp¶¤Pv]ČÇì£|ÕYá·¶Ŏ·vQpóVā_³|YŗEđfË knĈĖĲtïp[ǙU«hąmŗ~Ïu{ÄX°Dþ£Û~\\Œn¦¶LĊĄSÐvø\\KĈÎľ̜G G\\¼ôVxĸtºa|Î`ZÊe¼ä¦tļö\\ªÄÆ[~IxH¸¦îLxÊMČjh¬eÚtŪJhbľFĈAǙ²a¦Ç"],
				"encodeOffsets": [
					[26705, 10300]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Western Equatoria"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ŝ̊̖|˜ˢ¬ň×Ħ¥Ţ@ƠrɻBǏɘ̳ɔǟԄµ¶ːƎƸiƲ˔ZĠɳńTȺǷþĉİÏvïwĵ»ĉa½EǗ©ÑÑ¥Ǉĕƻţ»g·Â­ßF}_ſŷÁÃPŉøŇađyÓCm×ßB¡³éô·J¶Ł_črM²ÓUy×ÇSaÉI«ëçSuÊ¯PāQ³Ø»P©Hªqr×fiN ¥buìbWÂÃt·âõG« Ln¿H¦¾ůŤE¨¬G²¤tè¿ÊCÈmÑ²¹P¹¸ăïôÕlčOÿôasz® cT­Ì½GeÅMĔ glÀ"],
				"encodeOffsets": [
					[27063, 6802]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
