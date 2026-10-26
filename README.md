## **Instructions**

### **Step-by-Step: Getting Set Up**

**1\. Click the green "Use this template" button**

This creates a brand new repository under your own GitHub account, pre-loaded with the starting files.

**2\. Name your repository**

Use this naming convention:

`nyu-f26-lastname-firstname`

**3\. Click "Create repository from template"**

GitHub copies the files and takes you to your new repo page.

**4\. Click the green "Code" button → "Create Codespace"**

**5\. Wait about 15 minutes while it boots up**

This is normal. Codespaces is spinning up a virtual computer for you in the cloud, installing dependencies, and opening VS Code in your browser. Grab a sip of water while it loads.

**6\. You're ready**

When the browser tab opens to VS Code, open the `style.css` file in the file explorer on the left. The base styles are already written for you, and each rule has **STEP** comments showing where the grid properties go. That's your starting point — we'll type the grid code together in class, one step at a time.

---

## **GitHub Codespaces — A Brief Guide**

### **What Is It?**

Codespaces is a development environment that runs entirely in your browser. Instead of installing software on your own computer, you get a virtual computer in the cloud — pre-configured and ready to code — that you access through a web browser. Microsoft (which owns GitHub) hosts it.

### **What It Saves Us From**

Normally, getting a development environment set up requires installing and configuring a bunch of tools:

- A code editor (VS Code)
- A terminal (command line)
- Git (version control)
- Node.js, Python, or whatever runtime the project needs
- Extensions, themes, settings

Each one of these can break in unique ways depending on your operating system, your computer's permissions, or just bad luck. **Codespaces eliminates all of that.** You click one button and you're in a fully working environment. No "it works on my machine" problems.

### **How It Works (High Level)**

1. A project lives in a GitHub repository.
2. You click the green **Code** button and select **Open with Codespaces**.
3. GitHub spins up a lightweight virtual machine running Linux, installs the project's dependencies automatically, and opens a browser-based version of VS Code.
4. You code, save, and commit just like you would on your local machine.
5. When you're done, you stop the Codespace. Next time you come back, everything is exactly where you left it.

The environment is defined by a file called `devcontainer.json` (or `.devcontainer/`) in the repository. It's like a recipe that tells GitHub "this project needs X, Y, and Z."

### **The Catch: It's Slow to Start (And Why)**

A cold start takes **1–3 minutes**. Here's why:

- **A new virtual machine has to boot.** Codespaces isn't "running" until you open it. There's no always-on computer — one is created for you on demand. That means spinning up an OS from scratch.
- **Your dependencies install.** If the project requires packages or libraries, Codespaces runs the install process when it starts. This is the same `npm install` or `pip install` you'd run locally — it just happens automatically.
- **Extensions and settings sync.** VS Code loads your extensions, themes, and preferences from your GitHub account.

**Once it's running, it's fast.** The delay is only on the first launch of the day (or after you've manually stopped the Codespace). If you keep it open between sessions, there's no wait.

### **Tips**

- **Don't close your Codespace mid-session.** Just leave the tab open. If you close it, stop the Codespace from the GitHub dashboard so it doesn't eat into your monthly usage hours.
- **Your work is saved automatically.** Even if the Codespace stops, the files are stored on GitHub. You won't lose anything.
- **You get a fixed number of free hours per month** through the GitHub Student Developer Pack. A cold start uses some of those hours just booting up, so it's worth keeping one Codespace alive while you're actively working.
- **If you need to work offline,** you can always install VS Code and Git locally instead but it does take some set up — Codespaces is a convenience, not a requirement.

# ONELEAF | Chinese Tea Culture

## Project Overview

ONELEAF is a website concept that introduces Chinese tea culture through an accessible and interactive digital experience. It helps beginners explore the cultural meaning of tea, learn how to brew their first cup, and discover traditional teaware.

The project combines cultural storytelling with a clear visual layout to make traditional tea practices approachable for a modern audience.

## Design Mockup

[View the Design Mockup]
https://www.figma.com/design/HDBo3dj1CC6MB2I2jE6dej/Yunqi-Zhao_LandingPage?node-id=113-1242&t=kWREdYd9bRrDtKXx-1

## Weekly Update

This week, I developed the section page of tea brewing using HTML and CSS. The brewing page includes an introduction and a seven-step guide to preparing Chinese tea, organized into two groups of three steps, and one final step.

I also used JavaScript to generate the brewing-step content dynamically from an array of data objects. This approach keeps the content organized and allows the same rendering function to display different groups of steps with a consistent layout.

## Data and JavaScript

The brewing guide uses a JavaScript array called `teaSteps`. Each object represents one brewing step and contains the following properties:

- `number`: The Chinese numeral for the step.
- `chineseTitle`: The Chinese title of the step.
- `title`: The English title.
- `description`: A short explanation of the step.
- `group`: The group the step belongs to. Group 1 contains steps 1–3, and Group 2 contains steps 4–6.

The `renderTeaSteps()` function uses `filter()` to select the steps belonging to a specific group and `forEach()` to loop through them. For each step, the script creates HTML elements using `document.createElement()`, inserts the text with `textContent`, and organizes the elements by using `appendChild()`.

Finally, the generated content is added to the appropriate container in `brew.html`: `step-container-1` for the first three steps and `step-container-2` for the last three steps. Both groups reuse the same CSS classes to maintain a consistent three-column layout and typography.

This data-driven approach separates the content from the HTML structure, reduces repeated code, and makes the brewing guide easier to update and expand.

## Technologies

- HTML
- CSS
- JavaScript
- Google Fonts
- GitHub Codespaces
