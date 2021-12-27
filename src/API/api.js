export const getDatos=async ()=>{
    const res=await fetch("http://192.168.178.49:5000/api/itinerario");
    return  await res.json();

}
export const getDate=async ()=>{
    const res=await fetch("");
    return  await res.json();

}