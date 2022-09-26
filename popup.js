let LBTN = document.getElementById("listBtn");


LBTN.addEventListener("click",()=>{
    chrome.tabGroups.query({},
        async (groups)=>{
            let QGS = {};
            for(const group of groups){
                // console.log(group.title);
                QGS[group.title] = await chrome.tabs.query({groupId:group.id});
                console.log(QGS[group.title]);
            }
            // console.log(JSON.stringify(QGS));
            for (const [key, value] of iterable) {
                console.log(value);
            }
        }
    )
});