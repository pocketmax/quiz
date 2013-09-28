Ext.define('Qz.controller.Boot', {
	extend: 'Ext.app.Controller',
	itemId: 'Boot',
	config: {
//		stores: ['Qz.store.Questions'],
		refs: {	
			saveButton: 'viewport questionpanel button'
		},
		control: {
			saveButton: {
		//		tap: 'doLogin'
				tap: function(a,b,c,d){

					var panel = a.parent;
					var answer = panel.query('radiofield[name=answer][@checked]')[0];
					if( !answer ){
						return false;
					}

					var correctAnswer = panel.correctAnswer;
					console.log(answer);

					var nextQ = function(){
						panel.loadQuestion( Ext.getStore('Questions').fetchQuestion() );
					};

					if(answer.config.correct){
						Ext.Msg.alert('Correct', 'You got it right!', nextQ );
					} else {
						Ext.Msg.alert('Wrong', 'Wrong!', nextQ );
					}
/*
					console.log(this.getApplication().getController('Boot').getStores());
					console.log(this.getApplication().getStores());
*/
					console.log(panel.questionId.toString());
					var answer = Qz.model.Answer.create({
						id: panel.questionId,
						correct: answer.config.correct,
						stamp: Date()
					}).save();

	//				Ext.ComponentQuery.query('viewport ');

				}
			}
		}
	},
	init: function(){
		console.log('in boot init');

		Qz.qCats = {
			ide: {
				vim: {},
				netbeans: {}
			},
			git: {},
			db: {
				oracle: {},
				mysql: {},
				'sql Server 2012': {
					sqlCert: {}
				}
			},
			html5: {
				css: {},
				localstorage: {},
				indexdb: {},
				canvas: {},
				formfields: {},
				videotag: {},
				geoip: {},
				webworkers: {},
				offlinedata: {},
				microdata: {},
				js: {
					jquery: {},
					extjs: {},
					touch: {},
					underscore: {},
					prototype: {}
				}
			},
			php: {
				cakephp: {},
				ci: {}
			},
			regex:{}
		};
	}
});
