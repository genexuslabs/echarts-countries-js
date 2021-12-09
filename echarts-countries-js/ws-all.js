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
	echarts.registerMap('countries/ws/ws-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Samoa"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@BSI@KLDJPA"],
					["@@CQfABQIM]OMMFEbDJC^TJLPYHDAW\\AJBbQPMHQZIRLNGP[JEHQ@]ScGSKAuDmJQEgBSDSI@qFUNWEcESEKFeBWRWDCIYCUOiCIDY@GJFNMHETILQFWAUF]AUVLF@NiCKLKKKAeU]GYBebI@QNGXKLE\\QRENOEBOKMIDBRWJELIBFXQJYAwVKNMFDPMV@RPHNVZPP\\PHRBRIl@nF`XL@JJL@ZLL@RLREXAJJf@ZCXBTJZURGAK`QBG^EDJ\\QJPLGJDHYXARGBITIDORF^IHFdARQPGNFP@NSLE`VVBXKGIBMTA\\Q"],
					["@@WLGVZHNSGU"],
					["@@IOIF@LTA"],
					["@@PNLARKZDRCd@PFH\\P@XH\\DTET@JPVAdQFHVITQHKVYLY\\_NAFSrsDWRIBU^MEIRYPsHEGOJKPeJMLIISWSQWE_NEEKgY@OIOR[D_CSKGKOUBOCMPWEQHKZIFG^MHMBQJ]OEWKIaBIJW@OKWBKI[EOJcM_CSIQLUD[UcAODEIWCSHQJGNATcTOFIP@VOFKJ@bBFIVUTYJmvERYNKLMTIFBLKPgLUVKDO\\OVUHMLMBkhIFM`UXTTDLPPNBZKPPNMTCTQVOdGbJPA^TLETSTALRGLRFRNNFX@\\GNLhPPBTLZD`GTJL@TH"]
				],
				"encodeOffsets": [
					[
						[-175533, -14396]
					],
					[
						[-175679, -14234]
					],
					[
						[-176235, -14193]
					],
					[
						[-176277, -14153]
					],
					[
						[-176628, -13791]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
