const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name:'Si',
        //     age:21
        // })
        reject('Something Went Wrong')
    }, 5000)
})

console.log('Before')

promise.then((data) => {
    console.log('1',data);
}).catch((error) =>{
    console.log('error:'+error)
})


console.log('After')