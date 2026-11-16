const teaSteps = [
  {
    number: "壹",
    chineseTitle: "理器",
    title: "Prepare the Teaware",
    description:
      "Gather your tea, gaiwan or teapot, cups, and any other tools you need. Keep everything within reach to make the brewing process smooth and comfortable.",
    group: 1
  },
  {
    number: "贰",
    chineseTitle: "温器",
    title: "Warm the Teaware",
    description:
      "Pour hot water into the teapot or gaiwan and tea cups, then gently swirl it around. Discard the water before brewing to warm the vessels and help maintain a steady brewing temperature.",
    group: 1
  },
  {
    number: "叁",
    chineseTitle: "投茶",
    title: "Add the Leaves",
    description:
      "Place the tea leaves into your warmed brewing vessel. The amount depends on the type of tea, the size of your vessel, and your preferred strength.",
    group: 1
  },
  {
    number: "肆",
    chineseTitle: "注水",
    title: "Pour the Water",
    description:
      "Pour water at a temperature suited to your tea, allowing the leaves to unfold and release their aroma. Different teas call for different temperatures, so follow the guidance for your chosen variety.",
    group: 2
  },
  {
    number: "伍",
    chineseTitle: "候茶",
    title: "Let the Tea Steep",
    description:
      "Allow the tea to steep for the recommended time, giving the leaves a chance to release their flavor. Some teas benefit from a quick rinse before the first infusion, while others can be brewed directly.",
    group: 2
  },
  {
    number: "陆",
    chineseTitle: "分茶",
    title: "Pour the Infusion",
    description:
      "Pour the tea into a serving pitcher or directly into the cups, depending on your setup. Empty the brewing vessel fully to help keep the next infusion balanced in flavor.",
    group: 2
  }
];


// Number of completed brewing steps
let completedSteps = 0;

function render() {
  const container1 = document.getElementById("step-container-1");
  const container2 = document.getElementById("step-container-2");

  const section1 = document.getElementById("brew-steps-1");
  const section2 = document.getElementById("brew-steps-2");
  const finalSection = document.getElementById("next-section");

  // Clear the containers before rebuilding the steps
  if (container1) container1.innerHTML = "";
  if (container2) container2.innerHTML = "";

  // Loop through the teaSteps array
  teaSteps.forEach(step => {

    // Check which section the step belongs to
    if (step.group === 1 && completedSteps >= 3 && container1) {
      const stepDiv = document.createElement("article");
      const chineseHeading = document.createElement("div");
      const chineseNumber = document.createElement("span");
      const chineseTitle = document.createElement("span");
      const englishTitle = document.createElement("h3");
      const description = document.createElement("p");

      stepDiv.className = "brew-step";

      chineseNumber.className = "chinese-number";
      chineseNumber.textContent = step.number;

      chineseTitle.className = "chinese-title";
      chineseTitle.textContent = step.chineseTitle;

      chineseHeading.className = "vertical-chinese";
      chineseHeading.appendChild(chineseNumber);
      chineseHeading.appendChild(chineseTitle);

      englishTitle.textContent = step.title;
      description.textContent = step.description;

      stepDiv.appendChild(chineseHeading);
      stepDiv.appendChild(englishTitle);
      stepDiv.appendChild(description);

      container1.appendChild(stepDiv);

    } else if (step.group === 2 && completedSteps >= 6 && container2) {
      const stepDiv = document.createElement("article");
      const chineseHeading = document.createElement("div");
      const chineseNumber = document.createElement("span");
      const chineseTitle = document.createElement("span");
      const englishTitle = document.createElement("h3");
      const description = document.createElement("p");

      stepDiv.className = "brew-step";

      chineseNumber.className = "chinese-number";
      chineseNumber.textContent = step.number;

      chineseTitle.className = "chinese-title";
      chineseTitle.textContent = step.chineseTitle;

      chineseHeading.className = "vertical-chinese";
      chineseHeading.appendChild(chineseNumber);
      chineseHeading.appendChild(chineseTitle);

      englishTitle.textContent = step.title;
      description.textContent = step.description;

      stepDiv.appendChild(chineseHeading);
      stepDiv.appendChild(englishTitle);
      stepDiv.appendChild(description);

      container2.appendChild(stepDiv);
    }
  });

  // Show or hide sections based on the current state
  if (section1) section1.hidden = completedSteps < 3;
  if (section2) section2.hidden = completedSteps < 6;
  if (finalSection) finalSection.hidden = completedSteps < 7;

  // Update progress numbers
  const progress1 = document.getElementById("progress-1");
  const progress2 = document.getElementById("progress-2");
  const progress3 = document.getElementById("progress-3");
  const progress4 = document.getElementById("progress-4");

  if (progress1) progress1.textContent = completedSteps + " / 7";
  if (progress2) progress2.textContent = completedSteps + " / 7";
  if (progress3) progress3.textContent = completedSteps + " / 7";
  if (progress4) progress4.textContent = completedSteps + " / 7";

  // Show the completion message
  const endingCompletion = document.getElementById("ending-completion");

  if (endingCompletion) {
    endingCompletion.hidden = completedSteps < 7;
}
}



// Get the navigation links
const startBrewing = document.getElementById("start-brewing");
const nextGroup1 = document.getElementById("next-group-1");
const nextGroup2 = document.getElementById("next-group-2");


// Start the brewing process
if (startBrewing) {
  startBrewing.addEventListener("click", function () {
    if (completedSteps === 0) {
      completedSteps = 3;
    }
    render();
  });
}

// Move from Steps 01–03 to Steps 04–06
if (nextGroup1) {
  nextGroup1.addEventListener("click", function () {
    if (completedSteps === 3) {
      completedSteps = 6;
    }
    render();
  });
}


// Move from Steps 04–06 to the final step
if (nextGroup2) {
  nextGroup2.addEventListener("click", function () {
    if (completedSteps === 6) {
      completedSteps = 7;
    }
    render();
  });
}


// Initialize the page
render();

