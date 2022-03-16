new Vue({
	el: '#exercises',
	data: {
		value: ''
	},
    methods: {
        alert: function() {
            alert
        },
        store: function (event) {
            this.value = event.target.value;
        }
    }
});