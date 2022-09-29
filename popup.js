let LBTN = document.getElementById("listBtn");
let QGS = {};

function updateAndLogQGS(){
    chrome.tabGroups.query({},
        async (groups)=>{
            QGS = {};
            for(const group of groups){
                // console.log(group.title);
                QGS[group.title] = await chrome.tabs.query({groupId:group.id});
                console.log(QGS[group.title]);
            }
            // console.log(JSON.stringify(QGS));
            // for (const [key, value] of QGS) {
            //     console.log(value);
            // }
        }
    );
}

function genList(obj,name){
    let nodeList = [];
    for(const [key ,value] of Object.entries(obj)){
        const txt = document.createTextNode(key);
        const lb = document.createElement('label');
        const cb = document.createElement("input");
        cb.type="checkbox";cb.value = key;cb.name=name;
        lb.appendChild(cb);
        const li = document.createElement("li");
        li.appendChild(cb);
        li.appendChild(txt);
        nodeList[nodeList.length]=li;
    }
    return nodeList;
}

LBTN.addEventListener("click",()=>{
    updateAndLogQGS();    
});

let popUp = document.getElementsByTagName('body')[0];

popUp.addEventListener('mouseenter',()=>{
    updateAndLogQGS();
    let activeList = genList(QGS,"AGL");
    document.getElementById("AGL").innerHTML='';
    for(let i of activeList){
        document.getElementById("AGL").appendChild(i);
    }
});