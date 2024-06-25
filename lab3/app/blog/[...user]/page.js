async function getBlog(){
    const res = await fetch(host+"/api/blog/1")
    if(!res.ok) throw new Error("Can't fecth")
    return res.json();
}

export default async function Blog({params}){
    const data = await getBlog();

    return (
        <div>
            Blog
            {params.user}
            {data.name}{data.major}{data.id}
        </div>
    );
}