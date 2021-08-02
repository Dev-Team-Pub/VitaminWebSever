var app = new Vue({
    el: '#app',
    data: function () {
        return { visible: false }
    }
})


var mallname = new Vue({
    el: '#mallname',
    data: {
        message: '하루 비타민에 오신 것을 환영합니다.'
    }
})

var products = new Vue({
    el: '#products',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        load() {
            this.count += 2
        }
    }
})

var searchfilter = new Vue({
    el: '#searchfilter',
    data() {
        return {
            drawer: false,
            direction: 'ttb',
        };
    }
})


var searchstar = new Vue({
    el: '#searchstar',
    data() {
        return {
            value1: null,
            value2: null,
            colors: ['#99A9BF', '#F7BA2A', '#FF9900'] // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
        }
    }
})


var register = new Vue({
    el: '#register',
    data() {
        return {
            form: {
                name: '',
                sex: '',
                date1: '',
                recommenduser: '',
                recommend: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('회원가입 성공');
        }
    }
})
