it('sem testes, ainda', () => {})

const getSomething = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                    resolve(13);
                    reject();
                }, 1000)
    })
}


const system = () => {
    console.log('init');
    getSomething().then(some => {
            console.log (`something is ${some}`)
                    })
        console.log ('end');
    
    }

system(); 