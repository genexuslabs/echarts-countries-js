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
	echarts.registerMap('countries/so/so-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Somalia"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@VAPdNW[mYGBl"],
					["@@YRH\\^BHQS]"],
					["@@VDguSPfb"],
					["@@ƄƂƒžZdŐǒİƜŢǆĨƄ|APX\\~LVExlrNDJ\\lCRPª¼vdĚ@ƨTHÒT¨@zHR¨h^VHäBRDj~z~°ÆJ^\\¸h|Þ¨ÚǠČİd@XNĎrØhFhZæ^Ţv ENH¢OƸCƐ]à@¬Q¬LƞMHEjnѴҢ΢΢ҔҺ¢̞̲όϠȀȐ΢ξ¿@ݿBiBرɈoPԋǘ̟İӝǌʷĔ¹d©dĵq`»tOXeRadZcx³cZefo`jUZo^Y^[T{T]v|GVw`aduVQXUHF]x_JgbeXeOKNkZQR|O|WRQ~QTC^QLWÆAjW²ě²WYmD[N_Z§łUdwoTGRy{zszww¤wØYª{¬K`S]^YNWBTthzxØĎ^`jjLZɖΐ|¦hBpIZJZRMZLJg\\QtmZJhEX[repDGiZAYHVXcj]^C`bwftlpÜ÷ÎÕÂ½}¢owp[`aL[srMdY¨~xmratY_S\\@Tä[tMCNlXT~H~PI~DMI¼J|ZhKT^VvTdVtvjJFtZBdll\\l|brfNhG`DGJ`NLX\\JdB\\PR\\dDnTJbTRP`THpDnThHrjr`|VXRH`PNLd]pUJMI[\\ObFOX@RYscESrC~BðdE`Sti ¥\\O®S@pFØÀ\\rAVt\\VR~\\JL h\\VxXPT`PRTrRhdP\\|TL^bAdHLNjJtvAjXjJdR^hXRTLj¬b~^f^hjJ^T¢``PpTG RBbKxk®NCeKV~\\zHêKfFhTSfAfHA`F^NlChJGdL|prTHdb|JtNhZxHVRdFEzDhPr`|H°EXrL]º]jMÌy[OBzJhRxJxRRrDVJLFLbLp`VVtGÂ@|HrVFXrNHT`BbPltZpZb`J¦FLd^dBpSSÔD|N~\\pzX¬Y¸FfDÒ`JrHzNXZhB`LhXbj\\D²vfVxRj~z|`TLA^RTxdptlHTZPBMdFfXhRvLz\\lFwlQfA[zGjOZQ²nOPHbG²DoxGnURbUGoM]e{A}UmPgB][s_[GUwsAIik_kÃJyCcUgYCGu@qNXs\\aXGK^DHe³i»QAqD©FiHÝD]BEHy^_LRsViYWEe[BcNyQcaeMEEYIJLMĂd`AªD|@BRWTw|AbPXEfbAVWiTBgzIhVVBKNg`[SuMKMgcQC[iBSN«GaHKNJvQR{L©G¿QÅ]Yg³}c]OUEDP@eOSsAiHNiAgHo]u@eKoSy@]eqD[Ka@eIwSqJ]ODISqF[UmUCFW@s\\z_Cg_w¡ak±{_YW[goqWaU@]NmIO_gqkYg{_Qks]WCUcsMIQ}G]My@cQe[S[_]sQNiE]co¥Y]U}]UmGge]aGSgK}aci]wwi¥SWeq[QycgcuK]KwGDcNKF_\\CGWFcQSFgekcuMGWiIwÃ«ėgáįÇíS]Åcsyµ»]es¡IWcssgUOWm³u­Gq[uEWi¡]M}CuIqL@_]¯Wi©ĩ¹įw¥¿¿¡Ñ­qCQs¯G_]ia_wsu{Éó·s]agiOo_«Ám¿Ma±k{s}ïí«·Ucgk{skmYc{w­½gu§½k{emÁÅÁ½su§KU¥©OWűŷu}¥«¥uu§qqgmogyaoiOkkYKwQUq[scsisyCUU[OGK]gSgkOg_g¹iwgas[icµw_sS{Y@SS¯¹}[±u[Û§M@£{oeyY]QYCUWĉIOWSQkKSQQFaWcmyosWWSusU·kySCckcmgqU}kGS_U]AW]}cUMSwcWW»¡³§_kUIÍ¹cuUEkkC]esyu_{UAaS}]mù¿oa_GUum­¡QUÓ¿ÉÅāăćę»Éñă©·ēġ±¿¹ÁăāegykaScCeacGU[FaSUOIYXS]eWZWcYO_a[iisME©o¥ÅEeU@]aYsIWoeEaScBYJaGNSXLdW[kIg}yK[ce@_MYy_YceA[a{SUOiSWaOSqcwhEUS}AQNUHEWqw]WaWQqBGakI_QOeuaweeE[SGcmO_D[_K]c@ÂőƴůǚƏȆĳƊ@ՒB͎@Ȑ@Ĝ@ΐAʨCߐAŒCѦ"]
				],
				"encodeOffsets": [
					[
						[43341, -655]
					],
					[
						[44509, 11700]
					],
					[
						[43052, -1023]
					],
					[
						[41973, 2897]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
