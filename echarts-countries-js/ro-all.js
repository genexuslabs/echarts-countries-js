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
	echarts.registerMap('countries/ro/ro-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Alba"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@øqĎ^kn»AÆÌeŬº®[¸Ŋ_µÜeh¨ŘbhgŤQ¢I°q²@fĜ«·mZÃċuĭĥpÅFwç§áIHåïw^©q³¬LrezÍQDq´Ë¨ïnrf¯ÚP®ÃÇĚeUćqÞV¸áXe¾ªıE·pÁcvglèpà{"],
				"encodeOffsets": [
					[23357, 47680]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Arad"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@øpì\\¢sĔHo¦¸ªG¨N²ÎFµªÎňäS|ÌHqČƐOºrè¿Útø¤DZÏƂqJ®æTƦkÂÏi÷ġU«n¯p¿ÁRÇăòu]¿vW·fȩìÛÅP­]»V¡{{ĭI´¹e}¹aÕT¡ÿ Ƌ¼ádË²»^"],
				"encodeOffsets": [
					[21201, 47269]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Argeș"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ªĖnČwj|NÌ¯¦|¨WÜ¬HÎÆEǞzàJ¾eŎDŔQôÁ¨irÁ¶¯{ŵ¡ė~¡ºyX{ÍGén¯¨aµ¾ÁS÷qilɃÇŷ@Õ~IǎĀ¿ċƐ{Ï¯j"],
				"encodeOffsets": [
					[25026, 45922]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bacău"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĆNJÜ]´V¸­øLŔÚTŐ¼d¨ìäÓþ\\Ômä\\Ģ³T«w¬°ÛãzyǝC¡Ësĝpċ[ËÍOãn»§¥h]ĻpƉÏĕd[´ïzRmÖ¿XôN}±JfÜ¯nOçv|¸®hçĔZwx"],
				"encodeOffsets": [
					[26601, 47809]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bihor"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĖËl¹æaôDøÙ±AÇg_³¼£E¨sĘoT¯µĚ­§ã»]HäÝwÌorÝß|okçhudƥlåS­IƁrYÐ£C÷ÙsçÀ¹qƏPċrËGöÐÐÜtVÔ@ÒA¬Ætv¤^KªòŒÖHp¨y¤ÂŞÊ"],
				"encodeOffsets": [
					[22718, 48750]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bistrița-Năsăud"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@îÆfÖĬD¼Ø²EtƾîMĈ\\úĐWW¾ÛxÑÑs´`Éc¡¡tÁ¡oËLākÉ«§oñËF¥OK©­s¥­·sÍDĩ¤úěä[|æ«G¬ébOĖČnE"],
				"encodeOffsets": [
					[24601, 48499]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Botoșani"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ìb~¶®t~²ØÄǘȞbŲıð{¦āÌsEÃ²yhā®±uäõ¸ŉgqƍWP¬ųHyZķDFē_LÂcð·¡´ĹÜº÷³Vu "],
				"encodeOffsets": [
					[26727, 49130]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Brăila"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ĵú¼]ÔXČ×ÞWlrĐ{VīŔ¯Ė©¿\\µeih­ćÍÅ¹pÇc^Ń[ƏdŹIÝ|½ÇÔƜwÐ¥BPÈLgÒãSĄæĴĘòQ®Æ"],
				"encodeOffsets": [
					[28093, 46484]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Brașov"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@^¾|ńIx|Ôs²ÆògB¡wä_dÁÞ°NĀ{HÔĮõCË¡£ÙB«ûN¤Á[xĕ}íX«£¯ãEµ°qÂ§jóÂœRōC½fßI]Ę¥Ā¼èL³¨®èÂF´Ê¬"],
				"encodeOffsets": [
					[25543, 47186]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Buzău"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¢J¤ðºT¨ªB ¬ªPÄ[F£ĞęäF§Ų¹þTÔY¶Í¶V¸Ċ^ÓìKàn­ÅRėñĳăåäThÑKOÇ¦AxÏÓƛ±kŃ¬mĳ§µśAkûÂÀp´BS²}\\zÔñoOķbPĈ¯`¦¡hE"],
				"encodeOffsets": [
					[26669, 46571]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Călărași"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÆÂÂ§àcĚzOÃƌŒ^Am˜mVŌDJ ^LëØOFØCqiÂwƌËçŉYď£ÿP³aģ½ǁBWƍ×]çFŕ³ÛIąo¡LŅmµFeÄÔiøAěØAÞÆîz²"],
				"encodeOffsets": [
					[27051, 45590]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Caraș Severin"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VþģĈ^ìÚbÆâÖ^æ­ǀHCøKnfOÀźÎe|¦ŊĎāĜE°éhÛ§XmÙGµªSåÏdqà³«ēÙWć÷ěĻL¹Uµeiß}±kfO`ǻ|ŗ@}ncÒ±dŁF¯ìłTÎlKįxÍ¸ô~È¢dª"],
				"encodeOffsets": [
					[22000, 46275]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cluj"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŪA~ÇuČw°HVƊ¸ÚA¾êEdðaêa¦¸Ū´°TÚYĆNFċmPĕêa«¬Hå\\{Ĝãù_iēª{W¡Ï]¥×FBćţRghŗag§Ûf¶ŉ`·­\\ū¹ËfÅBm¼lč]÷rqÞËpxãÞG¼^¨äę®°¶"],
				"encodeOffsets": [
					[23272, 48136]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Constanța"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǂAĤ¾´bĀOĐ¤ŊZÌèPrêÚăŎf¬Ë°ÓpS¼ÈdºoÆÊBÒuð±ÆKdwĶEƎtnÒÏ¨Ú²a·»ėŕįėuY_×xQƁrÃ¹ğyţōIćfħLȭî§ŢwpÕŏMÐ½cţVÏU Ã`o¬"],
				"encodeOffsets": [
					[27923, 45187]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Covasna"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Rz¾ò°Ħ^ĚĕRkƺ^ȒÖNÀWnÕQðy\\³A©_ŕdeOÃ«©A§©¹S£ïIDÌĭöÓGÿ|¯MÝcÂã`xA¢"],
				"encodeOffsets": [
					[26066, 47224]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Dâmbovița"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@äF¤°t­_±¼m~£\\ÂjºDēČm_ÏÒEäëWÐÅm¬č×ħSÉ^ukÇtī{¡Kz·dûÿÍ@rTø½Â¶§b°mHêÎW|¹z¢}Ę¢|Ŷ"],
				"encodeOffsets": [
					[25931, 46473]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Dolj"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÒÔÄk`ðS|t¼Ğ¾±X°²ƦNz¨zê`söRRĨFjÙĢYI·Ã½ª¸[Ʈƕ®K`ï{ōqD©oëãÛ_ÏxeƱ¬ÙHīªÇJá]ĩåZƑIĿÿQƑ¦Ċľ|ªç"],
				"encodeOffsets": [
					[23518, 45156]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Galati"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°gº©¬¶~ŖK_¶TÌĎRWăŁk©´āLąáÖ«I¨©ān©Uď|kqÝXċØÓW»^y\\a¼L¸÷ªËÔÍŴu`Ģ¸xZĸTJ¨®M"],
				"encodeOffsets": [
					[28140, 47241]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Giurgiu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¢Ĭ|ÈsvlÊ]ĨTqoÃ¿¡£Ĕ{ð¹äÒtĜ×Bj÷ÓfÃ»Wğûc­Áē£ėďĭÁ¯CiŐN~iŠ¼êE¢Ĉ»Ƌf^ªoĂ"],
				"encodeOffsets": [
					[26071, 45540]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gorj"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĈļC¬bĨ¬RVÖkîàB¬t¼Ŭ²ĈmøfÌ¡³¼ģ©ċDĻj¯_ħEQħõQté_§yƻÌģNģ¼WýªyĬrjÙÆģ«ßcræÐ"],
				"encodeOffsets": [
					[23186, 46319]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Harghita"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ú~äynÈL¸©İLâeĚŏé¯B gPÏ{ÌµèUxwYèē­g{·èuP°meÛ²I~ MóMȑÕƹ]QlęĖ]ĥñ¯y½QñhÅ±Ót¥vgơjÛ´MÔÐC°¬hnô¬xÄDþê²vL´_Ċy\\|äSĒ¸"],
				"encodeOffsets": [
					[25845, 48221]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Hunedoara"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¸oĲF©f½âW·UrÝĈfVÈęÄO­°Ùe qðmÌ§r³Qīū±»«sßAíÕlU«Qħ«aĻDć©TH¶ÚWn¨gÜ¯êěFčĂ²Ô³rKč²^ñvĄQÈÂoÀ°¬mĢVjøÐ"],
				"encodeOffsets": [
					[23293, 47466]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ialomița"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĆHºcİÆlŜB¶¨Ĵnń«²lÈ ¾Þ{źJƐcń\\]T»ÔoÌ¯e«ĄōéÙOqƋÁxjr×DE×PKì]IŋCU˛nBnő]ƋÄyPęßdÁ¨ÅÁË~zÎ{¦jÇº"],
				"encodeOffsets": [
					[26933, 45842]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Iași"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@EĸCzYŴG«OƎXrŊhìĕÀG@ÝĊrLÜěC¥êưób³{e³ĿQƟ~©lģð¥e­éwŵCgbƙgoZÝÖĸ®­fm°ěAgŋMwpÉL·ÍPigĆāÐ¢»e¤æQkôİ"],
				"encodeOffsets": [
					[27343, 48612]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ilfov"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĎØ«nÏÆ XĜIƂRèdÈ¹i|¥yÍÌ}±yÅíÝBÑsãïºē|¤À¢pÄr", "@@TĦªlÀ¬GZËRUª±S½i¥"],
				"encodeOffsets": [
					[26512, 45610],
					[26590, 45508]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Maramureș"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@x¢îO°s°ZüY°¥Ŧ¬[¤ĖWņXú²Æcà^þÏGuźÃ´«ÌqLkČÇęďXùć[íNƽs±F»×īCeÕíÅąMÙZSĕGõ¬û[ĹTɇÖéwóCäT¾òÐÐ{PS¤ĘÔŻÆvǈ{Ĥªè¬ŧĎ"],
				"encodeOffsets": [
					[24064, 49120]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mehedinți"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@el²~jàfV¶ºļKøĜXĈĔÚ´¬¬ĤÚÅqizīþ©XĤ»ĤMƼËyƥM¯±W²ĝ½s»T{_ïÃlÑÓFŋÂ~·TîÿbÖ¶Đ~b ¸FÖ¦ë²đlýÔ¿K}wÓ[Ñ÷·û·KûÔ{Ê"],
				"encodeOffsets": [
					[22532, 45688]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Municipiul București"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@j¦¾²TV©ÌQY«Hk¿©ĥS"],
				"encodeOffsets": [
					[26590, 45508]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mureș"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ī£ÎC¸t¦®®tLª¦PÌEpò¨Ê¬ĂlÌK¢px_ĔN·Tđ{ãz[`ĉK³±uýéÃC«wmó«g¯ÏDNÓÜ³Ƣih¦uw{ŃJ½{]¥zĵOÛcspVĦ¹ǙTƗkě¬e±@¯rJ¡AĈE¦ØÐ^X¢©|Ĕ`j"],
				"encodeOffsets": [
					[24763, 47926]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Neamț"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LvèĚ²Cv¨°TÄ¥ÚvÞ]Œ~ÂoŞª¦MæÇĂÏhą jÎO¸ÊKxoŌNhĜBn¯®eķ­ÞÕpÇo±ã[Óný[ãÔ§ëcŏ»ÙSœ÷K·®³UÛ^IąMçVË¶|OÐhAê°ęŐáf"],
				"encodeOffsets": [
					[26275, 48219]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Olt"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@´PĘv®zÒMøtUªÐN¢vjúøj^°i|ÐČƏÀÿJǍÖ}z±YsZÓ¨µTŗ`mĕai±qf³¼¹DÑEyhġbāu§ŕ]ßPwf`ÐäÜpìCªr|Ŏ_ð­LƭƖ·\\©Ä¾"],
				"encodeOffsets": [
					[24503, 45599]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Prahova"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¬îWĖ~wÂ\\£M¬üÚA¤F¢g¥°_OćĸaPòpyÓ~[T± A ³¿oüÁįÅd¹ąGçcƁQěJãìÑF`Ð ċnCĔ¹iÁ[¤}»n`²s®"],
				"encodeOffsets": [
					[26063, 46532]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sălaj"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ę°ĚCphŒËæF®[zêxɈÕĺSü\\ö«ĖH¯ũ³¥·bébcïF½éÙBƉ·U¯Gċxv}ÈũBSėp§tF»¤`´hBÈ²"],
				"encodeOffsets": [
					[23151, 48486]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Satu Mare"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@âľƊh²¼ÌŌ`öøà~ĨîT~èØVäYvǢÛŨčç«ģ©Ǉ|użÅėÓT£OÏ|ñÏS½ã ôD\\y­åEőÌogęDė¯÷ÚóCåbkºĕÌ"],
				"encodeOffsets": [
					[22718, 48750]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sibiu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƘlǚSºUĥtoÜdĶP¦y«³ÉÁE­ç´§çK»¦ÿ^ėǝyťP·[ñ¡ŃUējďUãPõy{CRyÎqfK«r´ª]ðxGæâJ¨xèÆEoĮĦČvYÄ¸n"],
				"encodeOffsets": [
					[24838, 47353]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Suceava"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĀGÜĖü`ØfʀpVŲSðüBĞbSv´Uø¹ĺÛ¢³¸dïKÁĔ`óįlåRf£¼¡åÈ¥Nŝ©Ápő}Ý^ÙuÃ¦¯S§u±DçęKuįK·ªÇKmãzÙ}ēMw`sÂ¢¢d_Ê³ÒtwÒ½ÜXĚċÈKl"],
				"encodeOffsets": [
					[25546, 48875]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Teleorman"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ÿ@ɄÈjkÎ@üĀ¸cLypā]©ƌe¼ćF¡»éjşM}jŏę¥DĿ{¡Xû¬Å^ñYûÏFcąC±oûFzÒC»ºe´rj²Ėb_nŘS§¶YÔZty²"],
				"encodeOffsets": [
					[25405, 45445]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Timiș"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¼]Ì±âcƌ»Ā¢ÖSºb~ºfJ³Į|¢|¼U®^ÆOÜȪë¸e XÀuĎ±L´qÓ±ŉ{¥ÍfŹP¿me÷LDƿGå®Õ]ÅáÙa]ëĤćýUɿÚu¼ã}OťŌĕ¾ÃÚEæđZâŧÀ¾ßX¡_áÌºdĔu Ŋ¿Ô"],
				"encodeOffsets": [
					[21201, 47269]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tulcea"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ªĂmªÚAÂáȊÕŪoØhrþĈ£ŊÖŔ¸²IŘ^Ɔ«¾§xÑOSói¿{Ǔoɵsċ]ġħå±bÙ§ÑÐmƍsĵFcxÅLï²ÑvÉAÎĈg®fj[¶Àĕªœ°Ĭ"],
				"encodeOffsets": [
					[28703, 46492]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Vâlcea"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@CDz|öäOĐVĔińVò¢¸\\ŦOFÅGÍ«XÛ{§°¥MË{ximċ©ĕ] ÷iiùuM¡ÏV©÷sÑN­yuė³O¸JġZiÚ`Ĩi°CļªČ»Ĥ¢´Ë÷ećnRĬ"],
				"encodeOffsets": [
					[24164, 46559]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Vaslui"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@pYƚhhaŶDêx®¦fĤïªkƠ}ŀRAsÄ­Ôůě×euV¥Ó}·gïXčQËµS`ŕL}«µ¹ªh¯H`D¢Ǟyzä¯Ü«xS¬ġ´p²oÈ"],
				"encodeOffsets": [
					[27849, 48010]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Vrancea"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĖcƊÐļo^¦g¼¨ämÎPÌČ\\ĞoÌtG_­NI§ķSY·wġv_ÎųÌÓø©K·b»z[ĳùßmëL]Ôĉ·µUµÎÓZýSűº¨ãEĝĚE¤\\cf`Ŗ Bª"],
				"encodeOffsets": [
					[27073, 47146]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
