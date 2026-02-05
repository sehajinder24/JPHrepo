let input = document.querySelector("#jobName");
let jobList = document.querySelector("#jobList");
let jobCount = document.querySelector("#jobCount");

function addJob() {
    let jobName = input.value;

    if (jobName === "") {
        alert("Please enter a job name");
        return;
    }
    let card = document.createElement("div");
    card.className = "card normal";

    let title = document.createElement("h3");
    title.innerText = jobName;

    let status = document.createElement("p");
    status.innerText = "Status: Hiring";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";


    const applyBtn = document.createElement("button");
    applyBtn.textContent = "Apply";
    applyBtn.onclick = function () {
        applyBtn.textContent = "Applied";
        applyBtn.disabled = true;
    };

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    deleteBtn.addEventListener("click", function () {
        card.remove();
        updateCount();
    });


    card.appendChild(title);
    card.appendChild(status);

    card.appendChild(applyBtn);
    card.appendChild(editBtn);
    card.appendChild(deleteBtn);

    jobList.appendChild(card);

    input.value = "";

    updateCount();
}

function updateCount() {
    let totalJobs = document.querySelectorAll(".card").length;
    jobCount.innerText = totalJobs;
}






