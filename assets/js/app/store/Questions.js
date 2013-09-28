Ext.define('Qz.store.Questions',{
	extend: 'Ext.data.Store',
	requires: ['Qz.model.Question'],
	fetchListQuestion: function (qData){

		var groupStats;

		console.log(qData);
		var myTmp = [];
		//generate count of members in each group for this question
		for( i in qData.groups ){
			myTmp.push({
				filterFn: function(item) { 
					var groups = item.get('groups');
			//		console.log(groups);
					for( x in groups ){
						if( groups[x]===qData.Groups[i] ){
							true;
						}
					}
				}
			});
		}
		console.log( this.filter(myTmp) );

	},
	fetchQuestion: function( qid ){


		if(qid){
			var resultId = qid;			
		} else {

			var resultId;
			var answersStore = Ext.getStore('Answers');

			//kick out if we have answered ALL the questions based on answers on localstorage
			if( this.getAllCount() <= answersStore.getAllCount() ){
				alert('You answered all the questions');
				return false;
			}

			//pick a question we haven't answered yet
			while(1){

				resultId = (Math.random() * this.getAllCount() | 0 ) + 1;

				if( !answersStore.getById(resultId) ){
					break;
				}

			}

		}

		qData = this.getById(resultId).data;

		//this is a grouped question, so generate answers from other questions in that group
		if( typeof qData.groups ){
			return this.fetchListQuestion(qData);
		} else {
			return qData;
		}

	},
	config: {
		model: 'Qz.model.Question',
		autoLoad: true,
		data : questionList
	}
});
