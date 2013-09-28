Ext.define('Qz.model.Question',{
        extend: 'Ext.data.Model',
        config: {
                fields: [{
                        name: 'id',
                        type: 'int'
                },{
                        name: 'category'
                },{
                        name: 'question'
                },{
                        name: 'groups'
                },{
                        name: 'answers'
                }]
        }
});
