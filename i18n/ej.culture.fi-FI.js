ej.addCulture( "fi-FI", {
	name: "fi-FI",
	englishName: "Finnish (Finland)",
	nativeName: "suomi (Suomi)",
	language: "fi",
	numberFormat: {
		pattern: ['-n'],
		groupSizes: [3],
		",": " ",
		".": ",",
		negativeInfinity: "-∞",
		positiveInfinity: "∞",
		percent: {
			pattern: ['-n%','n%'],
			groupSizes: [3],
			",": " ",
			".": ",",
			symbol: '%'
		},
		currency: {
			pattern: ["-n $","n $"],
			groupSizes: [3],
			",": " ",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"],
				namesAbbr: ["su","ma","ti","ke","to","pe","la"],
				namesShort: ["su","ma","ti","ke","to","pe","la"]
			},
			months: {
				names: ["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu",""],
				namesAbbr: ["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"jKr","start":null,"offset":0}],
			patterns: {
				d: "d.M.yyyy",
				D: "d. MMMM'ta 'yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "d. MMMM'ta 'yyyy H:mm",
				F: "d. MMMM'ta 'yyyy H:mm:ss",
				M: "d'.' MMMM'ta'"
			}
		}
	}
});