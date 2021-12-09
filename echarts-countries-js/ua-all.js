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
	echarts.registerMap('countries/ua/ua-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Autonomous Republic of Crimea"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@jVgä~Ho¦iÚd¨Q´ĲK`qgÔc]fd]ºBZ}ØI_t¢G}°K¤cVas¡[oVSkAtH¾¢²|Ì^t^KweZÃiYj]Ê`LqlCþZKerM°FTyeZ}¸åRukUUmxro¶yrVGÜào¨sTxzáQZáªïĂu`kxyfçú[BàRFîī°±ìÓÒÛÜ¹ô¥¾cà~Ħj~IxÜO{Ü{~A¤`hbNÀjƀ` E¤oQbZOqÆXX{w·EfoIQqR{QekdcHp­r]ScÍyáAKqšhµDÍJÓiµãßbÃI¯_Åsk·cmyåAgQakO}gg[uLSrÅ\\­Um[õHëSgÙcÉá}£[aGKH[wãUÇÁMcÕ[Û\\@¿e]FîzÞL¶cª^OxWeº´¥v­MµFCÎjer½`aCg~zRZtH¾YF~ÒµºåªXq@iso@wpZfy`Gl@ZAeaEĭbėIă£åhÕVbl¶ªrĎxC~Vavxenê¤Ğâ| P¬_äj¸vÚt®e^x¬tÆmC¬pjlĵZaîzy´"],
				"encodeOffsets": [
					[34422, 47243]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cherkasy Oblast"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@OkyĈRª|p~jFDY\\Â^jb¨Szgp¬BW«ÐEŀazÚrl\\jBtb¬S¢qüdÊCNv lfC^zplÆtJVbFknv  Iv^zMxXhu\\[h`ZS¦ÄLLRíÌ`dĤAn_kAqd]èXrAD£ĒGªÈt\\fĖIQ¾Ø|ÙRHÂryVÊÐe|~PIaonqĺmNo¨fho`« isïPu«²RTAdÏæg®}NS]sL±q}@wÃzQCsbcS@k÷HfÇR\\}ÍČORgªO®TÀiX G©£HeYĂWLË_dĉģaMZ·@YoďRoM_Y¡ZGaPíDuggÙ}RSmMhkOCsVIk^ocíOġ±cwPïJu_\\]­Ñ»asÅBUz¥QO`SJeeóGQbÃTùEI[Ǘh»_yY³SkskOu[±@id§S_¡»GgU©K@_SµpKeuLtåUCh@h¢[¥ZItHInĹâXjOpÿzI¼{PGÙªAnup}Us|ld^ÐC¦Pl_Htn"],
				"encodeOffsets": [
					[30450, 50411]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chernihiv Oblast"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@àjdÒjd®bryR¼ollhX|`hLS|Cqh\\I|~VTªM~ncv²vvGR¢lH~abŒhAZlq®OFgQR²Px¦CzoRøY¬J¾iÈ^YX¨[yFaÈE]ºVlpDĊ|t´i~Ðpqz_¬¬RªSú@xuHÜJUÖ@Ðn¨IFyØzAÂlS´I@FæcÀI|fvIlk£iÁi[qÔmMT@YrÕqãmqYDea¡F_}yIkrsËr{kr~O@¬£@p}T¯UqÉlWAucÓJDiS]£JwXk©O{e¥«ĆSzYQgnWC`jÂAEX[eHe§ÍÃY^aGs]q»`i«MCs³qDYÝGFs\\ƏIoH[hB~FįzGm}KIeK_ÙQdhVoMgjTq²¥RhTb`AzĝF¬§lU^QuaCāHµ±LãOÙcK`¯ZGÅbOrµNm´AJhsxj^KzsLAjËvJr§NK_ÿEĉLCkĕ}QDxXJ ¹FÀENCfčKOx`xmZlmlGqp°\\kz", "@@ŌWFv¥Dëa"],
				"encodeOffsets": [
					[31273, 52498],
					[31388, 52761]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chernivtsi Oblast"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÚOhFÒÍtUD~U¢Rig¼n`zfjgD«lcCÌ\\vs¼M|p¸PªDVk¾Áª@Sj\\gDF^KDp@sælSvlb{~}¤@hlHŪg¨|¶g~AblrlbIrmJxtâ~¹E{fo]Égg½AOvµPmU§Bno]Aµ\\d¡CKcčpN\\{nkKÛJigN´©¸SDWĉ¡mF¡EEe³OYLÛaaUPkN]y}±­s_]YëaTĝaLm_RïűTUïIƅcAmH_ĕû@U­_m_RíOrÌ¤¾§XlvU¨F|êº[v¤Ej²TvvpE®`pz\\¨dàbäExcÔAAzcG®TIahA"],
				"encodeOffsets": [
					[26244, 49841]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Dnipropetrovsk Oblast"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@^Gd¤ÒRI^NVhÒRNg~F|eJ§^stPĪX@hÈZ¦ai`PDWfNfbDgĀZrxTÜRS]BX[hÂjOJFt£M×ÁJUpu^DSL^j GJiT¤oI@nj¾k²]zBrm kU@w¦Mvc]ÊM_AtP^pZkrì [ºwèW~RIr´nNS²n FZX}~WWyptqXnWI|N\\eOOaĠ· ]xsnT²OZ®YÖOÞmİtn|¦}L{¢oyz[ke´kCu²A~kDeqŜÉ}Ì£tYxr_v~ĐĀĜ»ÄNd^ÈBN{HTÒD ¡³ENwCPÃa_NekP°HOtīÃSpęÁÑhk\\ítIuYSbg[mRJXĉ]PyxFP½e×IÓL«TNe¯ISdËAefÝQ]f|T\\hgsLoÒHp[Ã@kYēaUÁIƯÅIhBůz·lUoRÁ]©F¡YgiķMB»FjáGPnH^«įc^§ ^NyvDNosU`·ÂTP}SwsAPEVtKe|gcë]Ål»DÇbąNQ·kƙYÇqācÃMÑ[©JW°ʝO|¡WO~XWvęYXƅin{UwxBYodhp½GëVFfőMtY^mþČ`]þpFU¢bHOÃSgØTH"],
				"encodeOffsets": [
					[33797, 49141]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Donetsk Oblast"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@kÎfRoEpiR~QxcªG^rĺSºPj£l|~°@j SXaSBÆzCF`¸@}¬Ø|\\^ÀKxpih¼X^{­^Xh²DĆYðeANlrX`mgc@[a°[ºGHrEgíÃËqqw¶S|DĖURBßHHmGHygo¬_TieuoWFeD`÷me\\c´DPH©aJoaK½ŞOreCqnqS}U´GoêccfYHw]ƮOB¦osTuķ@×NUc}Fg@@ßYGE£yEcb·@C{@YqƇA@wę@BA@muQHË\\A@ç_g{@AwĬBW£Aweq@¹Skku{^voH}kPsUÛp³Q«aħEX__N¥W¡}£ÍÏ]hX©gucO¯kÒ¤\\©tshcWăpJQ|ut¥]IhI^ÒNIcS¬XdäHT] ^t_L`^Qd¬èE\\¯@]ÕUE«ºg]^kn©¿äÇo~MxÂZP\\ÛK[®[C]ÀÝSKhnoPOwEOzĊ^WIQ\\nahTvZJîsl[ÒgÂoĚÄTsĬP¯GOflMb`OÄxDM´F¢ÑCSGM|"],
				"encodeOffsets": [
					[37621, 49793]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ivano-Frankivsk Oblast"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¦ÅP¡¨DNQ¯`ovGÂy_¡ðYi£X[}È¢@g®Ysc`³BCt®XÅ¢C_¤X¼_Vzagc¼¨Swac]q{BbgJSH­dByÓBwdãFßa§cy[_o­oFuuS±i£F\\ué¹E{V§uWk¨£½qËAOz³¬L^×RíHvÃzT¬}Ãu|r¶OtTL·ah³fEzÑlJk{{LßEif`zs^fxqRÝB]§AifdUh^f·JÇrc|F|NQÍ [lÝh\\d`wprNrirgh¶¤pJZb|B~aØDUvnb°gz¦KńH pĒhglzUGZdq\\[EâIh¨|`d[^P|ajbKtPvÄj¾øG"],
				"encodeOffsets": [
					[25315, 50685]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kharkiv Oblast"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@pFXvFiÒ]ÊNL~EGx|¬qEvºG¶qT¸|¾gr~mRäF°DpjWdbOTþTþgTmxQðÃUYnÊGnÈF¨u¦W[qr[ÄgjZÒnHTÄXtÄXČAÊFÞVØ|RÄKĀvsuB§foiMjoVdoB«YqrÀ¬±LÈ}Ài¯_}mOXs¼­YO»GUk{¯}}LcypmLCm½[U}}ASm_cq_]BHKBByf]gÛN]ÀSZe¡Q@asqWMkBïfąZC±Wg®]|]»Wjgwo¿L][×{~«·@E_DyAÅTWbTi¯@{}¤kOi¹ĹT]q©HwdR}jQFopeQlÍÇAc]ÃMě¼ďÿu}`wqsZ¤Ë~śÊfrC}l±BDv³llfy\\z¡pK|¥~m{įsÝnÕP­ZY±PmSwt^ğ¸PbP[fM{JmXWsroČvª~|[^câIĲBSlº Fvn²¡T`¤Ŋkh@H³VeÜT¸ÛMYbÇHK¤©ZE°^zá~kQN|gUÍngEuvUz¾unGPf"],
				"encodeOffsets": [
					[35780, 51357]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kherson Oblast"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ĮkÊGĠfaºCIißNkEƵlċj"],
					["@@FA£ÅYŇLzpNIdÒRÞvRt\\x~"],
					["@@[S\\t HbHJÕpue¢I"],
					["@@QEup{ÆqZkaMjr®MÌiÚqliI[qzqZNvrllL|\\çjÓÍäő"],
					["@@mj Zq"],
					["@@fXh¨KäiEØV°KW¢A¸Y¢I¢RÀ§°iUÍF~Tďqk\\CXhÈLW `ºN fQ\\öqHM~ĈVLoÀNKrjl[ĒLTİXALŔd{PGd·K_nêTt_`dÔ} ¤şºcZGv\\tzdZvþDVnĦxÓCxLQ¾çUSrnMrpNB¿ÈN]öpNK|aE¨ìU¾HgopcZAxwVm|ƆjWĚZXuWP}¢XP{ʞX¯ªIÒ\\ÄNÖm~idÕpT«bM¤dInàRYcR~HXGzšE\\ÝrDRpe¶LHo¨LbçªFN¯«IRÛMaN¤HD]ÂLT±OTtFRŒ\\A³´LLQÎqFdđYG`Ù|D{q»kĩ]©ykgYCe`M¥b³]A{h¿sseĉpklnp_LpöFë±ãBV{xMQz]GYÏnTKlAE¯»DDqBG|t©Lf]lcOw£Tsbsı³§RÙc¥jp}GhãiUur©u@RqSus§]áÎsF[lÑxmjkeµV_f¡AM{ãcËVK¯XąmsNčqO_ŝtƣZ¨gNyYtNwf@^^mQVz¡V_qI½NulL CØT¢bªiTSƑ"]
				],
				"encodeOffsets": [
					[
						[33432, 47159]
					],
					[
						[36122, 47376]
					],
					[
						[32405, 47356]
					],
					[
						[35815, 46861]
					],
					[
						[35573, 47071]
					],
					[
						[32571, 47595]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Khmelnytskyi Oblast"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TO¶T¤àÎGpJlX¨ CVvnE~z^TApp\\ÄJ_ÈRVhOn¨J@yÆDV}üMQ{ÒqJAªsBx]GTc[`jZpaNuzwtLVUM]aºaND\\egjeqDGjkZ¸Qo}YyNUq[Nkw¡oog]TOIsLY®@ncL{mGHwFYyd¥vKHkc]T©@¡­D¡vYBkuW\\¯¥Tc¯Dk_­u_DnkGT³t­mgg«wsIqnJkaqak}Bµh§{ũhGgk£@}~a|ukTåkt@CoLE]Chi[T©@½ÂUl©CLsjC@~}nLlBcb¢Wpudt{TcnXxelC~\\^o¬ROtobh[¾\\Ve|n |@ldKwnhSªCzxvJZ_b°vhp{£dht|VuÄnhËrkx~CPrR¦jsl@ÖJÃ°Vl"],
				"encodeOffsets": [
					[26850, 51384]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kirovohrad Oblast"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@æVsvKLf¶oT@`ªLhV¼H`¢¨Tjc²@\\PvlltTZ´z¼`ǘgJ\\úFÄSRaôHffITP_¦RVyÆAt¼b®Ò[^v`ðIxO²dĢîPpdl]JtUDPglNTn~QhÚvhîCbOH¢YZ`NpĐQZp¸@NYĤbcĊÌ`KāXZGf¤ªpU®G¢T@}ªqÈ@®©A|G`oJNÊ´wanid{ivÜX|ÂKjsJTeHlth|J`icL´QÚi½m@J£pSIjH]iKTCv]VoÂIØ¤NEsIPÁigW\\A^TÛQwSYqhÿCeaMXeCOj_b¥ÇY@gĩWsOt]I¨{f}EhMÑQUgMJ]ÑQc£]H_ºYÏOXéMaZēSLJLgùUr]Ty«MǏoRmSÅ»O]oTñSyLOz­ăMHUĿcUJUB]iJU ýamö®N_ºÓQ[xKQj©MDmDVåMzrYÉOm[uZMKróka®³ªwPãSGXÑSRµ@CcÙKMp±_MpśM}y»A{pigÍZoSZ»LeM­\\mQ·KÁ^UnPPpãt¡«tUYPMÂqd°BxcTê KTòpbn"],
				"encodeOffsets": [
					[30688, 49636]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kyiv"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lM^`^RnºÞAcJ_¾WúK¤xvzþsB}½_NSg§¸jeU_o¯Pm§`I@ic¯¥Ycm@sLvf£ÓYrÛFYkH"],
				"encodeOffsets": [
					[30963, 51641]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kyiv Oblast"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@À~Øe ðivRFnÊfd~]W^o¢U¤X~Yd|F¤Y^FbĐeBbpÈuĒ¿\\evU¢ÄMGJYly¯[roHnkknY_wPwĎLDeMF¿EºIwWC~RĖDlĊKĀFL`¨MIqÌuBitKLyi]twIg³Bn¶MPqÆaH°YL_ÚdäP²K¶ĂGD vb RV]¨k«ĞEBya_Sg¦Qr±ShipNUcgRWWaQvc}O{fÉÏzUÁqGÚQ×{R½ĕJes[©ÇđHC¤BqçW^cBrlm`ģB_cîËKQÃK¥YT_\\gv[WgNw]yJuulmEUaIÅsok]yDkeuMÉDûc¡r«TasiA[qkyÙĿbÏFX¬«Aoyh§TiaÁ]Z[CiEo}©{ćQzPlsks¥R§Ö©FacXHp²jx}V]hfroXU{|}X_jB@EjdzkÆ]ÞhbF|þ  _d£Vl|b ¢_þ¡TXv£fBr}náS~¸O^M©~tbZttL|u·JRZn´¡Il³rB²DA¯ÛgŀVAG¸L", "@@GZlÜEZqÔ¤eKutn@d¦Z°d@jJ¨_n°O`pVif·h¨MT¾`A~ýtuy£wùL½XI`dÝB¹Qm]_N]k"],
					["@@ìb¦CEuŋX"]
				],
				"encodeOffsets": [
					[
						[30064, 52619],
						[30963, 51641]
					],
					[
						[31388, 52761]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Luhansk Oblast"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ppÌh A¨O´ĈK®Xl¥AyÈsdhKhI²f|Aif\\~Oj}]Gr[¬J^[Kjml@ætMnhp¦x ¥Bn}kþa²jE°_ÞMg_nwt³lgøc²LªK`bpĘTPOÐdHi~wŉ¡FkYgdqq[wSÁigeÑC¹«M¹³@wµPÙGgÕT{¥AvohD´ÁqÖLneQVpZ~SnėÝwDÅvÙbwuAu­i\\io£waBqnUÀGVÊZ©gMCyqhwP~o{[ÕQGmC¦a®t~Ác}½LI¡wAE}}OY¦sęC^w{{ÁB£@qįR±@UÇ}qIğ@IY±@WÇTQdSvt¥pAƭP^GxeZd édp³HVT~mrDrqfŝPL¾bIpbGªO³Cd[nf_øCEfXpfvSj«`hpGzHGnGAàQĕV{CµTrxÌrÄhîFGq¹H¯\\b@\\dh_nt@b¢RYf¿TM^hÜe^AzALGA^`dr`Tn~BV~¾\\nDKondz~K°~|Vl¼HZP»®"],
				"encodeOffsets": [
					[38946, 51098]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lviv Oblast"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ROÈ¯òSLvàSJ}gÈ^iN_@Ã¶GÊO}¬IöZæIOjNÊ@K¸[ÀD|SAu}Bioe¡ĺīzW²eTaWqoZa[{·W{wNQyVm¯\\F§z{¥fq]»k@oY©CwÏEPmO§÷H½ÃiuOLsabiO{]\\c{_g§áJF\\r[cYHVkyhđgoŃG¥Ly¯haumV×Cb}{AYaI£oµhgqjMqoqxc_[RiY¹H«dcxcujmYÇAsd_QÉSLArÕ~q¨v{tqºV|ī´UjBp_jrlVÎGà_¶ZSlhVnĊðlbt~º¬lT`tHȸǤĎÖ¤rĢ¢¸° VbrZÜbŚR´APn|T¸l¸NÚ"],
				"encodeOffsets": [
					[24677, 51853]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mykolaiv Oblast"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@WgeR£O}c^ă¸ĘBĀT g´S"],
					["@@¼YpTÎYjh|o¼B~zŜNNo²`NoÚLDd¶@QÒTHWäTxO´©b­ôlLqNvYn\\ÊPZyqæNUCCnªNRiL\\wÔR`¹­MnõþbVjI^AVIVŀdGVĄN®PyzKòTS^p¼PÆnTQǐpNz¬Sq^úVKhIKĔTbYêNWÐPZ`¹SGh×ÄTPaGV¡oE^ýċ_nýZ]sŒNEeF§bL{oM^õÇMAÀoMNqqmTèVR½wKDÔĥwUmýCYuyc[sHudYŠ¹£Ó~_c`séS`m¸LHc|OœcBKįWSđK\\ikLq¿MKpćUN}Gõr[Re¹M_XÇKgYpNzTzB²Êqduy§{yoU`o~ee£Hgwqãoo^Dån¯GwYcf¹ZzB\\cz«pjDusMUH_k¿V©A»b`|[p@|uttspJXc§bqÆȌzUxºL\\pľqLMEaóBZlJUJOûY»[i¦÷W]`toZW\\tmdYº~HMH±EyJI\\táSV}»OH©DŝcOnKKoÔbQvNóUaeàc|`F`o|Ts¢fhĚX`Qt"]
				],
				"encodeOffsets": [
					[
						[32622, 47634]
					],
					[
						[31035, 49298]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Odessa Oblast"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ô^lÂWÆJGrh´ÚeIax]äa´PvhÞPL[àSzXdpÌUFbrú`ZOV¬s¢äsOoOVmÂ]¸LnR®[fNKRs_ęWegt¡Sp{E__d{fßbôVMRuapÓLLPmŞdªCG¼PU~âT[sJIz²F GN}GZ¹nc[sXpY_s^øXj¥¼\\üZPIVIYkôAFbNrKĽ[o¹KVwȋyrÅ¨ad WItossv@{\\o_{EȽ«ÝmJeKcNsÅa»ógsċáùóyŇËÉƯĕç§{åÑHgämlnY`ckMX§mA[u·HU~fbQe½¨fÙ^hÇMX}g±J¡gU[×s»[±wqG_gAyLzq@joW×gçhÁH^Ƶ¸[T¥ÎB}rR¨¢~Ğ\\{ö\\sÒ®RyðZnjbÚAGKî\\Yö^ĂD~jZǞv¯İĒīÂºDrgèĄJZrLĎFC|Ø\\J·^[uwAuf_}S²X¢zR^~µ¾ª¬a[nq¸M^±nMØNaÚtS¤ROnFv_\\scUðIh¬|¤aA`_ zyhóZujY³FypKn¨NOtlXU´tIrR®xXUrkkÆUċ]e¸}L«KOPLàvFa²ÃMcWq ØPwĬ LsĨï]C¥óK]P­QeÚU{gA ¥UnFÐY¢¦b¨O~luVhZz¨{RyYijRdÈ®ÕKsĠ§@UM»AÃeB^rX"],
				"encodeOffsets": [
					[29544, 49233]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Poltava Oblast"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÚR`LJf~LHnİy EA}g\\pGƐJ[Et HÞCZ´rDtN¬¬]º`clZ}´BBoDPaVnWòZ¾]èWfSªDBdHlf^²fcÆJWÆjÖAVE£yòt­¶¦Ap]¡¥`gæU@BV\\aĎlþYOeHvm½VyvuhFÎmhV{MlRâ}]yF¯ªYL£ÈGZaÜN·ÛSf´UGg@ŉl_£¢Sm±Eu¹TkıAáJ]d\\}{u©ċzX}XW~YE±mTmM³Jq}QçX¹x\\ëlqYo]sOB`ÉN^ud¥N@xVlqnyA±^lÙ³RKd_j{IsgkGSfIitÁLW{Ûu|jcmjb³xMÉI_p{HB­ªÇ@©r@~¡S­HoVHW¿j­S©PQhPċ~Î[ÈQ eøG@lTadDtyRxÄ~@rK²tT^M­~åhcÐBS±Q¬Ovtðj_¬peg§MpĹnmrpJbudRbXQX"],
				"encodeOffsets": [
					[32915, 51558]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Rivne Oblast"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĲM¶PFp¤GRgľM\\¨eªCÀIRàS¼B~ZDnDªØAT^°XÞAÂiHs¦kVcÈ[ǶLLěBniysn_łAÄ`|wpKHRÈ{ÈLOGi_oGW¿½jYyDSGqw£I|Ë¯cwDaOyi¯CLmsM³ig{s³TËzOF©{k@YgWgScbkIÅC@z§ImPUgÇQ`ÃIo[BoS]}ymFUuD§WIkoÍHß£µSSPf\\~fDJs@ýtw³vw@kWuJÓWH¹s¥rkußbu_AuU{goÉMayXĹĬf¢pAj~Bv{T¿CGr¶fm@x\\n{|lÚx`f°Fàe\\PsxĘGgRpÒW`TŸÈVJi~N¨{RlM|`v`ÊĴU^~^RÎlÜ^Â_×ÓB^|Eât@|Ó¨HChïXïP}fmaq@KÀz¯MIhJorxnQlhjEvZ¢©¢fhSvxplãRj"],
				"encodeOffsets": [
					[26208, 53171]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sevastopol"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@h}bD¾_fqÍiD¶E®N¦u¹³fXPw]d©µÝKíyqCEkV_¦}^K§b_Mµ| ¢âXdJ¸]Ð "],
				"encodeOffsets": [
					[34373, 45915]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sumy Oblast"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@vhÄS[£°G¨Ln`CÄ\\¢I±DsOÂmC_°[BsÀyOj}G~D` B\\y qr{z@¸w®KxcAc¹CĕaiL©aF¡o¦mF^£xF¢FuAB§©sVaUpww¨Q¡§}N{ÀspD¬ÀWeªRe|d®MHmĢM~KdZb¸Jx]Ì`_[³`uvOEstpOddKpgvJ~gCqÓ}jguuPW°WáQuIqRS[xeāyocPÐSE«|EnQq}½h·{Sµr¹HFu«r{HwFK}ÉM^ÑjEWuoEýZčk[bUA@åVh_¢¦^o¥Bµs®ñzF¤UÕBÅiXIÅd±e]keGAc©CeTçX½^ñYmXUObCAp³A~Ykd¹_«^_j r¼t^H]bÄZÎf¨GfW\\FÁBi_DmXRhyZąT¦¬f|ªPWlxI^¤TCjÔIvdBkXrÊ°VSo~¤@«@}Pqlq|ÌqtlzJ`~¢EfbCrZänrÖqZ@SNÓn\\rjjÂ¤"],
				"encodeOffsets": [
					[34231, 53602]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ternopil Oblast"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@bÊNp|hVBvv`àalv¦qºtGÔXvIXlx@´uxþst@IeC[}eUkÄ¯ÕI@tk¥iQOq}DwlqÌmgvÃ{Ugs¤c|go¯u`aYuIwDy©TgxmLkc{@mf{[U\\½gpaPsQp«[]D}fkWwdm|SsvcXoa¡dAKkm~@}DtiK·O{o»NutË[DkdC¬ihyem_» jhQ¡V}CsVÑÎEgÙPr|^dbx§T»hdbUy»`£W`¡DWÆ­DsA_´td­Zh¡@Ç\\~¤WjïZ¢`ÁzuH_pR°M§CO¢¥ÆP¨OnÐFxªDpZ@l^¼r¦e|yE¨°[nzURM|x¸X\\|YbrpXSb±f"],
				"encodeOffsets": [
					[25956, 51205]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Vinnytsia Oblast"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@h¬nhs®S´HmlCv`®l`°CSd°¦[vXAlZ¢u®C¢ª@^SdGluLc¦ZzExGnHK|md­@KZtJPS^hppx¢lM\\VrARÚ^únQÖ@À^ÂHâVèixV\\¤BZa \\T@vNªWÂf@lþ^\\|MHi¨kdO¡u±¯^Cs{YŀF¼I|`]@Þ@xQzlFÚ[~W|{VpWeq^g~Uw±iGodWbªE¨Õ¦Qlttsm`GOkD¥Ï]kct{~VvoBmÚ©H|OJ»ĀyPoWiĺáJmGJs¦Y\\g¡@DgamñoLSédSAw¯rcNÁù_aqEËVcoyWßTK\\ÝOug³Oãbw^JbÙf³gHqÅIXkÁÓ]H|kj½GcXÇWUfÅ\\gb¡GokUO¥yG¨dbGnq\\wCw¥@Hp`l|Cro^IëTGMciNV²mt{NÏA±prQ­^x}TåaD¯pOt¡k^epF|}ºá"],
				"encodeOffsets": [
					[28030, 49798]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Volyn Oblast"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@iäQkwoTuegª¡¡YuiFgRkmwpqIJg°NyL¿r@nb~eðOWðDg GÔ§@{ás{F]ÔAØ`ÁÛ]kQÍ]]}ĳV_É_uN{Qk§|}MIjÇUŷ_SÑXQohėHtwO[ßf¯E_ewkÙ|{mw[@nµeHq·\\L@ÉiMPåJõY«JP~ÉµH@Ä`MjÇ]hI~ßTKuñTÇ°PQaeXR«HS }@kpĖCZ^jRč¦{rCv§¦GRoRxXăÖEhy|¡JUxljRhmsJl|§l¨n~zz¹ÖrGäfLwàFWoĬwp^¢Ů¦ªs¢¦¤ö@øPVĜI]¼~_Òjhsðxä²FZQPäÈWČBdfÈa"],
				"encodeOffsets": [
					[26208, 53171]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zakarpattia Oblast"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@|sur§Ö}BqKÊT`RctÈBnZviddw¬cºGjZQÞg\\kÎRME{d{Èq¸I]eVgcje¨B^AÞrQewt]_yjeFàK||IlÒkFy´ebg¸KSPsqµv{Ä~«S½_ÅdcUuWiXu]åQ©d«K[lbEib»GS]§ImS{`sûZ¯Y¯t¡IZ¡ŭ¬YdLuãZWl¿M¥ocFÉYÕnCch}]S·Rj qyfCjėAoÓXÚJbbS±NI}A|mjFv§LozEjs^³[knlĀD|¨d^j zPnelNjxWhvNN¢¤¸Ì`PÖda^ikZDÌw\\oJ"],
				"encodeOffsets": [
					[23439, 50184]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zaporizhia Oblast"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĂdÈrƚZ¸lRĆMÈa¼CÆkì^hd{LfsUFOtBTxO~ÁS_¸tVMpuCMz]]¨İd]¬GmOHiâ¼EAĸNhj¢ZªEÂ^pQV¸kŰyAJgưÆÂJVĔbZlÄ@\\GopÑtKh[g{S^eÞRfeÌBTc°JMf¬SÔKØJ¾fpOgmLÞT^¿\\D\\­ÜLO[ÁYNw}ÈpÀãªlm]h^¬¹VFÖ^°@F[«çRc]_K`s]S^ãGWcT«dJÑMJ]g^J¦vsR{oIĄdXtgªs£[Ñý{Ó³w¡§vVõA_MįÕ­³yM]j¡z@WÑVĭQµcuaġÛÃÍķ§¯«ÛóEB¨JhcfDMh·Lka«oo{C_ÚZHcĒEÍrKR³KB´ő[QsESPS²ÁKC^£GMbÜNQ¬JM°©Eaè§KGpµKofQqC[ÞFyŢHW}GQZdßQJm£cNaS¬ocÖ}jÕn"],
				"encodeOffsets": [
					[34959, 48617]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zhytomyr Oblast"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Öz`¤^qdzRUJ¦F{uĘRÈb´A`úVQazI¸bgMØ AgÜB¬Ň¦Qhixe~¢zÈzÄFcfv¸MWmw`D\\gY±pGX¹SKH·BUĿhÜ°B±CA´qJk¢³mQY¸Iv{sKYsasª}N]P}·âT~mAq¤eWu¢S`ý¡{aUk¤c`ýE{gaÝ^ÅlcyFi@A`iÙ\\kEywRÝ@@^{_»JĿEZt|]D²°vP¢c§lGjN[{ý]@kÁe©XM@uS [Yb£A[wUçjáUÁG¿]Õ@RùmÙ]BQMzZp~·RYilHCfrifh[CM¹b^bNVUsKyxMvobY_i\\SdHw^A©tBIÑrR|NûU~JalTdhhXZl@|EªyPSÌt´|jh´tNKn°DjPzbCxd°{Ì¤JxHrTCZz¾iXÀH"],
				"encodeOffsets": [
					[28333, 52755]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
