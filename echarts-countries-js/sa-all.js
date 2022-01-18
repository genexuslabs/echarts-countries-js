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
	echarts.registerMap('countries/sa/sa-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Al Bahah Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@±œ@½rUkiƙĝwÑRÙ·ďÃřÅcûF_¹yÁĹUÇi·Ã{I¯^sëLŢqòVºHÄ_|íjghIĬĦ dÄLüb|xààńHÄkºUÄh¸TM²§vçtgòÒ^ĆO`Ă®PÀbm"],
				"encodeOffsets": [
					[43041, 21120]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Al Jawf Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ƌ±ĹuïJęX»hgÐ Æó ïeüUƄPʐŒvǘ^ĢGĄSȖÞGŲwĘD¦YsÒ¹mêcǄY˨EàJĒd¢KäÒ£ČÛÊmĔDĒI²]¤sËj¡Ç¢ƮĳDÑÃŉïÛǅāįÍǱĩĭµď¹å¯½ÁQGűQģ]ÿqĉ×¡ódÙÙiȋïɁĿŅÏĽcÛuœµßyƳù«½¯¡ZÓ]ßÙs¡VuYËEÉoCÍă^ĽLÙTăzÏÉ¦ðWĤBÆXŤ[rmU¹¹ý£qýu]ǗX£Lő ĽhÙOǧă«O¥bÑêåĖ±ÀÑĻ|ŃbťsùFákÕGāiÇµqMėb¯EËtÙ[đHĠ[tRÒzÞjY¦|ÆÎMǤԪāȐüÔ˸ȴȾ̴͜Ì̜ÀƔ˪˨ƘǟǪ¥¸ɵɬǿǺȽȸ̄òϴĴxSrĪ~"],
				"encodeOffsets": [
					[38898, 32514]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Al Madinah Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@tÁBk¿¹IkdleQÔrwFÃeģǿNr½híRÏCě[ŝL¨»ÊkÌXÒvž¦¦PĲIÈN¢dªÆÂ®\\ĎRĲAȲČsƂÄifkP©aŷIęJ|ÆuĠm}nhûĝÁĐËKË»U¥vÇo¥cãGŵL÷ŭpKk]iCtZ¿Ai·}ÏƣÇĳ½yLÈĢ«XşùÇåëāÝđÅĹõÝĳkmAǑº¡yñçÉ}£Cõbgd¸NÈY»ªÑrNeÊŦXÈGaidÉBÑQǻÃïmi^Gì|ÅKĳs¥tÝòÏ¤Ð~õqűS[P[ÞN}ämXČEw~uFwÉsÉZēöąë¾ñZÓ¸eFÁsK{@ov§Z²zEl Öx\\À¼VĴDÎr¢ÈRSÚBn¾CìYńAĐJÂƺS¥jÅCkPsÂuĔ©ĐÃ´õºÀ_ºkbĥ¬ËI³cèm¼­ðCèhÔĔN¢řj­À_KÊjĚJðcô{ÉfùeoZHndŚ|Š¬Ă¤`¢DÌwÊ¡ c C¦VƜòXwrçíØġMĦBM|A½îxW¿JgOpXĮôÐJŒ¹^oºXSċnWĬskŘăÆUĀDǶ|Țy~"],
				"encodeOffsets": [
					[40772, 27297]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Al-Qassim Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŦhĒ¾nÞnĸPpbO«êWr¾th DÊuÖansŪnêÀnVYĆj\\lXø´ºæÊʆǠ¼Ġ¨Ƥ¸väŴzƤØȺĲÖx PSÎ¥ńăÄªQâBôepLÀêWÂÂ¥ÅNQÓi©{čă§ÝqcÍUeMg`FËkě@½~ðÓĲƧ¾ÍfµBe´ïbNĕmåIīVƻcÝDƏrûSs£³­ĉkcËy³µáȿ©ÏY¡sćýÓåÃH¿\\qµÏ¡CÕp¡DƑqÛJŗ`Å^ÇpëFm­ÛaďÌÂĞgüm~ğnÅv{IJĚbŸOªelÃjƁ"],
				"encodeOffsets": [
					[42404, 26150]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "'Asir Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÄŚ¸ĐQÚxÒƚĞljVq@¾²ŔÏÄœ|yÈK`Ò¬¶´İĒÐ²ü¤Ôp|ÜÚÐfÄEVtZÆAî}Cj¦Ā¬þ|}ĔñÌġèÕ`A]¹íkmõoĻRo¼µ¢ñ¨ÇĘ÷ĎýǀűI½TÃM÷kaiPŅLÉG·y½Ëeõ_¡kw{ë«¿śġƕƟuCŇD»kĿDËm»ĹD¯ő§´çÀÅjÃSoûĦíbi`îïsVĒ{ÃqÅ«ÛiÁwĽoÃf×Æ}êL÷IğT]¸¿LïY{NæjČEchTĝ[ƀEêŴ½ĝTïGZghmÀKLȢR¶§lBÌ¬tÆTĂ[Dj\\hĶA³èKƜMïXi"],
				"encodeOffsets": [
					[42700, 20272]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Eastern Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ʬuļʘyԼÓĴƏ\\áOb¿³®­AgƶDŘWÚ`ˢL}UC«w§Btu_@¥rº«öak¢ÙrCL¸eIO©b¿¡G ]Ö¶¥ØĒH¦enrQc½LçKt rGG½ªrML±XeWNþX]{OCI |²IMtÅ`p{bÀ¾T {Imµ[Uv¡zQHµjI`ßjAS}ê±ÂmraèMàć¦ĉXpPÁhAPÁ¨Lbi_JLnÄ¨S»R¥W«DÓysZKág£Ô[De¶PÛ\\Aõ^Êan±mâŕ_z¿mExi[µnWfYDuNnG`³nW¯T}|[¥^¥¦ÈĕEu°B}jBf£r¾ĉ°ċÈĔ¶PĢvAvDrn~|NdÁI{gK§q±äS¨òs§´F@Łˤ͝ȲʛƦǭȰʙقïЎ³ӖÍϼ·ʒØØϤץȳ؛ǅӑțבΕśȓÛ؃ȩ׹ȩеƑΡšӗďաĩ˝˝Γԅ»ϻȋϻȍ˫·Ƚʳő˩hʆt̾ÔҢɠ ̚ʸɸ¶Ϭ¬͔˞ʦºΌ²ϔǄெǸjƊBǨiĬeÌÒ§ê£°ŅĦśŌí¸ĽÚÅÇ¢¢gĈSǒPʜTĒG¾JƸUŐAǼYŊÈvȣôùpÆçÖėðLđmÿE¥dù´É¤ĝÌjÇfřFýRÁÝÀčĢkTćHÏpāªƋæµ°iöi½´ą¼ UVÀ¨ĄÖäĀĂØĎÆƸˌôŤ²æÔÞŮĴʢȘ"],
				"encodeOffsets": [
					[47231, 29786]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ha'il Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@° ¬¾ƴúàzŔ¶ÜvľdņÐɂŀȌðÚjÚôcŲ¯Ì@änĴtƨ~ŔĊXƈĺÒKĮèV AŪsǢÐkÌ§Úó ªàUºV°lâÞZhiVĳ`ØUĀZ¢CĴ¹²i¤VÌĒÀLźȻ¨ō~ÇÒ©Āeƞ]ÔWİ§òãøÁz£ÉoãG¿h£¿éoKófáA©RÃŃĄÍ¦TOÕwȹıƣ×yãųuƣ·ğ§»ʅǟåÉ³¹W÷[kąiZmU¿métũmÕbÉvCsgq½X¬éPoaķOÝmmđ½ťgċtȱıBčQ[Á­©Å¡cÇMıJ¥OŽ¥ÑuËWÉl§¼K\\ŞDĜQÐgîq¾MȀfĤEÄxÓqRkfcJl ºlÀA sÂlv´ƴtÞÜüÊZ]|ññ¤qŲŊiú}ÄùÀÇ^ÇťīZĭt"],
				"encodeOffsets": [
					[39936, 28844]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jazan Region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@RJ¨Õfa¦"],
					["@@ÄBfH"],
					["@@ÎyAunøo¶dZpnnK~Ã~uQc`ã}I©Â@£ZěksFiF`¦"],
					["@@LbJtm[s©EPOX{L¯CZÂ"],
					["@@{z"],
					["@@ðbfì`Ğ\\SdgFiċMå|ðZÀK^·ĠSøJK~éØÅÄepxľjÂ¬ÜÆÄr|Uđtðíj_îaüĥ_`oFĈ³VqÍWÅ^£PiaÎ`oohAÇbe³w\\zUT}tcJ§lsDHpūŉW}B±mý_wnHR U{bqàdÐC~±Č¹fsUĂh{|Íh¬F°BnsaVÛUEIĖuè@ÊU¾[xNÆ»¥JI±¨uLaxÏõäZruu©F¶{Vy"]
				],
				"encodeOffsets": [
					[
						[42565, 17285]
					],
					[
						[42724, 17131]
					],
					[
						[42758, 17296]
					],
					[
						[42842, 17305]
					],
					[
						[42651, 17326]
					],
					[
						[42584, 18530]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Makkah Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŲTör}ÏÐ£Þñ¦sĴtÆL{Hëj]ðnǼÄÒRÊAjcbHWÇÉťfMÒq¼©ZMÇc·höa¤DÊ~òè¢zǒ¹ BlnÞĴĺöĒÆĂÞæìúÈŠWġ¬ÇKzĴ¾ƤÈÐ~j¸BYÀsD^j l LŮo[ąF¿zì¡tdñ^¬ĕ^ğXĸɓ¤¹ÈwIŞJȸgÌgw\\u¹KƏì @ŠƎurWRwŃD¿xƯnŋEy¹³Õ`ǁMūAdØïÂñłǉý{ÿ«¥iDí~ÅBYsUÃFÏeÛÙ{Óoû£Ï±įđµ³Ñ«_ÇLz{ÃŔÐan¿Oā­_ąPÑ]ñhsuè±¨NSg·VÃl¹GÃßŃwß{ûaÃKcīĥJhgîi{`GÃU¹rñKšìt°]JÄ|j¸VÈĺzÂº`üEÆdjðWNƛL´çBĵ[giCā\\ÅSsË«kAµ¨QKȡLn¿hgYðHĞS¾ ųéFſ_ëaeï]ÎsÞ}JĚZ^eÀs¨sZ¹FzgÀ}zþP«T{n[´cbîQªµV¯Ú@îytI~}\\¾Az`ÒÏhtUÀRcº²ËEõY¸`XYrZÛ¢±ïrwynB|©I­²]|¡`cQÏ@ng}p«iNÅ{t_¤¥à×Ě``_|­`KÃ¢RdkwG©ÀLÀly¾L½ĔMÂj¦a^mþV[ÆSäì_±°´A²_lNWTrEª~EbôgDC°¦Px´ª\\´SNºOtÀY¤w¥ö~¨yÂāpodB¬aª~} CudHqxAÈ"],
				"encodeOffsets": [
					[39594, 23985]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Najran Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°ŒCĺn¼CÌlŀC¼ňDv ƖƠŜĢ¬Àìx|¢lö` fÌz¾H¸KÊņOjlbøNSÄJ¾Ą¯ŴĉŸÇĀgƖaǌCΤɨfȸr˞z˴xɪǤtƂŚɷʷ̙ɟÓҡs̽gʅʃƕƵBȿ˪͑§ɡd̏̉ƷČ˟@ȧDéwċxß@ɁuOs}c]WXÓ»V×CėOÅº"],
				"encodeOffsets": [
					[44665, 17845]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Northern Borders Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ɐÄ˜âξĘʜȘþgԞųΎǓ̼Ʊɰŏ̾ƹ˶œ˶řʢĿӆȫAȻɦǋ͎ɷΐʭȶƳξ˙ҪͦϦʡȗŭĳÓÝ±åóţƷˋÅ×čÿāÕã§ăU¿Vµ«m\\µ®y¤÷Âñäį¨ÓXƝ^ÿfÑª}È§ŎŹȼKđ¿Ë£U±jĳº¡DÿY×V_UĴgjÝYá¯k¹UßV©ÙôË¨ÏlǡũtBçUĭÑLĹƇĉWœƧ}ĳsãmË@ű° ¢ĊØr^ĀRĤHŲR¾Âæ°ĐºĮ¶ǲĪİÎǆĂÜŊðÒÄCƭĴ¡Èi¢Ì£t±^đJēCÉnċÜÑ¤ã¡LđcßI˧FǃZédnÑºt¥ZėCűxÝHȕăTġHǗ]őuʏƃOûVfðÅôÏghW¼IĚvð²ĺƌ"],
				"encodeOffsets": [
					[38898, 32514]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Riyadh Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@KøHŶdäp¦uÈV¦ ¼LÌb®ÜnEìÈoÆ]Ř_ÜIƒr¢CÖoDÐ¢r¶[ÀGÄÔæĈþ¢tÐZɀªâ´¶Ìzld®Ċ¤´tüTƐqÞCƼdĬUJnæMĖa³ðAf¶e½ÎıƨïÔ}@¾lĜEÌ_Nh fÎVrd¨ÞĎĄª|ÔjRMÆÁ¦ÁXg¤HÀäÊp¶­[¬n¶Ć»¾³jjõ¶¯ƌåĂ©ÐoĈGlSĎġÞ¿ÂþQŚEÈeiĞËÊ£ú³¦cĀFĒnKĘïèÕÅúoȤóuÇZŉBǻVŏIƷH½SđOʛTǑhć¡È¡ÆľÙî·Ŝŋņĥ¤¯¨éÑfËjīAǧiƉǷǃ௅±ϓ¹΋ʥ˝«͓µϫřƁǣsɩ˳w˝yȷqɧeΣǋDƕbÿhŷÈųĊă°ƿŲčþėø§È¡ò»¶Qppļnölºî^B_ çÖ ËĢēò~ŁǊÁò×ðcBŬN_ǂ´ÖzºFmŌwưCÀxńQqXƍvş@ëLƐvº[xËhȷhŝIJÇx£ºķɔW]Ġ«Ė]còsë¢yEÀ\\Ć"],
				"encodeOffsets": [
					[42995, 24524]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tabuk Region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@pªD¨Åi«O²"],
					["@@xfnqCs~"],
					["@@ĒGÚ\\Ìs°FĘarNÈ¶ĂjÖHâlúEŦtńaļ{Ò²¿æĕÒé¦a¬PĄǨÚPľgŒ¤KǘW^vþrþ¤ººnVq\\WţAÅXģïÊ¥ÐĄyÚSľKĄ]ÎpDÊÌFZv¢UÚtàÔ^¢YĮsĬYŦÈÈ]¿ú~Ãjùŉűrò£ò{^YûÉÝÛs³Ƴuk}zșǵ{ÿCÅVŗĄlītmXČTWp¹]őºÏIĭóoWPIhXÀwíB¾{NĥAN×ĢîqèxWƛñ¥UDdÉ¢Ëx¡C_ā£ş«ř{mcGpYúfÊe|dóIïięLÉ`®¿ iŚ¡MÓēgDç®ïn»dç´ JÌĦ«la`¹¿ö¹Ä³ªďvētÁlOÆD¦iTƹIÁBďZŃDë½mÙATÇQ¡ÍqĳCU»[¿ÌytsËxa´JQavfhk¤°_lPrtHUpOg½ ÷ĮUðÛºA HlªPóú_¿¹öŒK¨{jĕX×®]¶£ösvÃĮI±Ġ»ø£s ^aqzk¬@¦©sPÛê¡U´zzUv©ÀWé¥¾eVYc¦C uÚ¦ÉlY´ÇÂYď¦@^ºpufÿ^ecfÙÇH¿®«\\cwpFzfôübÎàb´ÚW²Ji¸b|ĦNºaZ"]
				],
				"encodeOffsets": [
					[
						[35323, 28673]
					],
					[
						[37358, 26260]
					],
					[
						[35659, 29579]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
