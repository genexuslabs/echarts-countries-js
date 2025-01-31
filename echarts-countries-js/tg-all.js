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
	echarts.registerMap('countries/tg/tg-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Centrale Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¬LT~Z`dhU~tp@¢¤cĠhVpDJh]xAÖbJ`A¼_¼JfÊfjGÆ ÚóºRst^¹EÕH»P{E˩©{O«Uq̓Ni{IvµRÕEQgF§uR[qĿq£CÃxYYJÁ_[\\qQJwWks½EqæLcÒPfna¢tLfA^lNC²eREkxRMÐad¹hOd©fgiDążJ¾CºtIrn\\Df"],
				"encodeOffsets": [
					[533, 9085]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kara Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@\\@L­c`P_hjYRjSpdzAUtjC^¨ÄV\\^L^oÌbPopf®OjZfĈÍ°{ǞĿRƛRcSLƟ{§ÁnENčbµfmÅiHÉee»I»`B_IaBÕ^wIgoCUğg£d¡@o}sgV_cYS}«KOHk`èHvOjnwªdLUvlÊYd·nTjajZ­OPm¡¯mNiz@lOpurCG¢tItTêDVZu­ysr[\\lbIpynJVfIkR@¤ÚIP¨xPyªD¦M"],
				"encodeOffsets": [
					[421, 10262]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Maritime Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¤R `rlÔSÐ@Ȋ[NY}]}¼¼´z¨W@~Z²jV|eQL£Qi|½SHm]]zuIyNmdouSaªVyhcU_fDZ_@égC£mămMķÕom]Ùm@´ĭ@Ady¢_F}´IġC¨kZXMrVKaP]bd"],
				"encodeOffsets": [
					[747, 6704]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Plateaux Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¾FltxXIRr\\[Â`ZIZÄw¤DŀrrQ\\vE¨RhFQÖu¶J j|̔MlaH˝@ƹPÏM[Fţ\\ñW÷BǍEɅéDdÙiU±}Y@§X³y»»~^~MZȉ\\@TÏkÓ_q£QfbgwKyt_Kk^M\\Jªy^N]jTnSdNH jRTdIznh V\\nM^a\\jd¤Xì\\v]ìVg_òHäh^\\E¢NN]h\\]V¾M"],
				"encodeOffsets": [
					[636, 8096]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Savanes Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@eiY­PoeOpËa]pK[]UÃ]§DiVsyBociTQiZg`_OdK®[@NkpVGhXxY°TvB|´M[zV`a~i[ùdApaZYÂs`³hgčg¶Lä¤¢CÀfD¤bOè{Cag@hSİo~CxYǔɞ­UobYWƌÈǖE¶DAco·ba_Q½ÍÑSN×M±]uQůȊƁ"],
				"encodeOffsets": [
					[1025, 10465]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
