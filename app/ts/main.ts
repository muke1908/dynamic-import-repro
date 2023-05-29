function init() {
    console.log('Initializing')
    import('somemodule').then((_somemodule)=> {
        _somemodule.default("Hello!")
    }).catch(err => {
        console.log(err)
    })

}
setTimeout(() => {
    init();

}, 1000)
