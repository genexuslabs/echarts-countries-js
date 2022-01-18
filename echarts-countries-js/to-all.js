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
	echarts.registerMap('countries/to/to-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Tonga"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@IJCPLFFANMGKIC"],
					["@@L^HRXZLLFPJLDRFPHNRPNABQGK@GHYHSDWCGDO@GDK@UCUH_BQCGBEAGAKHW@OAC@QKKKDKL[XMPUFAHSZOJALGRARDR@F"],
					["@@^^VZNFBGGGKSGQAIFcHIRER@`GTGRAHD\\ARFVAHFNAJKLJTC\\IHGRGNBDC\\AHUEGODGAQGCH]HAFIDGAEIIEYSIMNOXAPER@JHCFKBEJL@@VHFFCBINGFDRLFGN@HEBIJDJ@LDHIGISIE@EDO@KECSFIVCDLDBDKLL@LH@HGNDFEHDBHCFLHLNFDANKJDHGFGKGDDLJNBLANTFJFTHP@^IbGZG^[CMMMIEUGS@EACEQGCEEOOSGMMKEQLYDSCQEMMOUOOCSB_L_RSLIPAHIJGXMLCAQL[NgJ[F]A]XaTWTYLIFMLCH@JIZAZEXK\\"],
					["@@HA@MEGG@GRNF"],
					["@@BLFFFEPFPAFKEGKAQHEAGMCFBH"],
					["@@BFJBLFDIEEEKBEGKBKAEG@aVOJBJFJ^BJC"],
					["@@FDNCDEEMEAMFEHHH"],
					["@@GFCPVRHK@EKQEC"],
					["@@DJDNB^XMJC@KQOKUGIGFMBHJHF"],
					["@@GKQKMGGAQJN@FFHNJ@`RCM"],
					["@@I@MD@HDFJANGCG"],
					["@@@DHZ@LFFBLFJBJFHVLHCLAnGFGHORYHWDOGYAGEIGCAGKCW@IAMDOBGNGBEJGFEJQJEH"],
					["@@DJf^HHJ@TBLNADVTLO@GGICGCWEKGEKAQDOC_AO@"],
					["@@BHNBZRFL@FL`DF@NGLFBNLFGAKBQGQCMDSAKDIJGCGMGI@aHADU@"],
					["@@GJPLLCFECMGDMA"],
					["@@ELQJDPIJKJ@ZL@BCPYHOVUDK@SOCET"],
					["@@EHDLATFTFJLNFBPEHSDAFKESEGKIC@OKICEH"],
					["@@GDAFFFRJHGIKKE"],
					["@@AFNZHHJDHCLDZQF@TSGMKYIGIBCEQBQJAHORCH"],
					["@@E@CHPFJ@HFHEJ@DEOCKBM@CE"],
					["@@EBGHBPLJHDFEKEA["],
					["@@LQGYBIEKOJKRF\\JAGPYNCFDFPENKBGNC"],
					["@@KI@RL@PJNBDFVHDAEO@KIB@DKDQAEGGC"],
					["@@EEBGI@MPDFT@HFDELEGEKD"],
					["@@DIHCCMKKO@KDALDDBNJHJ@HA"],
					["@@HDPTJFHQCQII[]MQKKEASJMP@FFDEPFNTFRHVA"],
					["@@GR@XFFROLKAOQEGB"],
					["@@BJHLBLFHJJPHjNVBXINKLKDK@]EYEIWW]GIEQBKDEDORC@QRINAN"],
					["@@EDKBLJBJLFNAHJLCLAFDRCAEMCGDKASGO[GYECG@JLAJHH@J"],
					["@@EJDF@JHF@HFFNFHHFSDC@IUOBEPFJCAIQI@GHCHFBMHG@GKHOAKBJROPIH"],
					["@@NUEGEDERDH"],
					["@@LBMMEGIKEAW@GAEDANDPAJMDATED@LHPTDJDHCNBFIJAHFDHHBHLBFPLFHFX@XP@`TLBBCVOJAFHPEJBFFL@TSAKGKBKJ@FEGIAGHGJCLDHEBODGESODOH@HMXEFCJEBGGDGDMCCDIEIQFUNAC@MHCJDCSHCEIMJIE@MBGCQGACDHJBPODIBAEFEAIDIAOIEGDFV@PCHIFODCCKAALN@JDBFTDFLLHALFH@DGLMHSFOMKKBGRLP@TIAQ[UIAFNGAIGUJKEI@CEDICS"]
				],
				"encodeOffsets": [
					[
						[-180435, -22884]
					],
					[
						[-179172, -21883]
					],
					[
						[-179565, -21599]
					],
					[
						[-179178, -21618]
					],
					[
						[-179616, -21041]
					],
					[
						[-178981, -20730]
					],
					[
						[-178964, -20491]
					],
					[
						[-178906, -20436]
					],
					[
						[-178599, -20388]
					],
					[
						[-178576, -20318]
					],
					[
						[-178909, -20290]
					],
					[
						[-179309, -20230]
					],
					[
						[-178520, -20236]
					],
					[
						[-178560, -20302]
					],
					[
						[-178745, -20306]
					],
					[
						[-178459, -20159]
					],
					[
						[-179229, -20160]
					],
					[
						[-178676, -20114]
					],
					[
						[-178861, -19255]
					],
					[
						[-178290, -19199]
					],
					[
						[-178131, -19159]
					],
					[
						[-178199, -19144]
					],
					[
						[-178274, -19154]
					],
					[
						[-178097, -19093]
					],
					[
						[-178494, -18445]
					],
					[
						[-177938, -16327]
					],
					[
						[-177920, -16242]
					],
					[
						[-179896, -15978]
					],
					[
						[-178301, -19136]
					],
					[
						[-178186, -19130]
					],
					[
						[-178200, -19120]
					],
					[
						[-178203, -19102]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
