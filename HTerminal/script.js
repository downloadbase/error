const addItem = async(item)=> {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
}

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        let timeout = 1 + Math.random() * 6;
        setTimeout(() => {
            resolve();
        }, timeout * 1000);
    })
}

async function main() {

    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length - 1];
         if (!last) return;
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0 ,- 3);
        }else{
            last.innerHTML = last.innerHTML + ".";
        }
    }, 300);
    let text = ["Initialized Hacking now reading your data",
            "Reading your files",
            "Passward files detected",
            "Sending all files and passwards to the server",
            "Cleaning up"
]

for(const item of text){
    await addItem(item);
}
 await randomDelay();
    clearInterval(t);

}
main();