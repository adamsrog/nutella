import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	email: DS.attr('string'),

	list: DS.hasMany('list', {async: true}),
	todo: DS.hasMany('todo', {async: true})
});
