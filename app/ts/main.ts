function init() {
    import('somemodule').then((_somemodule)=> {
        _somemodule("Hello!")
    })

}

init();