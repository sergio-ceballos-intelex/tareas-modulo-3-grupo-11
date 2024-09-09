let i
for(i=1; i<=2000; i++){
    let str = i.toString();
    let str2 = str.startsWith("2")
    if(str2 === true){
        console.log(i)
    }
}