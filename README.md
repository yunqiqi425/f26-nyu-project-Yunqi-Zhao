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

## Challenges

One of the biggest challenge I faced is when I changed the codes in HTML or CSS, the layout of my landing page moved upward relatively or the headbar changed styles. This is becaused there were a few groups of the codes that control the headbar and when I added some certain things, the later one rewrote the former one. So I checked those, delete and combined unnecessary codes.

Another challenge was the hero headline format. Since my hero headlines contain Chinese characters which align in two columns, it is hard to seperate them into two using span and control seperately in Javascript and CSS to keep them in one row.

## Plans For Next Week

- Complete the page for the last step of the brewing process

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

## Structure Audit — [Oct 26]

**Fixed today:**

- Deleted empty CTA links to #language, #account, #shoppingcart, #culture, and #teaset, and changed CTA buttons #culture and #teaset to normal labels in index.html
- Deleted background video links for three columns index.html
- Revised the style code in CSS for head bar due to the html change
- Deleted the empty #content-container section
- Added Challenges and Plans to last week's audit

- **Still missing (building before the layout assignment):**
- Complete challenges I ran into and my plans for next week in README.
- Build the page for the final step of the #Brew section

**One thing I couldn't figure out:**
-The style of landing page always changes relatively due to the changes in html or javascript

## Weekly Update - [Nov 1]

## Changes

**Landing Page**

- Converted the landing page hero layout from Flexbox to CSS Grid.
- Added a responsive breakpoint for the mobile layout.

**Brew Page**

- Continued refining the final brewing step section.
- Adjusted the placement of the next-section arrow and description.

## Challenges

The biggest chanllenges I faced this week is when doing the responsive breakpoint, some of the elements such as head bar and CTA button(sroll down) are more compelicated than adjustment of the width. According to my mockups, the menu navigations are combined into hamburger menu on mobile, and the arrow and descriptions should align in center. Also, since my final step page is on a separate page, I still need to fix it and keep it in center like the other six steps on mobile.

## Plans for Next Week

- Refine the spacing between the Chinese number and title in the final step headline.
- Move the headline and description for final step down, and put arrow and description into next page so that it shows the final step first, and when scrolling the arrow and desciptions shows.
- Improve the responsive header and mobile navigation, some features such as #language #Account should be folded into the hamburger menu when on mobile
- Refine the scroll-down CTA and final page layout.

## side-by-side screenshot link

https://www.figma.com/design/HDBo3dj1CC6MB2I2jE6dej/Yunqi-Zhao_LandingPage?node-id=357-2407&t=kWREdYd9bRrDtKXx-1

# ONELEAF

**Latest mockups:** https://www.figma.com/design/HDBo3dj1CC6MB2I2jE6dej/Yunqi-Zhao_LandingPage?node-id=17-126&t=O2XykBvhoLc2gP3s-1
**Live site:** https://cautious-happiness-vprqg9jj67v7hpgv5-5504.app.github.dev/

## Project Log

### Week 8 — Nov 7

**State Plan**

- **User story:**
  As a beginner learning Chinese tea brewing, I want to track my progress through the brewing steps so that I can follow the process and know when I have completed it.

- **What does the page remember?**
  The number of brewing steps the user has completed.

- **What does it start at?**
  0 completed steps.

- **What changes it?**
  The user clicks the “Scroll Down to Start” button or the arrow on the first page to start the section. On the following page, the user clicks "Next" or the arrow to continue to the next group of brewing steps. The progress updates from 0 to 3, 3 to 6, and finally 6 to 7.

- **What does the user see?**
  A progress count displayed as 0/7, 3/7, 6/7, and 7/7. When all seven steps are completed, the final page displays “Enjoy Your Tea!”

- **What does the `if/else` decide?**
  Whether the user has completed all seven brewing steps. If all steps are completed, the page displays “Enjoy Your Tea!” Otherwise, it displays the current progress and allows the user to continue.

  **What changed:**

1. I found that the `#brewing-steps` target did not exist in the HTML. Since there was no element with `id="brewing-steps"`, the link could not navigate to the correct section. The actual section ID was `brew-steps-1`, so I changed the link to `href="#brew-steps-1"`.
2. Since I needed to track progress, I added a `0 / 7` progress indicator below the “Scroll Down to Start” link on the first page.
3. I added “Next” and “3 / 7” below the arrow on the second page, and “Next” and “6 / 7” below the arrow on the third page.
4. I added an “Enjoy Your Tea!” message to the final page and made it hidden until all the steps are completed.
5. I added CSS styling for the new elements on each page.
6. I implemented the number-tracking functionality in JavaScript.

**What was hard, and what I tried:**

1. I wanted to move the `0 / 7` progress indicator higher on the first page without changing any other elements on that page or on the following pages. Since `.progress-count` is a shared CSS class, I needed to find a way to adjust only the progress indicator on the first page.
2. When I clicked the arrow or the “Next” link, I could not navigate to the final page, and “Enjoy Your Tea!” did not appear. I had to check the HTML and JavaScript and compare the IDs one by one. There were many elements, and some of the IDs did not match, which made it difficult to find the problem.
3. After everything was working, I still needed to adjust the layout and styling in `style.css` and continue refining the spacing and positions of the elements.

**What happened when I tried to break it:**

When I tried to add the number-tracking function required for this week, some of the existing elements changed as well. This has been a recurring issue in my recent work: changing one element sometimes affects other parts of the website.

I then had to go back and check whether the problem was in the HTML, CSS, or JavaScript. I also needed to make sure that the IDs were correct and properly connected, and figure out whether the change affected an entire section or only part of it.

**What I learned or changed my mind about:**

I learned that when adding a new feature, such as the number-tracking function for this week, I first need to add any missing elements to the HTML, then style them in CSS, and finally implement the functionality in JavaScript.

Sometimes, elements can overlap or be duplicated, so I need to remove unnecessary code to avoid conflicts. I also learned how important it is to keep IDs consistent between the HTML and JavaScript. For example, if JavaScript refers to an ID, that ID must match the one in the HTML exactly.

As the project becomes more complex, it is easy to lose track of these connections. If the IDs do not match, the feature may not work, and I have to spend a lot of time checking each element or inspecting the console for errors. I realized that it is much more efficient to pay attention to these details from the beginning rather than trying to fix everything afterward.

**Question for Joey:**

Last week, one of the biggest challenges I faced was making my website responsive. I realized that adjusting the width at different breakpoints is not always enough. Some elements require more complicated changes.

For example, according to my mockups, the navigation menu should collapse into a hamburger menu on mobile, while the arrow and descriptions should be centered. Also, since my final brewing step is in a separate section, I still need to adjust its layout so that it stays centered on mobile, just like the other six steps.

I am not sure how to handle these changes, especially when some navigation items, such as Language and Account, need to be moved into the hamburger menu on mobile. How should I approach these kinds of responsive layout changes?

**Next week's goal:**

1. Refine the spacing between the Chinese number and title in the final step headline.
2. Improve the responsive header and mobile navigation. On mobile, some features, such as Language and Account, should be moved into the hamburger menu.

**AI use:**

1. I explained my ideas to AI and asked for step-by-step guidance on how to implement them, including whether I should make changes in HTML, CSS, or JavaScript.
2. After making changes, I tested the website. When I found an issue or a link did not navigate correctly, I asked AI to help me check the code and identify the problem.
3. I also asked AI about features I wanted to implement beyond the code provided by the instructor. Whenever I encountered unfamiliar code or wanted to understand why a certain approach was used, I asked AI for an explanation.
