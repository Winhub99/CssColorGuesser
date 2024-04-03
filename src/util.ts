export const generateHexColor=()=>{

    const digits=["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9]
    const newArr = new Array(6).fill("").map(()=>digits[Math.floor(Math.random()*digits.length)]).join("")
    console.log("The color is :", newArr)
    return `#${newArr}`;
}