const someModule  = async (p: string) => {
    console.log(`someModule is called - ${p}`)
    const { d } = await import('./dynamic'); // this path is not being resolved
    d(p);
}

export default someModule;