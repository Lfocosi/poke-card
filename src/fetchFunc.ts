export async function fetchFunc(url = "", setvar = (_a: any)=>{}) {
    await fetch(url)
        .then((res)=>  res.json())
        .then((data) => setvar(data))
        .catch((erro)=>{
            console.log(erro);
            setvar(null);
            return;
        })
}