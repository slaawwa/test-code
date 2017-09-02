let fn = {

    withParams: () => {/*...*/},
    withoutParams: () => {/*...*/},

    getApi1: function(config) {
        if (config.params) {
            return fn.withParams(config);
        }
        return fn.withoutParams(config);
    },
        
    getApi2: function(config) {
        let fnType = config.params? 'withParams': 'withoutParams';
        return fn[fnType](config);
    },
    getApi3: function(config) {
        return config.params
            ? fn.withParams(config)
            : fn.withoutParams(config);
    },
    
    test(num) {
        console.time('test:getApi'+num);
        fn['getApi' + num]({config: num});
        console.timeEnd('test:getApi'+num);
    },
    getTest() {
        for (var i = 1; i < 4; i++) {
            fn.test(i);
        }
    },
};

fn.getTest();

/*
    TEST RESULT:

    test:getApi1: 0.06298828125ms
    test:getApi2: 0.159912109375ms
    test:getApi3: 0.115966796875ms

 */
