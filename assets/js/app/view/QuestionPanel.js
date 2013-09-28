Ext.define('Qz.view.QuestionPanel',{
	extend: 'Ext.Panel',
	xtype: 'questionpanel',
//	iconCls: 'user',
//	layout: 'vbox',
	loadQuestion: function( cfg ){

		var qblock = this.getComponent('qblock');
		var heading = this.getComponent('heading');
		var sendbutton = this.getComponent('sendbutton');

		qblock.setTitle( cfg.question );
		heading.setTitle( Qz.app.categoryPath(Qz.qCats, cfg.category, ' > ' ) );

		this.correctAnswer = cfg.correct;
		this.questionId = cfg.id;

		qblock.removeAll(true);

		cfg.answers = Qz.app.juggle(cfg.answers);

		for(i in cfg.answers ){

			qblock.add({
				correct: (cfg.answers[i].correct) ? true : false,
				label: cfg.answers[i].label
		//		itemId: cfg.answers[i].id
			});
		}

	},
	config: {
		items: [{
			xtype: 'toolbar',
			docked: 'top',
			itemId: 'heading'
		},{
			xtype: 'fieldset',
			itemId: 'qblock',
			instructions: 'Please choose an option',
			defaults: {
				labelWrap: true,
			//	labelWidth: '90%',
				xtype: 'radiofield',
				name: 'answer'
			}
		},{
			xtype: 'button',
			text: 'Send',
			itemId: 'sendbutton',
			ui: 'confirm'
		}]
	}
});
