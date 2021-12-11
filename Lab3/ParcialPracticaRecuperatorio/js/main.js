let peoplePromise = new Promise(getPeople);
peoplePromise.then(fillPeopleTable).catch("Error");
let localitiesPromise = new Promise(getLocalities);
localitiesPromise.then(fillSelect).catch("Error");
let modifyBtn = document.getElementById("modify");
modifyBtn.addEventListener("click", sendModify);