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
	echarts.registerMap('countries/tn/tn-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Ariana"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@zÆnzºIj~vDpOHCv· YwIÅ}o^{UCa³oHnUl"],
				"encodeOffsets": [
					[10241, 37805]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Béja"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ð®ÐØ¶jr{uvÆHjMxW®WoÖmÂç`|SnJ~ÊzX~tH_£k¾[xktPp_Q{ngYezF\\wWYuKk§YV[]e¿BE]ïEIV¯t£YZeMLcuo\\ÁJiZkaondzCAxrRz_¨iqjbnIÆbCR`hSpxxH@qfbh|y`"],
				"encodeOffsets": [
					[9098, 37897]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ben Arous"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@X|HjfYd`x]Xfr¾TAox°y¨KggIucJmwm{CcuOG£ā`¦ÏVjmDÅ"],
				"encodeOffsets": [
					[10284, 37502]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bizerte"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Hnªªja|C`AìMĚ^U°nnIZgRI^·s§S[]VzkJi¦K¢lv¶YXA­`|zYÔSH¬b\\sIê^yÉCYØeGoPC}uJiy¹myÅmNySm÷Z·U{BcTËyJ£osW}Éy}mI{T_èÁÕnXp­XwiNÅGu|vq"],
				"encodeOffsets": [
					[9301, 38049]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "El Kef"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@à@ztJxfFÖd qT¬A^rM|ZTr~JWoxkbMui}|{rAZc_IuXkĴ£S¥V£saDkcoFyX@ik`HysCñ^bÏp_jÉKyhCEqiE»u{_gz¿RÍUw¡BD¬b«K\\®I°[`flStzpT²E|rrZO{pÒ_O "],
				"encodeOffsets": [
					[8578, 37223]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gabès"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@v`Ðbð[DÔrj`dÎZ¤oZ sEt\\[©¨Odd¦WX}Iy^óh«~«ºÓ¢Ö¡¾³Ì®]a»åGaûġãE_Us_BuiSUUTiHßGySB£Zt¬cÅrlC^wG[NG~upÏZc²}¬_V²KÎRÆCdhxtzñä"],
				"encodeOffsets": [
					[9478, 35032]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gafsa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ffIbRJtd@\\f{XÆ~Fgæu¢}R~Mvza²þ¤°¨fæz§¦Îwpz¬AapBdsR`U{\\yGbk|BvaVsÎE mÀaiYsiËZ[ci_ÓqCï\\Ïau_[MĥeZÍm_e^qiÝJf«eÃLùUyaµ`ýGù@ÍSTo^UnùHĝÖ¶L^¬TXhnH~jr\\"],
				"encodeOffsets": [
					[8344, 35363]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jendouba"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@z_g{are@GwwTo_gQDaJÅamrij`§QyqBwDËW}ISq{YqN]«BSrÕcEweIysß@tzO`ZzLadkY£ZÑBZafDjÎnvbz@hLb°rr|B^vkvMxrzöMĆXn©lZäf²LY®n¦"],
				"encodeOffsets": [
					[9098, 37897]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kairouan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@~YnL@nÊDÐlQzîVWjrphEíCzqGÛ³uCw_]Gs¡LkOZw[aÍxP­wSqy]aÃ~Sû{ONmMćÕ£TC¦WAÙuÑĥTlH^·Ä}^qy£noW¾cRKH cvkÑ¶A~lTDvqaxjzFrj DRfZKpx Enw^IpLø¼Vpú°T^vDp"],
				"encodeOffsets": [
					[9990, 36981]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kasserine"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ax¢ÎVÀQhy`v|F¼jFrDzgÊL`iÐoaò]gt]E}I¨e^`c´W|¸Q¸ÛU³§oywÉ®]pe}[\\GyÚ±ÃD}[Bc_q£]q}ISumÍ[å§e¯ý£±ybuNQ}¡~åvh{\\UjDĬ|jDPÀúxnª@`¥ZxqHmDÄXx¨FU|iòB"],
				"encodeOffsets": [
					[8555, 36472]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kébili"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ģ¾ĶäÂ¦Ūöè²àºŰĄ¸ÐtlvÌzbúVÄK¬feÞIj]r`fÎnYĦf\\NòãsywcgDQÅLÍ±`U~«d±ÐYvoH}\\MHx]DqkÆd«s°¨~SÂ@dUAħgYOqtÌyNeA_QBX¡xcÅ³RsÊ·_W±Z{áÂ­G}HaKiwʻ×ܕū˒ÙĎßæ­D¦ǹðÍDĒOyHa H¦"],
				"encodeOffsets": [
					[7923, 34227]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mahdia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@_£eXl[¨Õ¨@pSL¨`JpDÖO~ejyÖGF ~`G~Cz`AVnooÙR]QBj´¡oD_{}}[yċR_Ðobas_gsvLnÓeCÑrrs{SoÍ±_MfrqH­G©dMnP|Tü}bÄz^Tr®xO"],
				"encodeOffsets": [
					[10556, 36439]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Manouba"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¤pzIÌdSAV|¸øYnzTnMVkmGp´]sïKv§kfwW{wsM«µ[hsD[EyZfmhR|o`sOwl½\\l¤G`"],
				"encodeOffsets": [
					[9797, 37728]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Médenine"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@¤YAzTàHGjSVVTjAv`Vt`äFüĢHb¼æbOàtzBĀt°lFv]}H[wcMgnkOiU\\[DrjĲp¦bOnb[¼ÉZÙiaKEcqL}A_kh¡ìBĜujR|WjrìECusÍBÅe½TÅIçYĭRu¾¥vwhCmÍmǝë¨ŮƞðUl£QÁĕÖĥØ^H¶K~FDjtoSɱĠ£NËt^fµg½nm@đ©ĽqmMß^}Q{¡ğoFBĨcVÁ@}T§¯"],
					["@@nDÄMt¼ZÒoGZÜ±KH»{]·{~WoukMAd¥ askw|S"]
				],
				"encodeOffsets": [
					[
						[9938, 34100]
					],
					[
						[10985, 34574]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Monastir"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@YAbau¡Xg¸uĀgreWcÏBy_D}_H}EÕHiz}fÕPC}\\mFK¦hGtZ|¾bIjv_~z¶r"],
				"encodeOffsets": [
					[10937, 36641]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nabeul"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@İxT\\rÖjKÆx~vêQtÌJÔv}]iTpw`Á~{igFouíęÏĝ»ĭóađcXyODdsli^ïbqHÄH¤vPDd|xnInvdJhh"],
				"encodeOffsets": [
					[10668, 37598]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sfax"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@[nXq¢fbZ~EZpt²Az²\\lHrÕpQ¿M}¨ÖĎlÐ¸Ìzä]l¤ĈÖNªc®HrGqe`NÎ²p|TqtÒqfDÔmKtuh`btpa`ÏČQ@½a}¡iwKé¯±H{_@g{SGëq{K}[B«]u¹É@AoXmIsieY}w¯iII¥qL¥Xcc§Pª\\s[FtY"],
					["@@v`ĸIQY»ß"],
					["@@ZjtZpQÔOSn]§OÓSb"]
				],
				"encodeOffsets": [
					[
						[9931, 35119]
					],
					[
						[11230, 35489]
					],
					[
						[11389, 35512]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sidi Bouzid"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ \\ÎvnTJr~¤^`rdA~\\C²ÄÙHz[~\\of^­xÊpz´¨VúDJPLdQX½p¤mzr~]¸ÃG]kĦSÒÚvBXD¥S^kyã·ËÏkÕč~§ÀNRoÖGqk±[yB±osY}FYear¡mW\\£pÍYY\\jÌZtj¿bnÍFUtub{AalH[z|_VQctoAb«BoyÍx¥y¨"],
				"encodeOffsets": [
					[9137, 35647]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Siliana"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÌXycpmbljYÂIp[ vKdNfY¤Z°sJUðFF^ÀA^ffe@ñqPa¡o{C£abeFiJg]}CouS]ù¯Uo÷»oKJx]FmwLoYQeCqiyEwiburCkSB}ÒµlduGIOùC·Ü·R{³X_d]§fJF~s^htDGz_jl@WzpEldCb¤tUT¦ĳ¤WlJvd`YBq{|j~NvawlXp"],
				"encodeOffsets": [
					[9155, 37329]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sousse"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@àrUrphnKp@NoLj[Bðaj]tkCc[mÙWKÉHZ_~CÈßNmD_qyµ`}uJi½aY{Hs¥gL En~[Io_K§oT§@§Ök\\Wf¤`wÎ\\bYxPKl¢Ht`^Dxv´HÜyrDFî"],
				"encodeOffsets": [
					[10433, 37018]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tataouine"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ܖŬʼØxjLb~G®HÁâ|²Y`XÉ¸tQÆ´wdW¢A`RBMfËzsPrhZ EĠp|¢~Rà]nNľrĒªn@¾m¶hes]Ì¤MɲğTpsCiEL}Gµ]Ħ×ĖÕÂ¤RVkƝï§ŭŹ½SY¹ĕóueYgGbiCcÁLOkµ¡sÃğVW{{¹ÿïï_óĂǽdã|¥OBýoÁ³s»»ssËċķok_­mL£AwáućåˈģξEJŅтƦõ˖wôK@ɝŰʑƨŹú"],
				"encodeOffsets": [
					[8558, 33283]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tozeur"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@[iqG} mWg«SK]µĞÕGúVmp]SÎTú@þH¶_uËsk·Ïůăß¹ç±ũõÁ¥ĵã½ġđŮÜMqGªhlsÌhCj} PZZAZ^Lv´Ü{àF¬øF¦ÒZ~~¬TzFXdCl"],
				"encodeOffsets": [
					[8344, 35363]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tunis"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Db|Vp]Æ~JZxÌn¡kI½Seq^W_wceZiGexlu¨ðL^t"],
				"encodeOffsets": [
					[10358, 37712]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zaghouan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@U\\¨ZlvLZxXtC\\g¬¶tNxÆCniÐU_¥ĂGÃrA\\ipKM@omLogVqßqgqoXiíURykÏÉCm@mK}Z^~hIjEafb¤|D¢pObr@òef"],
				"encodeOffsets": [
					[9970, 37337]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
