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


function renderTeaSteps(group, containerId) {
  const container = document.getElementById(containerId);

  if (!container) return;

  teaSteps
    .filter(step => step.group === group)
    .forEach(step => {
      const stepDiv = document.createElement("article");
      const chineseHeading = document.createElement("div");
      const chineseNumber = document.createElement("span");
      const chineseTitle = document.createElement("span");
      const englishTitle = document.createElement("h3");
      const description = document.createElement("p");

      stepDiv.className = "brew-step";

      // Chinese number
      chineseNumber.className = "chinese-number";
      chineseNumber.textContent = step.number;

      // Chinese title
      chineseTitle.className = "chinese-title";
      chineseTitle.textContent = step.chineseTitle;

      // Group the Chinese number and title
      chineseHeading.className = "vertical-chinese";
      chineseHeading.appendChild(chineseNumber);
      chineseHeading.appendChild(chineseTitle);

      // English title and description
      englishTitle.textContent = step.title;
      description.textContent = step.description;

      stepDiv.appendChild(chineseHeading);
      stepDiv.appendChild(englishTitle);
      stepDiv.appendChild(description);

      container.appendChild(stepDiv);
    });
}

// Render steps 01–03
renderTeaSteps(1, "step-container-1");

// Render steps 04–06
renderTeaSteps(2, "step-container-2");


/* Track brewing progress */

// Number of completed brewing steps
let completedSteps = 0;

// Get the progress elements
const progress1 = document.getElementById("progress-1");
const progress2 = document.getElementById("progress-2");
const progress3 = document.getElementById("progress-3");

// Get the navigation links
const startBrewing = document.getElementById("start-brewing");
const nextGroup1 = document.getElementById("next-group-1");
const nextGroup2 = document.getElementById("next-group-2");

// Get the final completion message
const endingCompletion = document.getElementById("ending-completion");

// Update the progress displayed on the page
function updateProgress() {
  if (progress1) {
    progress1.textContent = "0 / 7";
  }

  if (progress2) {
    progress2.textContent = "3 / 7";
  }

  if (progress3) {
    progress3.textContent = "6 / 7";
  }

  // Check whether all seven steps are completed
  if (completedSteps === 7) {
      if (endingCompletion) {
      endingCompletion.hidden = false;
     }
    } else {
      if (endingCompletion) {
      endingCompletion.hidden = true;
     }
    }
  }

// Start the brewing process
if (startBrewing) {
  startBrewing.addEventListener("click", function () {
    if (completedSteps === 0) {
      completedSteps = 3;
    }

    updateProgress();
  });
}

// Move from Steps 01–03 to Steps 04–06
if (nextGroup1) {
  nextGroup1.addEventListener("click", function () {
    if (completedSteps === 3) {
      completedSteps = 6;
    }

    updateProgress();
  });
}


// Move from Steps 04–06 to the final step
if (nextGroup2) {
  nextGroup2.addEventListener("click", function () {
    if (completedSteps === 6) {
      completedSteps = 7;
    }

    updateProgress();
  });
}


// Initialize the page
updateProgress();

