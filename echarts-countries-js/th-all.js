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
	echarts.registerMap('countries/th/th-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "กรุงเทพมหานคร"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƠG¦rĐĴȒ|Yąyo£ÿÕhßBW½beqÑgF½Õ_LíUCîsj_äIê"],
				"encodeOffsets": [
					[102736, 14136]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Amnat Charoen Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÚjXlàG|ûhW±ßfµĳOÇ¯UĕËĳæĕO©FÅOQx¡^kcú^þlzHÄ ºĺ¬ǄP"],
				"encodeOffsets": [
					[107329, 16580]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ang Thong Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĆTzÒ¤GYďYgfÇEm¡bQ²çgáGpi¢nMƢhp"],
				"encodeOffsets": [
					[102638, 15145]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bueng Kan Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@gu£E\\ÿ}ÑØmU¡pÁ¹u±Ð¯nãHqī¼CxÍv­§sPšɶMÈÂú^®oÈ@Ī´ĊA_lÆªTìħ¢ěêù"],
				"encodeOffsets": [
					[106689, 18458]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Buri Ram Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@e^lFè°º÷ÒõY[k½ü§^ĆÊÒh¯ŁZħcí\\¿w£·ÃcsJĥisE¯~é_BÕčU¿µÅÏk_·_«^±wħK½^U°ÆsSĒo¦»[ÒrìkK¼®vjsÚ^y¶T´Ů`~ÈSnèðºrÀJOŌf¢Æ¯vk¡T½MUĄ"],
				"encodeOffsets": [
					[105256, 16015]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chachoengsao Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@~ÎrL²àG~ā¤ĀzpZĆ@`Ŋ`ĄQfc­po´vØMĐoŮÑ¦Rîfªdyz±ªJh±KÒDVó«cBbÉY]Ný·£QÞçy¸v£I@­¢]ş¦ÉûïqBĽ^"],
				"encodeOffsets": [
					[103270, 13803]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chai Nat Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Â@²©cÜŃb±½l£u¥HÅ{vÁf{«KċZđ¥FV°´`z±òĤĒatcĤT ]v[~z"],
				"encodeOffsets": [
					[102460, 15790]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chaiyaphum Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÌFþU¾pź«r]LÔ ¨\\ºnc°B®ŴLĢtªØÞIp[ÈT¸¨Fk¸B¸_viîNúiÉUPyĞ\\Ġ¹Ě@À¥§ūéĽÃ»wþ{ă{F£ÍsQqý}¥û[}µs[^­Å§]ÓDíč½¥řV]Û"],
				"encodeOffsets": [
					[103732, 15670]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chanthaburi Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@r¤Rþ¸M^ Z ÏAĉdQÜ~¢|Rl¨O^ÖÊáZ½ÑhEËKÏjN×d³u_½k©¹CÏ]u»n³mssÉ¡GƏƒ¡n¡¨«G£Òß¨ðX¸G´RMà}RwæPf"],
				"encodeOffsets": [
					[104134, 13450]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chiang Mai Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¬nöKÄĘBªĐk®¤İSÂl|AòÆE¨èg¾AĆuČ\\~¨µwEoô©E§u Õ^c@u|©ÅI£ćÏ@°ÛwŅc]xóÏj×¶Íh§w]Zī`¯ălÏïă¾H¸¶ēkmTgÓçƙēV{Ùl{Ĵ³RÙjsLÇm½\\§@¼ųyû[å­K¥iM{b¹i±egß]ÏhOO»ſÍ¤JÆZņc£bPÞ½l}®®¡¼§~gPÄs¤J¼cx~Ø]¤`M ¬FÐOņ{øĚ_ÐrczP¬bmæčô[¢o`¬SêbrB¼Áàl|CİWb`Ěsü¹q"],
				"encodeOffsets": [
					[100830, 20166]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chiang Rai Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@rArºv_þ©b¢üyRs¤_¨nðĔhtô¹ĩ¸GT¼PT¸Eđq¨×ÎfMÏÍȓ·ċÅ¡qċ[m§ť±ÕD§X{taĽaiÙÐs_Í\\E½Ňr}s¥©]a}Åg¨µÎiØÐwôd^ņx¯Ü@ĈÐJ¤Æ{ªv@dÖ]v¨FóªFp¶x§"],
				"encodeOffsets": [
					[101902, 20632]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chon Buri Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@rAüðÊŠ¥^®¡@¤Juz·èÝq¯fq·µIsZsÉ°ué½©^ypuBåog«sađN½SÍNw¼v¬VV|]¤°x¾te¦¾ĪQ´qêæYî"],
				"encodeOffsets": [
					[103397, 13788]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chumphon Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@|¢]¬[°vº¬cxºbNmŀ§Vî[ÚjQEÁ^oÏwęµ»ÉU»ULëDkr£OW©Ôëcÿr×k£^ősÁõk}ŷK[eïqG¥q}gvÉzĐüŖ¾¶]|²xDº±xü\\Ĳ Q¾T¼´ªRÆÄzl®{~"],
				"encodeOffsets": [
					[101270, 11038]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kalasin"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŚQĮ¬D´rGÒºO¥eöÁXÏ Æ¨JÂªq¼Û®ûI¥¸ÿFóÑZŁ³I¨ĵH­t±Mġå®ġ©ǳi©SO¨§zUå|ýUZ¼kÊj°ĀDĬ~ÔeÁ¤"],
				"encodeOffsets": [
					[105588, 17319]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kamphaeng Phet Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@zoĶp¨TŎåƘF¦£]¥z¯òwv»­ĻbIÍĉG¡ËµÃċ@ÅÙüÁ¡TysčZýaÛī±RmxŞXðDÞ¨H ňDÀ¨¤L~Wº²ĈAÂ`È"],
				"encodeOffsets": [
					[101731, 17294]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kanchanaburi Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@òcf_ÒĩŌƵz¯YªÛ\\éj´i²XrTÂ|RvsBéWlIÁ¢R{R±NZ´¢Yd¢KĢķ¶c@§µ»ySÇTKǕ³¯XÏbÅzOr×ŉįPąwHymħwÑfµC ĺ±¨mØuZG¦÷¤áĽĐX¡Ěslä§ÔĥĒ{º£¾XqĒq\\nÄªN´lt]²°Q®öô©pHoÜÞ|fl¢mJJĄŌJ¬"],
				"encodeOffsets": [
					[100924, 16031]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Khon Kaen Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@êþ°SÜðG¶eÂ¼ÍüüDy¶PhÖªĪJ|JªÆMÒ§FėLÎPľÄÂ£f}ÓCīCÃùí­¿_P©µé§«pů[´õS¿ÏLË¯Eçk]f·p¶ßA±a`÷sùĦE¤||ĄýxÄ¼êľ¨Ŭ¿¦ę@ğºĝ[zOVÊùjíMujÄQ"],
				"encodeOffsets": [
					[104231, 17167]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Krabi Province"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@¡jQÜnAB¥"],
					["@@oUµ}P¡¦x"],
					["@@nl^À]ä²¦B¨sªCt«aNãs´QÔ®I¾yìh¦¡Hãy³O±`¢ÅQ§P¯Ã¤āq©±é ·ÄU¿ÇIg¨H²¼lw¨}Iw¨f|y¡S{KdªM¬£ŊÛsPô"]
				],
				"encodeOffsets": [
					[
						[101460, 7730]
					],
					[
						[101468, 7865]
					],
					[
						[101002, 8576]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lampang Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ðkÐĄ_°YĬx^Æb~ª^t¦q~ňF¾[`ÎtÚÏnûGćÞƷ¢¡ĈÄ» UÖ÷Zkw±^½Yf·³eSÁíi¯ù¡e«­£ÍG¥ÏZ¿«õā¯Ñ¡BG§|Iü¬J¯s}Hj{¿Kkyř¥u¯ÆoDÚD£^©Ãŕªd¦íAuÂGytäMxsH|Ģ¤ctÚ°ùČF}¾KèĪìhf¬ÆäXÔhFz"],
				"encodeOffsets": [
					[101699, 18975]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lamphun Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@EyÓgWÅãe«ëgĩLç~½EúċÙ¯ds£{ġGwtãNszHj×¥`B¶iĘÀÂ®Læ\\zü»Ŵ@[¨n¾KÈitQÚĳ´k||ÚUƚĔÔèh SlnĔ µG·Ą½"],
				"encodeOffsets": [
					[101699, 18975]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Loei Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°]¶¯æ^´°ZÈ¢PİĀîb®`^ÔdjS²ŸjbôD¼èÐVº^F_»G»|ſyíV» ²ùGÅ­÷@B¡|}NG»Ĥl¡cÛ©ÁÛTý¯é¿Qx|JÖÅĲĥiS²ùdfōS~kq]Iĕ­uĤvfM¢ZÚÊoT£®åBL¾yÜĒD"],
				"encodeOffsets": [
					[103391, 17994]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lopburi Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VºØƲƐGÀŠþdà·B{ÎT¶cL©kµJÿQ¹ĎuÅˉŭ½S¡FyÁu|ÃxÅG½©ûeá~@Ġy_¾zeò"],
				"encodeOffsets": [
					[102854, 15422]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mae Hong Son Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@rºtû_ęXaDįk{ÂßA»qéa«T_¡pó\\åĎn«aOydq`Ïę|÷PŅEÏ«N_^£}×dwI»t£OÃh¨}»¢­~­¾kÃ[ñAĿ­gm¹CıĦÙŠÀ^xL¹ņA ¿ÂtÀe~Íb]¡gµÖP¦sdĈ ^]d© `g^²LİBLĤm¢VvoÆC¸dK¢~E¾ÆhLŎgĔ}ÈîĤkrRĤtPEAîVà¢TªkĒåVÔjÐNÚU"],
				"encodeOffsets": [
					[100830, 20166]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Maha Sarakham Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÿi¯lÉY»þVæ{V¨yP§ªTãdçE½\\āgĻï_±ęèÏP`Á½yádYjŝ\\ZÑö¹øKÌÐTÀ³ö\\oŰ¨¬¶êOªÀ`î®ÄúD"],
				"encodeOffsets": [
					[105639, 17043]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mukdahan Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Hj¦ÈG®bЬÿtīe«QûÀÈĽpE¶·ßWkÙičhxywÊvħNiyLQŀÙkEô·ĀJ¦­ü»Ü"],
				"encodeOffsets": [
					[106571, 17237]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nakhon Nayok Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ø®C|èz¦êvŎål¦m±U³W¯VS©ïÇ|ã[]ùD§]PwăRŉ_Aɔ¨"],
				"encodeOffsets": [
					[103375, 14615]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nakhon Pathom Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¾@ĜêƲI¼Ä_KcŅm§ªĝJéO»^ËSwYån{\\ðQÌk§XqyPaÆ"],
				"encodeOffsets": [
					[102207, 14400]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nakhon Phanom Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¥ėìĐŽǰĩ»¬·P}EǧÑſLópámЫĀÂXÆuèDªÀ]Ďc|J®ėDõc¯L{ñVäĜg²VFê«CoÂV¢nÒ×~[Ā¤Fhv"],
				"encodeOffsets": [
					[106689, 18458]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nakhon Ratchasima Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÆčvRºIĀl¶Ü^UŚ¾¦ĎîÔC^Æ¨]®\\t~¶ \\¦üþ~RrÎtúĥøt_²bàBµ¸oVă¾N¢Sl°uÅe¡Pŋ¿I¹qçïTmÇ}ŭ_S³zµÙ]itu­L»lqë\\Ñ¼p¥TđtÅV¯±ypEíbŝ_y}§NbĳĄWºw|k¯LęcWĳĨX¹W·uFōæuµÂ~¢_ƐÚuÀ\\þ¨T¨ø"],
				"encodeOffsets": [
					[103844, 15360]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nakhon Sawan Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ĭ²ÜþbĎYzt¢SÂûÚÆ@ÄČÌ¶H¢ ĊJÎhWhÉMniıÝ®ÐWXĤgüBĄzźmNS£ĿB±G³µH¿ƱƏ×U¹ß_¼Za²Ûńd±ªÁ@YõÄE¢YØU¥bg~±Rğ·Á³D§T[Ļ¸}ëb¦O°"],
				"encodeOffsets": [
					[101468, 16269]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nakhon Si Thammarat Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@oÎãEßNǣbćjƛ¤®ý~ßªsĦ»ĩũȿAuąaËß`¾µx_ćGÉ_ªfÚi`ķ[āğhÃE¨}JR¨¡Æ_P²z´Gä¥¢u¤¢èMÎmú¦A~z¨LļzFÈSØrznìRA¤³vÂIÌd"],
				"encodeOffsets": [
					[102163, 9547]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nan Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¢öb¦ÖJdTªÐojÈTVqĖPêÉVc¼®ÂólA¸Ĉ£x¤RøwĖĨ|jļDò³ÚJRzØmaĥ­FJyÔƙ]¥Z³ĈÕgoJ©­Zãsõ¡ÅWB©áY©ƓśIçËßwD©µ×CétÅÉVÃMaÌD¢®b|út[x¦ĚWº`ãGwänÀ« ÆyLm¶"],
				"encodeOffsets": [
					[102749, 19258]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Narathiwat Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@dØa` Bôķº{ÊÝŬđSÑR¿£y»ÍYÑ\\Áñå ¿¾JªåÆáA´eGìydc¦li rhTĀvĘĔpLjÊÖ]b"],
				"encodeOffsets": [
					[104041, 6713]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nong Bua Lam Phu Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¶C°fĂIvbŉry|ó¤ăC¹¬Hoy×Pï°¿¶²_I{©ĩgÕµOzûCû»ÎÁµfïHÂÜªdk¢ģ¼H M{~A¢ø@®HÆ±ú"],
				"encodeOffsets": [
					[104531, 18067]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nong Khai Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`¼EºUj¯ĬāMĴÙŘW`©o·ÞZªò^|æĜ~yLVĚ¬ĆŊ ŢɵW»X·ë©ªÓgÕ¼ÍR£©Ê§q±`ås¯{ImÛIvSÎáÊÇA³îa¨Ã¶ïª·\\}oÐ«v"],
				"encodeOffsets": [
					[104508, 18523]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nonthaburi Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÄSW¥nÃĜ}twäNqď¥ƟH©Ğn¨dņ"],
				"encodeOffsets": [
					[102687, 14466]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pathum Thani Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŪMĮtǼĢÌ~¼G§Bɓ@_ȑ{ĳãMsxě~mÄX¦"],
				"encodeOffsets": [
					[102753, 14456]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pattani Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@A_bc×Wª·wmPęumÖdõDZ{ĆjĚĜLĊÊ}rðeĲÔĽVKðş"],
				"encodeOffsets": [
					[104169, 6733]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Phangnga Province"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@~Hãñľ¬U"],
					["@@mZxIÖÊs«ĭ"],
					["@@Xî©hSD¹ăDĳr»DÏK|¡]IË³½Êjº_A±¥^ã]¿mkĻK_¡T­«Áy[¦ßdA¤ÙʢNÂYÊxDĄ¦¢OÄoz £łXL²zì"],
					["@@¡«IDĀXÒá"]
				],
				"encodeOffsets": [
					[
						[100946, 8271]
					],
					[
						[100630, 9085]
					],
					[
						[100754, 9571]
					],
					[
						[100693, 9303]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Phatthalung Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÊĈH`¶w½à_Ú}ŹlĹMAǇfµGu~¹¡ōwçÃàyèL±äE±Ő¢nîkhQ¶Ā"],
				"encodeOffsets": [
					[102139, 8040]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Phayao Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@jľbb|sW¨ÖC²¨ŦnČ\\rÆ¢{c^mJÅB·ôk­Ád»ÊUOérĕUSiÇÏp© ScÕIa¥¡õZœE­OÕøVÃ¼ć¡¢ÝƸHĈmü"],
				"encodeOffsets": [
					[102080, 19897]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Phetchabun Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĖĔÀÚDÎÊFHiâNþĔA®vJĖ^rl}ŎTeúcT±ĦjÆıIÕw{ÀRRÃ·`·Al§ES·\\ÇoJ×Ýs©KġųA­d¯m[¹§KÓ^¬qoŹV½EýËKªµdÍS|Aß¸ýcş´¶HA²ŀT¤Md¢ã¶ÃXdŀ¬è}þ"],
				"encodeOffsets": [
					[103085, 16740]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Phetchaburi Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¬}Pw²hvÄÐà[j¢OÄRznB¨´lĊIG¹ĆjOqÀÉÀG½»óuęğ[ĭÏW³NÇ£éCç[n½håGūĆI³r]ö{faĄP¨åâz~XĒÆC"],
				"encodeOffsets": [
					[101586, 13521]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Phichit Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@êdüB¥kbzgædS¼T_nāòå~ý«çcĿÄWäµc¡ŹnăyûAģhWÏX­ÞĲjmNgÊgXa®ļ"],
				"encodeOffsets": [
					[102433, 16892]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Phitsanulok Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`ÚCàrp_Ð¾OĂpòfÐČcV¨L¦b¾òZÀÂW²¶l£aåqCđzÛK½æA¤­SpÉYÙN¡ueģBýēMjáGEÉCÍ¿ÙĕēñæmĂ`»STåcyhalA¦ûécu¼ñxy°^¦x~vjèÔOXú@HàĳØáÜSÂB"],
				"encodeOffsets": [
					[102383, 17578]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Phrae Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@®PŔFYnµzKÅ¬m¿xãäH_X¹¥ę\\ws{ù­aC¡bËH«u¥À«I£Ç¹iÅC«©¯lģa¥ÉÓà¿h¥SÝßû«{J¨H¢A°ÒöĂ¬ÀYÐ¦H¤Î¬®¢f°új îTÂ´fe¸Z]¾x²Yl"],
				"encodeOffsets": [
					[102516, 19260]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Phra Nakhon Si Ayutthaya Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¦C¨pªNÈ}úâHèhR±¢anFeÈZhZĐâ}m«v¥ªGĒpbOī~uOÁKDÍǻġĭsũNÃTLÃ`"],
				"encodeOffsets": [
					[102627, 14518]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Phuket Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@uó|Û{©ā¡AĔsffÈeð~aö®Lª£\\"],
				"encodeOffsets": [
					[100800, 8288]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Prachin Buri Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@vE ¸ºXWĴħXĚd°Klx{¹XĴăaōҳÑCLg²©Iy²z©ceí¥QŭÒďp×N³uopd®eOx¨^úC\\^{äðÈTª°U´XV²¥nk"],
				"encodeOffsets": [
					[103844, 14772]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Prachuap Khiri Khan Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ðêĐ¾ÊY²´bOÔ f¬_¨R¤n¦Ud¬°®jĄFÚZð¯lGªâ±FòSªw´P¶¸jüh~æH¾g\\mèêDÈ¤´MÐXdĝNćfóqÇÕ±U±sYąĭ}åmŕÁÃõƑUÛǉPµÏY³^ÇE³iRÙí\\UĿ¨Mn"],
				"encodeOffsets": [
					[101523, 11295]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ranong Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@|}k­yÃQÅ³©S»R½[ıû²w¹wC{±^½µûŕďÊyhupÅoQµq§sJVÙ­I¹V¡íªWL¶Ʈ|FÄĚ~xeÎĀilĎǲ¼ĀZÌªnÂUäR¶ĆĠhQ"],
				"encodeOffsets": [
					[101270, 11038]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ratchaburi Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@D¶ÒeĨxznGĆxİOØŊ¨WlRË[ï|æmZwÏKÝ¹[Å`eíýĉJ³kA§ymÃQ¡Piß\\ÏuÃ±gOx«~côhöeĬJ¦idKƎ"],
				"encodeOffsets": [
					[101547, 14056]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Rayong Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Oexå~QNßQH³W·ï»Z¯sV¥qąDŇ¼ƫrĩoMbĒth¬pAæovzª]¾ê vÊ¯ ttY¶J¸r°e"],
				"encodeOffsets": [
					[104134, 13450]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Roi Et Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ǵjª­ĢĢæ²N®sĶGJ§ł´ÒYÚlRĿzKË©eÍħ¿m}lS±»FgKµr¯zi`¸_`ùrÓ×¥}}¥³¯SuçY|ħœ\\bËuõNQÂ_OçÐ²Ěð`hļĂ[F¾cèä"],
				"encodeOffsets": [
					[105996, 16588]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sa Kaeo Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŎҴM~¨zŞ`îaFo²z¾]ĨL²x¬]¸`[ÁkkP¿_ïÓaÝÝĕĝ§}aeµLYÓd|@çcÝP¥ÕÉ]§Pk{Q¡Û}cRBĊÐaÊA¬dUô"],
				"encodeOffsets": [
					[104436, 13914]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sakon Nakhon Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@W¸X¼tO¨®ÎuDwĬ»räG°m²ÏºvD¬EéUh±ěãòU|°KödĘCI­d{^č¿C©vçÅWÁ­aÇHi¥G©rÁ§IÅWÐõÂfP´V°ĿºµQÃÁXw¬Ìm®lÄÆÒGèTwpBæl"],
				"encodeOffsets": [
					[105882, 18296]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Samut Prakan Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĂH}±ßqK}ÍƗz£Zƭ_KîÖ`E¾ÒhrfaX¾àAÖg"],
				"encodeOffsets": [
					[103282, 14026]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Samut Sakhon Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@xÌT¼]P`ãtiíDßM±hoƍ§ÜLÞxÐ"],
				"encodeOffsets": [
					[102473, 13980]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Samut Songkhram Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@þfîÆ_º\\¨ÛŗśąiHº"],
				"encodeOffsets": [
					[102256, 13649]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saraburi Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@fü¾ªÆHÄwv{ÂEz¢¾TˊŮ÷S§ý§[¿Ùv`Ə}¡¶Áé¥çyD{÷­»HË}CÎLPÂ}vPĬa đo©Hu¦n¬"],
				"encodeOffsets": [
					[103009, 15008]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Satun Province"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ uS¶"],
					["@@uÃüfÀ~aGÇ\\c@Í"],
					["@@ÞbÕNnºäá¢Flo\\ÃÌk|uãX¹yKña§JÛs©êN£Ô}jÄuA²ŧöW|aŬÈÒCb"]
				],
				"encodeOffsets": [
					[
						[101660, 6736]
					],
					[
						[102087, 6689]
					],
					[
						[102128, 7301]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sing Buri Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¦Gvk¤¾Y`»àfñy`½z@ğ£HÑyąSkheü"],
				"encodeOffsets": [
					[102617, 15314]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Si Sa Ket Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Tv´°~¦¦~h½²³Û¾AÆ©mļkà^Úñ¥VåAĉähgªĉ~cÉeã|} Ļf_w­­l_yrÛÍÃnq_ƙn{t»S¿j_wSbĆkÞvĪS©ÆH¤cÁlYvÞÊþqĦuth¬YÄÖl_nI"],
				"encodeOffsets": [
					[106479, 15774]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Songkhla Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@èŎx¢ºv}He¶ǈBNkĺźÙ~bÌĆ v B|š¬Ǳ¢Ɠÿ¶õ[ÊčĎŇPîÕÔ¦Aię|ąYP¥§{ËC£]Dñu¡Rg´QêÕ¦ÝR­M{ŉf§ÄT²|½JqWºvä{Ël[Äkp_z"],
				"encodeOffsets": [
					[102432, 7262]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sukhothai Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@pC°Å¦vzŚlL|ÀiGt~I°Þà¦TÀgÔß¦ÊĤb|µHë£­g¿o`û£Ó^éÁATâÛĴ×Gßù@WÓPiçu}w¥¤ƗEōæS§ĵoypËUf O¨O|Fň"],
				"encodeOffsets": [
					[101700, 17684]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Suphan Buri Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÚòvØIÎªWb´à¦EĒČYL|¬Âe|uÆfûglgoNơmj¡o~ùMÇo©D§¥»ƱJěé½@WÐ´°LǖSTÈ¼z¶@¨µdġĸ¡Lc¡ZY³MQ²|¡QÂJkXAêut"],
				"encodeOffsets": [
					[101670, 15353]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Surat Thani Province"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@âHjuGñïSÞ"],
					["@@¢ºU®JUÚtIr¨¶pRoÆr~H¦ðr\\fŸLl~öŧ£Awÿ´Ï¥mJå¦b`ò£d¬M¬ÜpVÊcâº]TcJËuÁ´B£Qmëy×qTÇyEKĻy§}Bù¥nNÍ¡çv£ëg½z­JÓ³RtMäbs¬ ©D§t¹`iÉ´¾JÌ^{¢LCÐ¼qCĴĄCºgT"],
					["@@gÎÈbÌ}píµ¡§_dBÚ"]
				],
				"encodeOffsets": [
					[
						[102373, 10024]
					],
					[
						[100876, 9530]
					],
					[
						[102334, 9730]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Surin Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŞZiâc¾zRöMÌvaŔ[ĨZ{èJm`kÃÕZg«vsrĥÉýÝZuÂkdG£ªÅTuĩlÝaąćP£U¿µSá~L§L[qÁfåm}vŕOoYAÖ`}êF°jtĦIt d¸Äx¤[ÀdîYĨ°łÑgÉą]û¨l¾"],
				"encodeOffsets": [
					[105587, 15853]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tak Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ºDhnŀ®òBÄ\\OÝ¤adYŅÅIÎ£ƀP¼gP^Ðhà²fjaº|N¦jÁ¿jėAµ¦_ØivÁîBc¥Ŗ©ªÄ¤]CÙEŇP{§PeVÌ_ÇBÁ±ćX¹}£K¿§ŇCG§CÝWïŝnwQP¯¥H¯gC«qwzÃaPo{ƕmq©ÜZy°ŋƶÑĪe`ñdS~zĬÖqr®WvvÚĀĖBàªzØeÄ|­QWy«yIÍnIÞkÀft»Üoô¿z@ªj´ªCĄ©ÌnWÉÌþœĢWÔĝĴÍ|Wx"],
				"encodeOffsets": [
					[100262, 17989]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Trang Province"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@íh²Æo"],
					["@@²rª£Ă°ÄO~I§ÄFgĂĠĸ\\j_eÙ`©ÿRµlgmí¡²ŏF²ãKzçÄß`y¡Eãâm¹MÖÝaÁBSyPw¾XzguÓf»ØVrŘ¼v\\"]
				],
				"encodeOffsets": [
					[
						[101837, 7430]
					],
					[
						[101643, 7842]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Trat Province"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@FÉFaÒêj²Û¤»ka¥"],
					["@@FØiçWYð"],
					["@@¢HtÊtnm´v¼^DÐªº¾lJç²WÜËôñn½§QţY|Í[ýäm¸£~w@ïå]lÅP¯o_ÁĨ"]
				],
				"encodeOffsets": [
					[
						[104833, 12287]
					],
					[
						[104993, 11963]
					],
					[
						[104712, 12593]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ubon Ratchathani Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÆPEªPĖĴåÌVĖ°PÈ¶Ĵe²àŔǴÅÿ¢ħ­ÂXČ½Sċ§TqÑóqoÒ\\bµ©eÅÙNáÈ¹t i¿±hws©fƭMÕÿĿÏV}PÙm»©©DqnsÊD´y~ÇNļ{~fäÊ}d©ĊhgãBĊUæ¦Ùòß]Ļlnd©Î@vöêFvv"],
				"encodeOffsets": [
					[107029, 15933]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Udon Thani Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¬uÏ~p¸[ð©Äµb§´íÈBâÉTÍuÜJnJ°|t_æ²¨rªÉ¤ÎQÖ»hÔª©ìkAåxoSHçÑÅkÃn­Ëx«ÂWÄ¶Rŀ¹¯UO³¦PÑ¹HqC³«ĭřRĽÃOÍKEĘÑ¨ÅNI©±`µ¯ÀOðzØp«GDº£Ą{ôqzaŊuāJ¯eµDU¼zî{ƀ¼H"],
				"encodeOffsets": [
					[104508, 18523]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Uthai Thani Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nrƖp|ObyÄxr D¬h G°ìa~ļ·\\S¨CÂ´Ġ¸²Qh}¦aVZ×¡FöÃZy}\\u^ģSsdđbģ²ñ_y³U¯ßa³©XÍ×JuñÙ{QÁqS±W³ji[ê"],
				"encodeOffsets": [
					[101361, 15546]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Uttaradit Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°k¬ªÆDºjÈ¤¬J¦¿vG¬ ÄNÊUÆêsØDª¶xCÌàJèƔŜĆkLñvIóp¹¿ÃI¥ąµRÃã±µÁX¿Y½ña¥K§UċdÏñeoPāÏ½o`ßqÙD_]ê¤Ô_üpÀh®¤Gì{¶"],
				"encodeOffsets": [
					[102294, 18231]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Yala Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¢QvCò^¤D|Ì¦¨OöCcnÕĚvnO¸x©X^aÉÕKiēouėSÿqgjkd¥zcHëfB³cióF­ÁÉFu¥V§¥á£a¶©¶Tn°Ex¦OjäM¸fÆ¹xbz¨nÊá[ã¿Ì"],
				"encodeOffsets": [
					[103262, 6454]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Yasothon Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@jĨM uÉzxwĎgOǃ«¹ĹGÃky]ýdùl¢]RwuuéEuõ@ªÍcÅªB½Ü±´g¾ØqÔ_ú·`_yj°qL¶h¼ET²kn~ĨÀÎªfÌ"],
				"encodeOffsets": [
					[106861, 16716]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
