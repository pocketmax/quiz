var questionList = [{
	id: 1,
	category: 'vim',
	question: 'page up command?',
	groups: ['A','B'],
	answers: [{
		correct: true,
		label: 'ctrl + u'
	},{
		label: 'shift + u'
	},{
		label: 'alt + u'
	}]
},{
	id: 2,
	category: 'vim',
	question: 'page down command?',
	groups: ['A','B'],
	answers: [{
		correct: true,
		label: 'ctrl + d'
	},{
		label: 'shift + d'
	},{
		label: 'alt + d'
	}]
},{
	id: 3,
	category: 'vim',
	question: 'search command?',
	groups: ['A','B'],
	answers: [{
		correct: true,
		label: '/'
	},{
		label: ':'
	},{
		label: '?'
	}]
},{
	id: 4,
	category: 'vim',
	question: 'move to top of page command?',
	groups: ['A','B'],
	answers: [{
		correct: true,
		label: 'gg'
	},{
		label: 'tt'
	},{
		label: 'pp'
	}]
},{
	id: 5,
	category: 'vim',
	question: 'move to bottom of page command?',
	groups: ['A','B'],
	answers: [{
		correct: true,
		label: 'G'
	},{
		label: 'gg'
	},{
		label: 'tt'
	}]
},{
	id: 6,
	category: 'vim',
	question: 'switch to next tab command?',
	groups: ['A','B'],
	answers: [{
		correct: true,
		label: 'gt'
	},{
		label: 'nx'
	},{
		label: 'ctrl + >'
	}]
},{
	id: 7,
	category: 'vim',
	question: 'switch to previous tab command?',
	groups: ['A','B'],
	answers: [{
		correct: true,
		label: 'gT'
	},{
		label: 'pv'
	},{
		label: 'ctrl + <'
	}]
},{
	id: 8,
	category: 'vim',
	question: 'copy single line command?',
	groups: ['A','B'],
	answers: [{
		correct: true,
		label: 'yy'
	},{
		label: 'cc'
	},{
		label: 'cp'
	}]
},{
	id: 9,
	category: 'vim',
	question: 'block copy command?',
	groups: ['A','B'],
	answers: [{
		correct: true,
		label: 'shift + v,  y'
	},{
		label: 'alt + b, c'
	},{
		label: 'ctrl + b, c'
	}]
},{
	id: 10,
	category: 'vim',
	question: 'paste command?',
	groups: ['A','B'],
	answers: [{
		correct: true,
		label: 'p'
	},{
		label: 'P'
	},{
		label: 'yy'
	}]
},{
	id: 11,
	category: 'vim',
	question: 'delete word and put in insert mode?',
	groups: ['A','B'],
	answers: [{
		correct: true,
		label: 'p'
	},{
		label: 'P'
	},{
		label: 'yy'
	}]
},{
	id: 12,
	category: 'php',
	question: 'explode args?',
	groups: ['A','B'],
	answers: [{
		correct: true,
		label: 'explode ( string $delimiter , string $string [, int $limit ] )'
	},{
		label: 'explode ( string $string , string $delimiter [, int $limit ] )'
	},{
		label: 'explode ( array( string $delimiter, string $string) [, int $limit ] )'
	}]
},{
	id: 13,
	category: 'php',
	question: 'implode args?',
	groups: ['A','B'],
	answers: [{
		correct: true,
		label: 'string implode ( [string $glue ,] array $pieces )'
	},{
		label: 'string implode ( string $pieces , array $glue )'
	},{
		label: 'string implode ( array $pieces )'
	}]
},{
	id: 14,
	category: 'php',
	question: 'str_pad args?',
	groups: ['A','B'],
	answers: [{
		correct: true,
		label: 'string str_pad ( string $input , int $pad_length [, string $pad_string = " " [, int $pad_type = STR_PAD_RIGHT ]] )'
	},{
		label: 'string str_pad ( string $input , int $pad_length )'
	},{
		label: 'string str_pad ( string $input , int $pad_length [, string $pad_string = " " [, int $pad_type = STR_PAD_TOP ]] )'
	}]
},{
	id: 15,
	category: 'touch',
	question: 'Ext.getStore()?',
	groups: ['A','B'],
	answers: [{
		correct: true,
		label: 'Ext.getStore(storeId|storeInstance|storeConfig)'
	},{
		label: 'Ext.getStore(storeId)'
	},{
		label: 'Ext.getStore(storeConfig)'
	}]
}];
