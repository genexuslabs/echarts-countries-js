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
	echarts.registerMap('countries/sb/sb-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Capital Territory"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@²UbR[osí`Dd"],
				"encodeOffsets": [
					[163753, -9650]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Central Province"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@iL_{µB¼VnGLljd~»|Hrw}Wgh"],
					["@@s~TtvPhoGmuc"],
					["@@qFtÂvh`[LwkC"],
					["@@Þ]`P¬^qkHQsOv^E`¡Ng]yR ¢Dv`Vv"],
					["@@Rddp¥S"],
					["@@~D|EDs¯Lµtð"]
				],
				"encodeOffsets": [
					[
						[164160, -9384]
					],
					[
						[163645, -9384]
					],
					[
						[163002, -9355]
					],
					[
						[163991, -9216]
					],
					[
						[163907, -9215]
					],
					[
						[162894, -9215]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Choiseul Province"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@svDj¤|tEt\\QS¿DeT"],
					["@@Ùì{j}LTGjġàH uvNj¤jNG¦äejqt§¸yOp_OVgÌdD¢q¸ÚÓKUŋaâwKmÀ©|LZqxLzmÈpM^oRÅÊc`gBëHIp¿dIO]J[pMZKvyfyQßbBYaºjw}Q¢W\\Ën^Cb­ªKdIj"]
				],
				"encodeOffsets": [
					[
						[161522, -7646]
					],
					[
						[160521, -7199]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Guadalcanal Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@dZÚu¨zÆmÂ\\SzZ]Tmk~slC®a £IfoBČËUsTfum©e¥EíkbBnX§Og|Ç¨ÑRćWÃDS§\\óZfg£za~lqD@ctRP@\\^~eňFªn~vN¢|Kbi¨qt{ ·PDCcî_ptQ\\"],
				"encodeOffsets": [
					[163853, -9644]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Isabel Province"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Jp~r\\iDQÎTsLsbe"],
					["@@zLqtTQdytUvHoLKuB]lhsB[qD½[IÙvaSÏg~kL£ávYxleE·gjsAoifµnLpwdombBvJtoeumlpada}yP_xoaÁAoxnVPlzQPjm^j|_Ba²K¶R|B¤PÀµÎÕk®Uls|]Qy^uTEcEb[_k¢g^J¬XT]Ttgx´u¤NeÚ¡¨onwsä¿sYq»G"],
					["@@jxH~cB¥eT[X®ySXzÇxÃ°"]
				],
				"encodeOffsets": [
					[
						[163348, -8639]
					],
					[
						[163621, -8639]
					],
					[
						[162001, -7619]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Makira-Ulawa Province"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@uAXzg[a"],
					["@@¢MxHd[ZUDn}p]EX° ÍVnSDfmz[rFdçmYCJr_ªNJqROÓv{W¹W§V¯FcWkfI¥habJCj}p¡NVpÁ¦Uiqh·P\\@x¨ZVsZx§tEUbByY©\\IpXĎ@fnKâfcÚè"],
					["@@_^y[gN^"]
				],
				"encodeOffsets": [
					[
						[166374, -11107]
					],
					[
						[165601, -10658]
					],
					[
						[165601, -10457]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Malaita Province"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@kä\\WemXąP"],
					["@@¼ÇhuRwhe@©^oRSj­Ò[YM¹Ød¬_zN`u~x¢WTwÄjF|"],
					["@@bEh¡cGoJn"],
					["@@pkrcfYÎdBNzyIpsïÂ¥Lv_°ÅVokSLiµLk jdkCoje`bvojr³J«zWP£xk^q}[rçWM°ár§¤Ín_A}\\_u^±¼k¤³cIdwpeuPSiUd}[CgXm¸T ]ZF­àqrTÔej[¬`LrT¡Ô¢"],
					["@@bbyQi"]
				],
				"encodeOffsets": [
					[
						[165854, -10077]
					],
					[
						[165292, -9620]
					],
					[
						[164465, -8063]
					],
					[
						[164493, -8640]
					],
					[
						[164623, -8503]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Rennell and Bellona Province"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@µ@¿¯_Ç¾_¬zDxa´Qxcj ]ƖğBq¸[|kÊno_a³fg­jN¡nÜ~·ITzOtub{Iak"],
					["@@@@po"]
				],
				"encodeOffsets": [
					[
						[164087, -11965]
					],
					[
						[163670, -11579]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Temotu Province"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@quzW{mb_l²QNu"],
					["@@lCd{ćm}Xv[ohjO¦HqazQ"],
					["@@]Yc[Ojlt"],
					["@@dkccjf"],
					["@@¼@T¬qJAw­FueędYs«Q{sºwAgEt`v|XjQT¬¤¬ HfQ"],
					["@@u}qj¨T"]
				],
				"encodeOffsets": [
					[
						[170560, -11519]
					],
					[
						[170959, -11948]
					],
					[
						[170974, -11893]
					],
					[
						[170048, -11049]
					],
					[
						[169932, -10916]
					],
					[
						[170350, -10510]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Western Province"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@vChd²yNwDÓÕ\\tXjM"],
					["@@J°xgAq©Dq"],
					["@@dAxuSe"],
					["@@pF{bÃ}­s@ËNKq@pfÏÌ°ÆlLTvt"],
					["@@ÛLzCfpSrb|QztHrtU^vlpbÀMbaF{uMw\\GsmIOoMe"],
					["@@ÁJOnx´@lm"],
					["@@JbbRNOpQAY§H"],
					["@@lHCftÚ·SfYDYSsKCLOBMCgeZwIJ|"],
					["@@cåÑifxQL"],
					["@@xCcOIxT"],
					["@@gfh|zQPeamgD"],
					["@@lI]HV\\CoROih"],
					["@@aÔ LqZuG¶Op^¨nB¸oºTñdm_ ·pOfpIjkUj½wByZoJ¡rcL}ùaw}l£@ÏY{TaBgĎo~{D[c§Xc±OqTG}¥zu@CÁR"],
					["@@ydN]dB"],
					["@@psf¹GV_£»riM½jwr¨H|WllÌnpt®^Q}"],
					["@@Bmp£GY^¹Mq{]mÈop@ĜqbvLs"],
					["@@EtÂvoNovSrKgs¶EnwAosO_of]}ozMR dwBTG¶iTJd"]
				],
				"encodeOffsets": [
					[
						[161281, -8917]
					],
					[
						[161925, -8999]
					],
					[
						[161280, -8528]
					],
					[
						[161080, -8639]
					],
					[
						[161820, -8977]
					],
					[
						[159319, -7572]
					],
					[
						[159537, -7287]
					],
					[
						[159424, -7199]
					],
					[
						[159840, -7065]
					],
					[
						[159763, -6938]
					],
					[
						[160287, -8032]
					],
					[
						[160920, -8541]
					],
					[
						[160920, -8464]
					],
					[
						[160560, -8286]
					],
					[
						[160921, -8070]
					],
					[
						[160339, -8192]
					],
					[
						[160262, -7851]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
