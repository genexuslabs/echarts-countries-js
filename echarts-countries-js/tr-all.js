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
	echarts.registerMap('countries/tr/tr-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Aegean Region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@PGHd_iSPAPjdF"],
					["@@GvvOme"],
					["@@¶YHa}Ht"],
					["@@p~zJXA^nh`Ġ|fZdv`TGa\\^x@pnêTEj~H_¶pDºgVnv@l[t^GdZdtwAgR[Olof@_Zaª]Deh©¨kVoU~J@ R~jdhB¢\\îQ¦PBhbb~MlvOfwTTĀGdvr|^fvnRCrjPAIL\\{L~l@fZtQĎQzJ¼TxNTvs\\HXTjV²jtFppAT¢XªNbMÎKĨDjuE]I¢WJÐkleW¦JzQ¸hzAzNIBmr¹z{ÊsVUQÓJiªq[SotrqBRYR|Yp·Z[H{mG|FO``RBjXpnPÒMxHDfzETRJvIÒy|bEbj\\ET¦fUÒMXOHnltSW}fy¦Qte@NcawJOoK`aAm°Ce°@°aRmS_SAN_Ybooc\\DU}M_q@zcRymskW«kči_g¡yeC[QÓTEdnjK^½nUjJh§PK{FuMiG{g¯E__[Y{O{Ssu{EoYysÅW_SUFscK]kY}_£[wI{]Ye@³LWYwPcÅÇQmb@gS­SoScU[wScRm@ajM_kE¢iasFfyLQ[EUO©]QYaTHjQSMOcFslxVnA^SBÍOwmUG}kYLki]iocPK@UqVmbU_IrU[khwzaPw[`B^rbrBd^ThF~f|tÈjvE²g|gR}F{IaU»S©{a[qċÁku[»XsM_£H§«uNmdsPLhoGMdFCz{VV^@hqJi\\@FckEHMnbjMBr[Lnw~DvZy`_loyOoMS­heYik_mtL~£`mFUIrgDQcsFhb^Sdr@_I[goXC`MSbhWZoi¯[NSF@iskZÅfykUVhZF^]h[AmgWspgO[fO~yMO]w¡QDW£ËcYF{waPaOiJEdefrNªOvP[`iDkh[WÁPV\\xZF^ZPBgrPOjiN^rhIXOTqEisYKPyWEkHkck\\wDS[§dqKNIgqQ}aEG±`UP¿QsHuWT·DObLHflGvZIbVf\\WH \\fIxfIZn\\Qb[A|HrQ¦J\\W¾DSTPr¯ZNjT[dVZSr~f¶K~wZ\\UzEj~@n~Dvb´XCj©@UBU¿LmY×DwP_g^CÑacyA}ReKmNuQqa{\\}DsKL_M¡rYjqUNYGuk@CSYjD®rdt~@dBkdQC^c|cxr®v]vF`Bjf~ FhqLQ]oN§_NdlChÉcTng\\wDwnEztXbefUkBD}`o]wEEVHpAªPjupHrg||irĕßPSdLjIª@Ģ~\\~Nw^@dJZWX`fGfk^{CeS£\\kngEWlc\\Ps`¥BYckmNUtJxcvQ~g\\}EITNxshc_[H»AySDS{Y@@}eI]cctA`adfHPbHZjUbqCy^KbyVA@lDr]x`T[KokfFFbÄh°zxif±zi@MemDlk|Upcl@fQªPlRdZfOFw^CNiwP¡IVYGo­^WIi~BCd[^URtb`DNuhcZkxQ`ø\\²ZfAz_zXtpEGpyDk_d©B©YiWoVg|~V_jvVPh^]jJdNgCv^jC¢lHcpRb_nCVBmjWhln~uhHN\\iVR^\\zGz\\SÂSPsYY_kN{hB{_SIbNaZKF¦Z¦]zotxT"]
				],
				"encodeOffsets": [
					[
						[27361, 39461]
					],
					[
						[29611, 37535]
					],
					[
						[28084, 37878]
					],
					[
						[27412, 40107]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Black Sea Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĔFXĆPN¶d`JbvpzC¬^fsnLXVFx¶bJlXÌ\\^Æ|\\\\îÖfvtVrD¨\\np~dJx¶LlQRdÚVZÀLL^jJÚARNTAZGò`ÚrH\\LTVĄp Ln²ZZRÆjCSzFMÖM~QĊQÀEjFÈOĪDÚNîE¬UdO´KØY|R|EÒh@ZTfcQ²AbMALCÆTvX¬|ClÆKveN¨_ Fx\\lAdmoCRuSaMGO¥`yh[Lo¢hMK_lªsRiĲ}È[K@äVúnøvĸveâ¢±dÏ[±ZØÍrePak¤YLsmdgSÂJ¤lxfZlljlbl[¸Iþ_ª_¸y¬ixoBÁsÒiÚMîBAitQæYrohE]Red[OPlBZtpnc°HMY¬S^wŀOW¨KzSv@]fAÎPzUh_U~`fSÞ@ªH´|tnEVYzULÀ^ªF¦|¤EzFZMHÞljGnczQJÔvrCUÌ©X]zKÆo¬bzS@au~K¤DºRdOtD´|KÈF\\¨trXrA¢NRfU@vbxDfÞlxÎjnDM¢dVAâz®zv®bn\\`ĐJrj ¶¢lvrA\\WMd]~G¦PIaEºsd]pdX~p|ATc¢S`IBhPrmpN¢G_Ê_^FqK B@{¤nmEe³³ßWSįÑumfë[oc¿_W^PWzCqPsU§Z­KPqEccayHSkkAmWYsHyegUwaMBw}kTwE³hÙD³yWo_LYTSFvYLW¨PpklubZIsT]^p[V±{k`wGNq¿waHYDsÅE`kouoRoXC`uMegoRo]KGiLUgmÍeU_fm}se§Rej]F[v_KYQcVD{IVmqX_ggtwN\\oo``A@qu]qNUWKWoyA§SgAmaeS±N`¥Q@KµMÍXQmdI|aNBi¯WaSIs¥ygNmemwOÝEoiDe¯Y£­JEtaZcB×nßPmzmPBÙhcdHfgHcjÁfY^±ZWbQÑ^UniX[Qu@`»Ug@ÇpcGLgiafiD×āneAgflXMFnmpCYzÄ[sh¥BeRQ|c¿Ñub_uUuw]kg_TUjqbHIaROuLkrDdZmDwCo£s}Áakcxu]yANa|Ŀ`{`kEHV[UIÑ~»a_JqOUjoRSBaKwÙogwcQcjeAYO­Y]SÓRZ@¿MÓiOaÁDiMdiA]¥AiNAhYXOiF}rcxBdgjDrNfduTÙQaLù[kP¡IOiSyFvSf§PoCåjje}Xyp@yS_HMf±y§Xg]BkyjyA|WS_{aL]UKuLsOU[BqI»Bu]}VVmfk_i{UZ@qXsMgoGs¥ePWvDqZ§FoBcN@»®q^k|©xWhGvL~OWhÉM_pKveljfzZÎH@|ZjdAbsJRYDp¸@XtT|azkNsfUvHlrmr¹`_p×@ÃHV}tGZVtE`bfJ~pbjDiFaa]u@ooOùD_jViMOcBA}[_KAAlw£VÍx³i£RUccKA[A[ėmL¿AGksMmŇ¥arYq»YW_Hs_V[@[sJegmCsxkBewLg_Bs[Qm§L]h@FeeÿIgaE¹w]ăOe_URO[WeÝpSP{@ãiErrX«PmisOSRsG_[bcYåHSZ©`oSa_J_K³{Yw@±@³X·DufuM{@GVZjjHr¶]PRhCK`uFUX\\\\JzMhFVleJ@^KnO¢BÀPPKlzULHvIxvJpfPllgL@`uBsOWXl¶ly^V|±^RtÆNC^lRAn^Dbjs"],
				"encodeOffsets": [
					[31711, 42061]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Central Anatolia Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@vNve¸CW´²@x@|Z´LI`b`pTª_TYæGdZa`\\tHTQtPnj¬OWqFqäj|@TOÞo f\\XPVQ`PfĄx^ºFhbĀJfEfg@K^¨Rnt\\Ah`xKflAtwnDfhI\\t@\\Ut`GX`Zr¼qZ¦bňNntHlÀBKĘnB\\\\BdLVd¤Q´jÎw¤UxBkBL\\`B~APdjNU`iúCpPpv@^bbEjCioaI}aeF_UsHY~sUÄGØ@`oº_nqqGkVutelMbyS{s@W·CoZIQtBacYi@{ÍGyYiefkLu`oÊNXgPK}HuXgªwl{r]¼­@MdpA¨ErYCXuO¦fHthptNrW @YVj|l`neU~Uv^¼ArJAV\\tP KLvVK^|bT`{XBizlz^Ah¨W²zNe`GzT@zo~WfiæipD¨OTeuzETPj¢JlOú\\bKÚRvSecMqChiAcdw~qjEPZWBgjM¦BB^cjjNÂCPbÔjÀN@ YÔQT^®ZZPBifRddhxpxÚbLATpQVirP`I¼bÒ}J\\VU GlF|_ŀ_b{MB^zwvldÂbt~¤DpxnCYCclqvKPQJbGraVi`Slhx^Vvv`vaÀÒdR{fQ¦Atg\\ÃZyDnoEmNkWhefBĂmØjCejbKhdHÈoh@¼V _v@\\RjWVmQ¥okKknMýLg\\T{kObyrWj£OWQLgwBU|Ecwm_COp´l_b{aAks@SD©KYwquSI{_£WG©B£XÍc{Hy]L½`¥OeoCcvweE£`l}LéQez}NUiµz{\\{]µneq@_qcuu«SswOJ}IU_HgµRC¯DãXGÍ_H}Cũg@mAifYxEnCO}[ïZi©i[ùC«^fVX[zkJCeH]d¹KYFKY¿Ï©EWbkei¡gssWqOol}LaQg[ksGkgRuUQM_eUµUawEec@yu\\§owqLw}ÝU»[ÉOáaùBávd}BuYq¡OsXOVmkFqcË±TUcaO±uooµO£WIq¡rI{ockCËíµYÍp©AÁis_}wsU©IÕuÇhE½w½oY_N³auLEe]qR§aÑXGqsJusqYPeCcByO]q¢QW_pgJk]gNO@st¡\\]xBK|kLWp_vFnw|}UmBAacwI}]KµG³~mPåE÷~ŅPfa[^Þf¤Ití}e{÷ÐpÛµcj_~Q`jytkJ¤yTtEFs{mKHeoIs}}H§Qkd³|qJÝµ¢\\ DnZfBYpDbktmHchjl²h~x¬HSljZ@g¨DÂªFpXxn\\Cx_\\|GvWpwZkB³QeDtktOÊ_p\\RDzfh¢j`Ďl¬lXntQzyd@rN`~VC[pdap`Z MBTT`Qn¯b¯@f¯DBn_bLpIPbxMd@sf¥RezX~sTmkGWPÑNV¥eFS[aiF{aÑzuJISQFyCewGÑNmOWoAiQ__P{EHnG|Y\\o¸{ZQQZAqrsTp\\©rIjRÔUVÉty|qºAnJyMyB·gyREvRxftè¼¶d|J¦CºiRW~IxHpxaFXna\\ndNp|ODt¢fdEh°\\Ø"],
				"encodeOffsets": [
					[31399, 41132]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Eastern Anatolia Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@hG`JVI~Ptx¬Tvvrd@`frm^¶[|y|¶Vj~MfyêR~Kk¤_fFxuDdfp¦P¾_Kz^|GÎd¤WªAXH¤|` JvTrZxLCªTt@Bl|bak`³oDP`xnFd{AVxhKXRP¤iqXazP|lSh[Kþ NlmlLpR¦Ò]RaX²YZ]ÂedihGGedcÚgAnOnyàOØmAdbYFs®I¤°ZfjCpÞFxPfnMnzh¦tJbT°XjAbMJ{ncRÎW¶N@L¦R_²MTbfBnh¨TzBpLXXMVrv^@r_B_p[pMsxhhW`rUn|JCdURLZu`E\\i^Qff¨~tenV`ÎfhnVjKHLp^pQhNf_vWDQpppv_lÆFtCZbGÀxMrxHl_²|\\U]o^tSJYvalko§OXZKEuTSZ`KpzX´ÚC´gxFS~lAxNbVxfhGztXZBnlTlGbzddrFO®L¨YtVrODXyOX]À`pd\\eìvnİÒXT´àf´Fmn£@|MhfhO^`fM^xvºPpP²GchTGMu}Dqxa~MHf^XpECkQZYrKHidMò{py²atBA]ã^QN½`]êpFæwt­_EWi\\uVIE`]GgSÖCqXSOcJ|qõ[eVOByiWUu{BccMao«gY_^gk^a@oiuQs©LmWFsEd{«OYmPela¦eLv]QBWKkHzQ`ÀG|NA¢Mànt@Þk|qG{rEbAdgG[^cxUFrF¸sZylDFwnI|­WM{hapyj@{vsūćhMyoaTY\\ma^SB©q]Hoa}paC_fIAO¥I^s@iSF[gWFa{NfGaf[Qwlu¨W Ka\\o}[^kS_`g}SScdUOmd_QSt[J_Q]gVo^NtYfuoHk{C[l}AaH¡W]GbyEgcXOFqaaZcItSTp\\wZFr[YWBqiM±iaE]ZcQcS±U\\{OAgwua»VWaaCwSWiz@jR¤[l@`UUqnWXclFE}zM¶fvE~aP_tiJi§Mi WNaQy_OEsJELa®KZshipIeb[g_UaRhaE}VE\\oHsmqGuykFS§{ÕoORsMSW\\WS]LWnVRmxeTQh¾pE|PFvQfEkTizaCm^¿xqMC\\{EBkgyki¿Bgyy~ĥR_OµKqXed­EUO\\_dT¡xWh{ABTôDPNäB¢XÂZś\\­Kă]éP§TġF·^qEeutÊuPO²uhuX{[Bc·][O¡bxUndÙxEbZr«gT}izT¬mH«[­Me[µ{ñSmlaJ¹BXđP®F©rn¶C~|zRkj¹Po\\uC|}¡g}H]QX{n]le´@Yh}JShnGc`oa¯KmUñ{Éc_saP¥GJuou]a@cdqDÝuAggJcagWYJwGaG]J[_}Y@áK¯V¿K\\AyiOwogY}}K}Z§wgA]iJuu¡Ym[Gcy}ëÎ«fµG]^Zs[kqs[LSYËwtsW¡C{SKEÅF±Cw£Bq©dyF^uhcpUuB~PgOé@W^EnR[EYqckCswAsOQwpjSk{sQQcw[uoK[au_\\§PqO@£NU¢oDd~yAqVwGMUc\\Ang`N L\\`DlxC¸MlnNZp`@\\cZH^m\\OZ`wBÇµbcVýrUjkLOrR\\vWx"],
				"encodeOffsets": [
					[38196, 39492]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Marmara Region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@NwU§~yHUdòPp_"],
					["@@UQHmQ_b³hHthê²@d´XnadCHQGioHçgkQJ"],
					["@@`cjNNka[bVfK\\"],
					["@@@\\rHJvg}yL"],
					["@@fzta_kL[uMq`b^"],
					["@@tai]CBmkQD]ÅMQs²]U{z]µkWkXtPvA@_hKkkeOIouJwGuVKkyLO¿O¡APmL@]fIUkENgIy[[VWvEL_DQg^OµGqiYiHU|@×¯[Fgec¡sC{PMomcb[WmEwbGoJwX}Q¹j¥D{Iµcç»esQwFu¥IXkfÏlIX¡JF^ivħCÍLaN©M¡WBSoosE±iiUSGWt[SuwMS»yIčRsRY@ekK}|K[JBiODqmQeu{]uqcÿHSSxPeku}NaaAg¥OíR¡[Acg}iQ@}IVUp§lgªCf©^Yb`e@kpPQ\\BhsxYcc]Hs\\ku@mU¹hoCµ`}GiFéSomw@[]bHSu_ceYğ{g_]mBIWyo}@}pÃF{LZzbVgzTXxdVQNBzKlT@zÞfP¬\\\\ASewOgVFUMHYµ@íqsDÙ]_KU_kNkMJ·U[¥EaI½f@~^XRZv^dp\\I¼gd^@N`knBddU`Zz`ªjfS¤LZftd^LRXv@Z`WpTVB@Ld``zH°T^prVzBSjL®EjPk@L´ªROpSà~fFziPgQRa|iøºaKtH¬hlBerN¬QrN\\`j³hsM[dhPX]^oA{fGzjAMjFjOjLŐy|AVQUs§yY}qqQpXŮrZJĮNK¢LàOĀ@¼gì[^\\¦J^t@UDº{¢@¾PdAd^R~zR NE\\ËµBQQ§Q}D¥`xÕX@bZdtZÖd¾ZfvV¼H¬I²ZĴH¼\\znpL[|PnrjJYpu¼V|@ŨtbPrO^NpSI|HF³HwS©CgOkP_fTÝ@YNccLIu\\WGsWyJe|AjeVaMDV«`}ZuHbg`w£dCbxFrVR@l~^IbgPFrZX|RF\\pxGÆ\\WÎW~Dİyè[zR^OQxBxOJàmRJðCMªLKRGplG¤´Q¶oÖi¤Sņ_lAĘŐWâ@"],
					["@@§hLnS\\RZrI^V¤LdPcnFxUH]±miW_D"],
					["@@SRh|Tmg_"],
					["@@Eª`BzÀv_Zb~D¨bclh|@Ojo`jPdkZ{K^lbU`T{|pYdJdÌG|tFJhpJRn \\tcbCzZZ\\PKaN@_dPV[NdUtVTE|u@Xµ¢o^AoPUZ@bbnTDƈBtFld`optndnNĪW|ilCz\\B`tBjrK`VElaAODlp`¤LÄzQZWb_\\q]jL~h[^zVÞ`\\ÄU@U¨OSRVtK`PObelPöC`cLiGsXXu@pCatmS{^sBOY¡¢uŊ­ÄoƐÇ²W]I wĂobDcOAdTºcDqi[esaaoBeoWe@WYOgUmHU_mEjoHUSHWCsZByH}}±taX©f½ZûNm\\uKuFIsOI¹koaWiKE]yJGqJkj×lAMßeýWgk½KusW±¥ckgġ±QWYĉayI[ña£sëyQmesSN{cC_[aJki}Ks_G]ÅmGu[YoheásMaYmXjzhd|²PnD]bwdHxmN¢x|JTXt@zf~L¼ÜxCHZtpdVO¢VxOUnoVoC}YIûAgK·sJs^Fu[PmC}W£CÁLÇQNnYjDQzcl"]
				],
				"encodeOffsets": [
					[
						[26700, 40788]
					],
					[
						[26423, 41068]
					],
					[
						[27257, 40320]
					],
					[
						[28246, 41435]
					],
					[
						[28156, 41482]
					],
					[
						[31711, 42061]
					],
					[
						[28242, 41553]
					],
					[
						[29211, 41484]
					],
					[
						[26662, 41708]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mediterranean Region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@}mU\\R"],
					["@@¬vG¨`¤ tN¼W\\lvČÂ\\rb| TªV¼bJE|Q~{h±huFÇise{E}Sgc]qAa]q_A\\Oxybgx\\lVqJV`narUV@L Opdjj^lKlZH~nVPxAÎ]TmBwUkEtPdNRTiSGbRZª^VPFR\\zKetEjb¡F`lNbin@dQxT\\dVpT®ThT@naRÆÈOdZxKX´f@Z|^xJ\\`¤~lZL^tdEV`TÆXztpZ|Ftv|TPZ|\\``°FhH|jvN|EL¨OIgVi¾mL]miFcÔS`oPÉls sfC´RlAxYXoHu[{`Dwm[WwEoÁ©Ch§@YkiT«G}w±gikdgnGlsCaZoAYeCm[¶¡ÞrI´{lc¨R~Gt~pJGfnLt|EFszS £lIzs_iR`}di¶ÜoøÏ|f~îsJe£Ý\\]beņOø}æFnO´}¶H^LJ~xdBbnA~Vx{mEuo`KX{lLwA[^s¢@tPM^hIlohX`¡R^rzPAdDfZOtrIvrtHÒW¨brQf^FvK´b`MpZ¾¾xFÈgÖvªJtV~xt`ÂjªBÎoZî¶DÌdl|pJ¢qJr¤X¶Ppp²v PdbV SÌ²dErnlUWPPtr¢vZ~AcâuúAâbÊP¼\\ÞV~xrKpx[¨zvd@FfbxV¶fVN`RvVhQHllth\\Rb~KpkPXrtt¢hjfalFXªÀÐZLEZºL^cfGDlI\\yUWe¬]úDj\\ªjðY\\~DPmwFeZBjnh@Ū ~DGÎ`HäW°CD¶QXwuQ[PqlKViþqdU¶aÈxA_PY[nG]dY@[_YomMNk·wDCk[_KMh_Bmd[GcseeCyfu]kmrcGÏNgs}AZFcw_[ZeD£jUpPZ`jHvjwOFknM§{ISk«¯[AXUe}iSckÃ[Sp\\zKZj@pwh^aWEi}½QiQacq{U[iGOuWÁc}Ą²SwNOQsaMKawsfoeH§\\me³{wXu@VOjfEKiHx\\xOAt@Ew`s[WsIwVGsùEEg_y@dMMXqu_Kel[ey`_HgQcJi]gJ[mn[EAs\\ieYiX©OMLcC}WomHGtmjPiV£HhWh}C[SQYTHtxpxÖ¡Úcz _nL~jVRfRTxdhfHVt`\\`htN\\ hâJFtfmRlWdbnChËäg^«|³hsOUcmy}{gQM[§{F¥UYP@iyiVnAJ__cy@kUk_amUCdµRA]eiOe`ÿçŁ¾µf¹Fa~yl½v£PąIug£YsaMeSgymaoËumsmioYmi[u¡iK_aGa@ÉM]mgyF]WL@lUloh`WCkos_Egms­s{[aXOSc{rA|YJOaS}qGeb`kE½ySZkAMZi@iěGVMaymi_@iZA©To_uEayuiK[_ß`³P¡zyNuj_KFdmhhGRTg|Á[jQµoyle~Ç´bsAwdJ­l¡P\\¥BN}n«z·tÃlPsVGZ{h±b¥LBşhoRNŧIÅISLImTwxoAsakM­KcVqI{_uNx}µAYoOgAYzJahKoiAdçÁJtQVVpyDUM¥`ãA]Hu}WK]FYRwOµDiVoQmwG£eFaakdR}]huN[ZjhSNC¹^C{Je\\RXnHCseEZ­"]
				],
				"encodeOffsets": [
					[
						[30629, 37062]
					],
					[
						[29965, 37165]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Southeastern Anatolia Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@NVxHrUzBc}CpV¡¤M@rP¨O[v`bL\\vpx\\RdtRl|iToRxtPxBDtdlrFZ\\QFmX]ê@Ph O }vAVdovg]zEªcrA¤x²DÆEFTLD|¢XstxZÌTKt\\lrt\\Y^]¶H¬eìÍz~Hdn\\¢ZvvjI^hB¨x~Y~LZ~phPxzjB[ÀL°UâL@~Z\\`^IHHbIxXZhbIdhhvBÞrCdcb@v^vpI¦HbOt` dÊò|nV°Lpbd_HgmT~IZg@f³^k|mW^R~G¢h~{vDp[ºOliyQ{D}mµªqE­ĒOWºAbInkòT¶|f\\®N¬\\nGS«jy~S¬hYqFaÚwcVmw¢a\\P¸^Ad|\\vWvgP±vOÉvsfrF¸]ĢE¨SêOĄ^®LŜ[YWÁ¡ãAOMCóSA}oVyJ]RoCW\\BIUSuEoiOSSÅZ¡hoBMr}NSA_{oUoumSGqe[§aYMo{F_MÕQãe{SHfsQxbrLj§WlqUmV{CjzyFYs÷ÇGUWi_A©oeBÕaG}Sĕ[sHÉ[¡gOÓDýA¹D±Ie[iDB``AkNç^}@Ç`EmKW_uhYMLM]»McW½ywC»ğWgOk}Óc}M±ÏS©[y{GÉqÛkgęMÓsAĕmŋQąa¯KådÏhHĽSŭLaJt©|Of]CejƇ´Cã^mTy_£BCQSUSIUUIImYWsJ«YwwIc{Kk[¡D{Le[qLqąkA]aawEeXšvKK½V­eijcWeNMo[]yV@TXI|rPNbU`JBruAnOûdpP©Ax±Tă~dÂXvPjHV\\| rbdjR¾R~FjbX]xg@oiLY[yToÄ\\lTdj f~VWB°\\¬TlJ|¨NmElPxuiiGY_oOiVC¤Yf`\\dxEY~BtMhHÐqdlnv^zefDtfHd"],
				"encodeOffsets": [
					[38515, 38850]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
