// Make a GET request to the API URL
fetch("https://api.msigma.in/btech/v2/branches/")
  .then((response) => {
    // Check if the response status is OK (status code 200)
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Failed to fetch data");
    }
  })
  .then((data) => {
    const targetDiv = document.getElementById("targetDiv");
    data.branches.forEach((branch) => {
      const name = branch.name;
      const short = branch.short;

      const newDiv = document.createElement("div");
      const h2 = document.createElement("h2");
      h2.textContent = short;
      const p = document.createElement("p");
      p.textContent = name;
      const button = document.createElement("button");
      button.textContent = "Apply Now";
      const feeP = document.createElement("p");
      feeP.textContent = "Fee starting at ₹799 per subject";

      newDiv.appendChild(h2);
      p.className = "course-short";
      newDiv.appendChild(p);

      newDiv.appendChild(button);
      button.className = "button";
      newDiv.appendChild(feeP);

      newDiv.className = "courses";

      targetDiv.appendChild(newDiv);
    });
  })
  .catch((error) => {
    console.error(error);
  });
