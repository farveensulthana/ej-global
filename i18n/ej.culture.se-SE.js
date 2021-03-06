ej.addCulture( "se-SE", {
	name: "se-SE",
	englishName: "Sami, Northern (Sweden)",
	nativeName: "davvisámegiella (Ruoŧŧa)",
	language: "se",
	numberFormat: {
		",": " ",
		".": ",",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": ".",
			".": ",",
			symbol: "kr"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 1,
			days: {
				names: ["sotnabeaivi","mánnodat","disdat","gaskavahkku","duorastat","bearjadat","lávvardat"],
				namesAbbr: ["sotn","mán","dis","gask","duor","bear","láv"],
				namesShort: ["s","m","d","g","d","b","l"]
			},
			months: {
				names: ["ođđajagemánnu","guovvamánnu","njukčamánnu","cuoŋománnu","miessemánnu","geassemánnu","suoidnemánnu","borgemánnu","čakčamánnu","golggotmánnu","skábmamánnu","juovlamánnu",""],
				namesAbbr: ["ođđj","guov","njuk","cuoŋ","mies","geas","suoi","borg","čakč","golg","skáb","juov",""]
			},
			monthsGenitive: {
				names: ["ođđajagemánu","guovvamánu","njukčamánu","cuoŋománu","miessemánu","geassemánu","suoidnemánu","borgemánu","čakčamánu","golggotmánu","skábmamánu","juovlamánu",""],
				namesAbbr: ["ođđj","guov","njuk","cuoŋ","mies","geas","suoi","borg","čakč","golg","skáb","juov",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "yyyy-MM-dd",
				D: "dddd, MMMM d'. b. 'yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dddd, MMMM d'. b. 'yyyy HH:mm",
				F: "dddd, MMMM d'. b. 'yyyy HH:mm:ss",
				M: "MMMM d'. b.'"
			}
		}
	}
});
