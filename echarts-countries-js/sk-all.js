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
	echarts.registerMap('countries/sk/sk-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Central Slovakia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@HFN\\LfvVHLRKjHRbIjADNrR@P`f\\PdNDNpX[bV`xPPCbHLYfCjJnD^JRMnDTC`UfAtbhHZNzAxHPElC`F|D|]UkTKSm\\EHUVQEUaODWRMTFGXF`f`EFLfE`W\\AbNbKpTTGVJWdZ`VHTER^MXVZJ\\ETx`FLdFVEpHFKzJZ@RTCPNLCRzLPNDXLBVrJPQKQ\\S^IZ@POXECSFsjyDc`_CE`[^B^W\\F`PEaTK[m¨Q|W`@b`lJnCDTQ@aMGTuYiDK`AZeaC[MCYqiBYQKJQQXNnG^MhDjP`GCWXKXUBceYOWfAXZDlZXDUg_@_WHcXF^ItGnNVEOi@SQULW[gF_KImA_FQO\\SbMbi^OG_X]xCIMy[sC\\QfBnI^DòSdfXO`IjE\\MZCdQaGKIEiUOeHmMK\\asa@{ROfD y^KN[ZYTGM[ViOYrKXHLK^II[DSQISgBUOGKWaKEaVMG]TItC@Wz@VN`WfJLRbEfLRQJWcGQSuiH]O_SKRYGM}NKOQeOUC_a@DOuEGHZ]BMaYGgUyF[AaJDWMe}_WYiILS]GQUqTqI]S]FU[]Kg_K^pMFM`aCCLmHsWEJ_@O[W@WXLPbTMXUCKPcNCJuF][_AsZ]zUGqZoW{mSAiScA@[KM_KJoYSQwFOUKIQeOQHCR[@WW_@QG[PeKHyCaKSQiEMYQGwTkGJ_P]BQMUAoNeOOOWT[BeTA`ZLJTbNhhET[`RHCXZhgRcWYEEgKU@OOUHSUHOuDKC{F_LMNgFOUWCMRA^LPV@\\VmpXJ]VPZZN\\FHNIVJXPRM^Y@QXM~KPwLY@_QIM_MSeSADSKQcMqLOMqGwJaioIFfRRlRARRPAXINOrkAN^WPGnBXNtIJkJ}KjnSTI\\RdTIrAbF~\\jCB\\TZ\\NVIpGPDdMHNK\\hRZZHbZXdE`N~G`QFGVlH\\}`FL±nDP`]\\Db^FPXmb{EmHSJ}CSKQReIQ[cA]Q§FW\\dNdDVXBNhPJRH|tDbKPPLGfo^eD\\XfVETWF@fkHDPkTaDKLqRmZ@VcPHLQ\\]`HLQVqfK\\_PE^cBI"],
				"encodeOffsets": [
					[18763, 50499]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Eastern Slovakia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@dRBbbLªKVDvWCM^WhIcZ@GbFX^`GXHfh^NRDfbnXUdNQTbHV^dFTNPIXFrENHh@`MXFLrIJR^WDNTI\\TNatDZZTD@RbIdHXA\\O\\ENUOXM`CXR`HVrvKJMbFb~ApOGOZCMYZKDYbJPIKQjMEY^JXY\\@`ZV@b[EUfDREHU^]¨ZdHKTRT VGXHzATX¥xMZRJtH^HdIVZxSujN^RETTXNGfZPVVH|Y~FahCJMx[nHVEXDNVTF`Sf`nCXPhMfBZTbFZcZKDOvIZNvQHW]JeTQX@CTTZhLRN^@NYXSbJXILWZIZDXMDboL_|kjSA[ROUhQxOjCjKt@AOS^QfPlAJYSOTKY`ApK\\VARYXINSb_DXEhYZEXNzDbMIq@[QP]qS_FyQE_OCF[MMEwuM[cKsPSHsMEM[oUMibSDWaqKk[AoMg]w[]iUM]BWS[CemUiCkÿBe\\eaEBQ_KWD[EeTmSQNqPEKoQYD{@[IYYaNYKSDuQKTgIDcWQwP_Ee@eRaBcRKPE^eP_BEnuQHBPQNAt_`WL]Q[BILgDaTMrSPmJw`UBORUCOQ@UIIkH_I[DAKUSOFQeSTYPKKWHIKaMMD[QeHc[]_UCaHKJFXQNoPBeLmKIAXiPKXYNSSDY^ODFZ[BOÕIYBUqBQOkEMMaA[MRQaYFKNYEG]NGIsSEKWqWQReKaFKQeI_XUMy@@XsDSJH^UNFbbLLXPHAVThRJCTJ\\]JKLWGqLPZUjN\\SHYZM\\]LzeCQP@|tb[bNLGnfVPFjLJbHcRYD[NiF_JWPceñT]CmJeA[RtDz\\JNwDW^H`]PajaN[TRP`EnBLJE`\\hKXRV@TPjUFmMsH]JWEGd`X`@VhWCkYCWYeBPXfZAdWVWLDX_H"],
				"encodeOffsets": [
					[20362, 50386]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Western Slovakia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@JdAF]`OL[reRUGK^_R[GKdO@UnYrQLKbClSCOlG@eXEFSeU[WfCp]HeOKLOCa{sQGIgOAMUWcCcMX[¨E^RdBR\\fJRQTL~DTInG|FnaOW]ECa^[O_C²mEK~_G[kHUREH_}_McFYWGaYYgQL[GMcNOCoHUJ[MSYA[iD}[aEqBSJQcJ[TSim~LlIJIMsAWHmXOM]lBPqJMBWQOBQkQQQEepJbjxIrHPNrKdNLRCTTBTf`NJN`RZ@xKLON}RWZ@N]OQIWJUGM[EYMOY^UWIno[UU@KOB]NQXDPVhENM`K|ELDvCGPTVVGPPV@hLFZFdXhQYgDWQG\\_FSggaMISYKB_IOYCKSWEeHCgKmLWS{JWGMaUUJ[Sc]I{@WYdSBqISWUNAQfMV@HOdCPKL_zQOQDqH­SKICYYUSEu[QANA[KkIcBYPgFgQIgK«UGoN§JgEqDRkBsJ¥BUXoYyCuImLUBKoHmGYR¡LUFSVl{\\e`QH_CgMcbQ`BLo`k@iVqNctGTi^U^eL}p_\\UFw@gCiJUNBNZ\\PFZ\\hDJJMPFXXQlj^JMVaOURQDLbCL|EjRLLZEXZUDK`NLjL^ebSbFPNTCfj^G\\NNhiVhfyPeFTdvUT_FaRITaTplHXql_IUJJNUJEf[H@T_DGRJTw@_Z{@]^ZV\\FjlMNy^IR{Xr^\\HNVdPJNzjA`IRc^qNYB]SCSQAUIKGsG]KIWXSJ[I{JUOÉGaGOS_^DRSXHVIfPFET^PRTN`AjZ^dVA^\\RJZ\\dTLFThTNLjNBV`ZA`TRVRRXJfbTH^MtEjQTDRMWkTO^JdKNP`RRER\\dNpKytFXZ\\IfBZbfBZZA`Nj@`Z`N`fl\\VHARÐDdI`JHbTVJ|VZERZ^xJnCbLbOd@\\dXZ\\DNftKlTRYXXR@TdPKPBjVP^QNAZ^NBJnVA`RtArPtDHLlJ"],
				"encodeOffsets": [
					[18763, 50499]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
