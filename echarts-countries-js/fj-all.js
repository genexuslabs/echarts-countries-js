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
	echarts.registerMap('countries/fj/fj-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Fiji"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@qBKVJf^AKcbW"],
					["@@NQSWUP\\Z"],
					["@@h]CYRo{kcDUdVJJbMXPb^F"],
					["@@`HJaqAH\\"],
					["@@gdeCUWI_RoiML¢^fQ`HYPeamcKJv"],
					["@@HT\\^GuY]iNWlAl"],
					["@@ab_JEz^XDRmGa[A[UDY"],
					["@@@OUe\\X^L"],
					["@@TH{iAGd}KT^"],
					["@@VSrJCfVVzOHC^f`zBbZzDj]VnMPfrIvFXQIP\\p`BvgCS_cTUO}AJeyK[UkDc|qBDrNIYiDQqauNo]NkDmn_Mmo]G~YRescc@dy]@X]ReAcTJhnJxA\\VLbxP~D"],
					["@@MXnTDVKQeeEuVQpVBY]OQWBUfmra\\"],
					["@@[~l^wOyR{V_eCaOP"],
					["@@dhVOe[SD"],
					["@@YAYXHhrAL_Q["],
					["@@fGEY_H@Z"],
					["@@^xNFWPeC]cDG[qQeB[RfVO^"],
					["@@f\\\\CeqoOTj"],
					["@@qFEX¦C\\UeQcN"],
					["@@z@IgXyUaUDkvJLWn^P"],
					["@@W`tB\\WKakX"],
					["@@LnR`AdSFsMYeQ[PsL"],
					["@@_ZJjvMLkR"],
					["@@VzlFbaD_W]JMV"],
					["@@WQaBOt~ALa"],
					["@@^E[giZOZZb^g"],
					["@@POWw_XF^bR"],
					["@@_T`ppxL`[`gTKuqeGTwag\\Il"],
					["@@]XO`ZRTGT}SC"],
					["@@BcQ[oKkgGhgPY^Nr`\\ApYLS"],
					["@@phjGZor}Z@kX_coDUbWwjGVEB^R@fRZ"],
					["@@T[AmaEkdQ^`fnW"],
					["@@BMVCIWcKOZs@xP@DITMEW"],
					["@@kOB\\jK"],
					["@@KS]CgXh\\j["],
					["@@\\kWWeFSdN^hC"],
					["@@t|Lz^Cp]bxTIWsyk]M]DUUEkgVNT"],
					["@@@Ƣ|njrbxxjrZdWPI]^mZEP[qOB_k[@W[iCuaMUc"],
					["@@Caq^[UJSaSPRhBrvJxavJCY"],
					["@@@o@mmOAlp"],
					["@@uDt^@jfNjSWk]YW@"],
					["@@@@@@@C@A@k@k@k@@@ėWagSmGk]]JMWHGh`ldXBTjRbhV@Z~"],
					["@@VbV@PuQBQzZVVGJf"],
					["@@yV@`bHZaA["],
					["@@Pc¸²NFGas_u]FQmceWH]MGzTH"],
					["@@aeMZT\\Y`tPXMUq"],
					["@@fPWpacSW`o^o@"],
					["@@OMmLGTjTRabbrVQ^B`[MgG}HkX"],
					["@@@^dVA^^xZdGigSqTuC[[cX"],
					["@@ZUOcWVNd"],
					["@@@zXHWmeeS"],
					["@@JZbSAei`"],
					["@@A]eKAf\\J\\pV[cY"],
					["@@i@C`PljAFgQa"],
					["@@@Y@[@@cciOgougY_]GI_i]c[[eC[qyA[}ysIKQO_amaK]kZ[¥sSmC[gET]@YmbCX^@hUJj|\\nJVvTTjb^TrCV\\br^FVnTx`ZÔpJZxZ\\[A]]qeYE}QKIiWKHmGAYoU\\O|A\\UGYZ[qFWc_YbcIUqgRNhArM_XyCMg§Igo]QiqmC_b[BgY`QI@kQUPs_qFtL`gH©|cHÕ@o__wo_S@UaJeaUD]Qc{FOWkjajJL]KY}BaikHKRmLUM]vyR]VTeSEmsOweRc[JccIqb@VcvOOF@jibizPmDGXwD{kiCeMQRExQ^Anlh\\hZDZYjhfK]vXPXdgQOnUVhZQVeZDGTZfFRdAA`NIl^\\BnRXjVLalJArl[jjZBRl`DcbOLXNSZPDZ|PdCVNzLdCnh\\ZUPx[`rjblXNZ]tZW^t^ALtMJdU^nVE\\VpZiphJByTSrC\\nVITXnGa_PYXj^QVHHn~d|AltLv`"],
					["@@XLZMbRKbTdOnffXBXZCb®D|bhE|W\\ZIlXd`RbDn\\LoSKAwRMdPRv~K^]lB\\I|BHVlXlCTn\\XTdAZW~RX\\rB|`IPUqDa\\[Kes@GgR^C^pXVIrYHy`udQN_nOpcpO`N|oXmxY¬wJ{u@}SaTOfCVWA{L_`BIcd@UoYIDccGG[R[Hy^MQ]_n¡\\HTkcWI]wmeHA_eQGO_JA\\CNQNUBQKiFOyk_[fRpIPq@cLBcm_klWCku¡]Kme_cFegYGqI[^iLYgD{KuLJ±gep[YuXQVqFdJ^[Aíh{DaZaMwJDslBNsVMMyR}FUNUhc\\HgNJXLdaR^df]LWjrQl^p@rjfMp^FXYjBnabmLJdWVrN|BXhJPl"],
					["@@m\\|TMo"],
					["@@HQCoRo¥{]BRvaÊGlTTRI"],
					["@@RgWQYJC^dR"],
					["@@F`FJ]W_DULFb"],
					["@@_DesUUVHx¸Qv[LoBNdÀ_fs"]
				],
				"encodeOffsets": [
					[
						[-183008, -21164]
					],
					[
						[-182514, -20278]
					],
					[
						[184077, -19579]
					],
					[
						[-182709, -19660]
					],
					[
						[-184136, -19409]
					],
					[
						[-183275, -19396]
					],
					[
						[182775, -19393]
					],
					[
						[-182678, -19576]
					],
					[
						[-182879, -19602]
					],
					[
						[182360, -19526]
					],
					[
						[184152, -19050]
					],
					[
						[181879, -18989]
					],
					[
						[-182768, -18889]
					],
					[
						[-182781, -19115]
					],
					[
						[-183582, -18804]
					],
					[
						[182375, -18829]
					],
					[
						[-183206, -19315]
					],
					[
						[-182925, -19307]
					],
					[
						[183707, -18208]
					],
					[
						[183448, -18215]
					],
					[
						[-183648, -18190]
					],
					[
						[-183114, -18112]
					],
					[
						[-183484, -17873]
					],
					[
						[181441, -18179]
					],
					[
						[183049, -18192]
					],
					[
						[183268, -17848]
					],
					[
						[183043, -18133]
					],
					[
						[183302, -18051]
					],
					[
						[-183040, -18638]
					],
					[
						[183563, -18388]
					],
					[
						[-183337, -18395]
					],
					[
						[182855, -18561]
					],
					[
						[182826, -18545]
					],
					[
						[-183814, -17672]
					],
					[
						[-183443, -17663]
					],
					[
						[181453, -17553]
					],
					[
						[-184319, -17373]
					],
					[
						[-184025, -17169]
					],
					[
						[184320, -16877]
					],
					[
						[184218, -17071]
					],
					[
						[184320, -17196]
					],
					[
						[181674, -17280]
					],
					[
						[182595, -17233]
					],
					[
						[181707, -17217]
					],
					[
						[-183988, -17170]
					],
					[
						[-184288, -16104]
					],
					[
						[181290, -12809]
					],
					[
						[-184319, -16924]
					],
					[
						[183922, -16570]
					],
					[
						[-184319, -16556]
					],
					[
						[-183598, -17423]
					],
					[
						[181584, -17420]
					],
					[
						[181607, -17385]
					],
					[
						[184320, -16529]
					],
					[
						[181725, -18000]
					],
					[
						[182425, -17748]
					],
					[
						[183739, -17660]
					],
					[
						[181396, -17741]
					],
					[
						[181355, -17706]
					],
					[
						[-183243, -17670]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
