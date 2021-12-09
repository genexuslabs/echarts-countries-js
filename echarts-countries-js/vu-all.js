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
	echarts.registerMap('countries/vu/vu-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Malampa"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@PR^DTO\\Akv»JqbCÂPeGkogQNeOyDs[§jgDwZW\\PnUfRKnJplBRZX¾Bª\\L"],
					["@@YJap`hzBVYPw[SgB"],
					["@@PRvxFLOOmAsYogBQX"],
					["@@~oRc`WPccudUCYlkkR]f``EUwfGÂµrEd[NiepNKmnoZDT_x_^Cd[@_XsFi[QR]llZW^memGGcge@mg@spAR©TBeb[oc_^SK[eOM\\aGMgX¯Dark^AnnbEA[HSH®\\ZWdIrP]Jgh_rQ|[Wg}k[DgbTW`Afi`L\\^TSºJrXR^OmQKY`"]
				],
				"encodeOffsets": [
					[
						[172148, -16536]
					],
					[
						[172377, -16930]
					],
					[
						[172249, -16894]
					],
					[
						[171360, -16345]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Penama"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@èTCVt[wu{OÅÃeaRD{OH}jAzÈ²nJzxpb^@"],
					["@@Yc@tSv@rUvD[|O|LRU`CQ^@aVQRwBfÃBgfSEeT]DiQeLPwQaRUWDKWj@hQNQÄ"],
					["@@YiHeywLOOqvRQZHn]Q¦HxMnmfFfYXH\\StY`R\\Un\\^FX¨FÞPNlKSuBiXUfANAY]fDcZKMaZiD{n¯AoT{RENEwXK"]
				],
				"encodeOffsets": [
					[
						[171861, -15683]
					],
					[
						[172144, -15542]
					],
					[
						[172321, -16304]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sanma"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@r`V`"],
					["@@b²@xOCTKCwasdoWu}Q}ZvoRmpC`Lp"],
					["@@xI]y½CyVVft|rbjiGg"],
					["@@|FcsqaZ"],
					["@@NfpjTvCMZZUtNrhf[ZeFedEgJgBfiPsTK`fnUEcj«@[ea^uFua_E`i@[\\yd[Ka^gZBDi]M{PFsWW£Lgh[MeH[KeN§Om_LisDwQAo][g@fE^Rn@nktEXgTsU}G`cdAdjIVCtàGk¸@rMuIjg¬CbWbPnH@N|\\b@jjsl¡vk\\jy[TQBsrãCgXIlyE\\ÃTQQpHpEtR"]
				],
				"encodeOffsets": [
					[
						[171143, -15310]
					],
					[
						[171102, -16018]
					],
					[
						[171215, -15948]
					],
					[
						[171270, -15953]
					],
					[
						[170955, -15525]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Shefa Province"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@XeaKaTl^"],
					["@@XjJnXZxV\\dHtLNnl^C\\s¦\\XRIXSPq{NXGtoJeEDK¡HUSWSeZmcGiLJzcQidiFW^mW@njAF`{bO_yHRvGf"],
					["@@T]WWSCGZT\\hDr``K"],
					["@@]@LrjGWi"],
					["@@cRoZd\\@La¥oC"],
					["@@G}cE]R@^~\\vzpK\\k"],
					["@@HhrUyQ"],
					["@@RXiC]w}aMkBELlfJ"],
					["@@~WbbEF[bgUzf\\GnmGyLe]IąOX@¥{oSeXNI`cVIinWrRJLxtAvK`JjqVkBg^YEefsX"]
				],
				"encodeOffsets": [
					[
						[172251, -18008]
					],
					[
						[172212, -18112]
					],
					[
						[172336, -17931]
					],
					[
						[172536, -17912]
					],
					[
						[172406, -17901]
					],
					[
						[172470, -17469]
					],
					[
						[172666, -17423]
					],
					[
						[172597, -17279]
					],
					[
						[172327, -17077]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tafea"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@napOZkCuiuUIRÛTyD|xj¼FTE"],
					["@@ZTxHYaDUh"],
					["@@_hZ~Etj¶\\U_C{R£rfI@riPav@Z{aGgHQqgkHuRjmLOp["],
					["@@\\EGq_TLd"],
					["@@NWCmmW}P}lSAp}EZaXoJWbN}dE~tpO|ivPP\\Mvxb`ÒRYzEfjW¢btÃMeMTe~wÀ}~Ji"]
				],
				"encodeOffsets": [
					[
						[173919, -20621]
					],
					[
						[174283, -19995]
					],
					[
						[173296, -19953]
					],
					[
						[173666, -19706]
					],
					[
						[173402, -19369]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Torba"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ErbX~OUyoKSL"],
					["@@\\CdÀg`iQS^oi]w_¥JSL«Gg\\hWpLVMf\\~\\"],
					["@@vJvAfJJwYKQ­O"],
					["@@Vs[c}KkXQdTn`XtCZY"],
					["@@TYGYqCO\\hdNG"],
					["@@_I[hHi^¤B¬RRr[fgBWhXOCaW]JyVU\\X^[[MQÇU^c]"],
					["@@gF^fR^KLc[QA"],
					["@@\\KBUuQodIjfd"],
					["@@|]J[eSEh_FF`"],
					["@@@{LYOfGdj]tBZzQTWCi"]
				],
				"encodeOffsets": [
					[
						[172058, -14822]
					],
					[
						[171485, -14552]
					],
					[
						[171643, -14032]
					],
					[
						[171372, -13842]
					],
					[
						[171728, -14165]
					],
					[
						[171493, -14298]
					],
					[
						[170693, -13770]
					],
					[
						[170608, -13536]
					],
					[
						[170627, -13650]
					],
					[
						[170582, -13428]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
