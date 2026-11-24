### Week 11 — Nov 23

- **USER STORY AUDIT** -

**Mian story:**
As a beginner learning Chinese tea brewing, I want to follow a step-by-step tea brewing guide so that I can confidently prepare tea on my own.

- **Acceptance criteria：** -

**Criterion 1:**
The guide breaks the brewing process into clear sequential steps.
Status (✅):
Notes:This section is clearly devided into 4 pages, which are section landing page, brewing steps 1-3, brewing steps 4-6, and final step page.

**Criterion 2:**
Each step includes a visual explanation of what the user should do.
Status (✅):
Notes:Landing page have cta bottons for clicking to enter each section; brewing section page and two pages of brewing steps(step 1-3, 4-6) have arrow pointing down, instructive description "Next", and step count for user to track progress; The final step page also has arrow for next section and descriptions showing when all progresses are completed.

**Criterion 3:**
Users can progress from beginner-level brewing to more advanced techniques.
Status (🟡):
Notes:The section shows basic brewing steps, but no more advanced techniques but it has search function to direct from landing page.

- **USER TEST NOTES** -

-Maker: Yunqi Zhao
-Tester: Lindsey Lewis

**Who the user is:**
The user is a beginner who is interested in learning Chinese tea brewing.

**Task 1 :**
**Find the section you could learn Chinese tea brewing**
-Completed? Yes
-Where they hesitated or got stuck:
The font style looks different and the height was short on her screen so she did not notice the CTA buttons located near the bottom of the landing page. Also, there is either way of directing to the brewing section by clicking the CTA button or typing keywords in the search panel. She used the first one.

-What they said they expected:
She expected the CTA button at a more centered location so she can see it without adjusting the screen size.

**Task 2:**
-Learning Chinese tea brewing till you finish
-Completed? Yes
-Where they hesitated or got stuck:
No
-What they said they expected:
She said she did not expect the brewing guide was step-by-step, which is great, when clicking the brewing section.

**Tester's one-line takeaway:**
"The one thing I'd fix first is some decriptions for each section on landing page such as step-by-step instructions for tea brewing"

- **PUNCH LIST** -

**MUST SHIP** (aim for 3–5 items; note where each came from: story audit or user test)
-CTA buttons which allow users to click and enter the section
-Arrows and instructive descriptions such as "Next" to tell users what to expect and how to get into that state
-Video and image backgrounds that give users vibes even though they do not understand the language.

**NICE TO HAVE**
-Step tracking that count and shows how many steps being finished
-Search function which allow them to type in keywords to direct to the section

**CUT**
-Criterion 3 is not necessary since it is for beginner, I may do it if I have more time.

### Week 10 — Nov 22

**Event Plan**

- **User story:**
  As a visitor, I want to use the search bar to enter a keyword and continue to the tea brewing section, so that I can easily find where to start learning how to brew Chinese tea.

- **The event:**
  I will use the input event on the search input. It works whenever the user types or deletes text, which makes it suitable for updating the search state in real time.

- **State:**
  searchText will store the user's current input. It will start as an empty string with close tab and input description.

- **My function:**
  I will write a function that checks whether the search input contains meaningful text and returns true or false. I will use its result in render() to update the search panel based on the current state.

**What changed:**

1. Added the Search Panel structure to index.html, including IDs for the search toggle, input, and close button.
2. Styled the search panel with a dark gradient background, an input underline, and a close button.
3. Created a separate search.js file to handle the search interaction without interfering with the brewing steps in script.js.
4. Added state variables to track the search text, panel visibility, and invalid input.
5. Added a hasSearchText() function to check whether the input contains meaningful text.
6. Added input validation so empty or whitespace-only submissions display an error message instead of navigating.
7. Updated render() to control the search panel, validation feedback, and visual state.

**Why redraw on every event:**
Using render() keeps the page updated based on the current state instead of changing different elements directly inside each event handler. When the user opens or closes the panel, types, or submits an invalid input, render() updates the interface to reflect the latest state. This makes the interaction easier to manage because the display is controlled in one place.

**What was hard, and what I tried:**
I initially added a “Press Enter to Search” message below the input, but it did not look right. The underline became visually interrupted when the message appeared, and I realized the extra message was unnecessary because the input already had a “Search” placeholder. I decided to remove it and use the existing hasSearchText() function to check whether the user entered valid text, then use render() to update the search panel.

I also had to reorganize the HTML because the input, error message, and close button were all direct children of a flex form. This caused them to align horizontally instead of placing the error message below the input. I added a wrapper around the input and error message to create a separate input group and adjusted the CSS.

**What happened when I tried to break it:**
I noticed that even when I entered random words that were unrelated to tea, the search form still allowed me to navigate to the brewing section. This made me realize that the current search only checks whether the input is empty, not whether the keyword is related to the content on the website.

While testing the error message, I also noticed that the close button (×) moved when the error message appeared. This happened because the layout was affected by the additional message, so I need to make the button position more stable.

**What I learned or changed my mind about:**
I learned that adding an element to a flex layout can affect the position of other elements, even if I only want to change the text below an input. I also realized that using transform to position an element visually can create unexpected results when the surrounding layout changes. Instead of adjusting positions only with transform, I need to think more about the structure of the layout and how elements relate to each other.

I also learned that a function can do more than return a value. Its result can be used by render() to decide how the interface should respond to the user's input.

**Question for Joey:**
1.The Search button is currently on my landing page(only works when open index.html in a live server), and submitting a keyword takes the user to the brewing page. Since the same header appears on every page, how can I make the Search function work across all pages? Do I need to add the same search code to every page?

2.How do websites match a search query to related results, even when the user doesn't type the exact keyword? Do they need to manually add every possible keyword, or is there another way to handle this?

**Next week's goal:**

1. Adjust the search bar width and position so it is more balanced and centered. Fix the close button position so it stays in place when the error message appears, and refine the error message placement.
2. Switch the positions of the hamburger menu and shopping cart in the header.
3. Continue improving the search interaction and making the header more consistent across pages.

**AI use:**
1.Used AI to polish the wording in my README and make my notes clearer in English.
2.Used AI to interpret assignment requirements and explore ways to implement interactions I wanted to create. I asked for step-by-step guidance and explanations of why certain code was needed.
3.Used AI to clarify class concepts I did not fully understand so I could better understand how the code works and make changes myself.

### Week 9 — Nov 15

**Render Plan**

- **User story:**
  As a beginner learning Chinese tea brewing, I want to follow the brewing steps in order only when clicking the button, and unlock each section as I go so that I can track and follow my progress and know when I am finished.

- **State:**
  The page remembers how many brewing steps have been completed using the completedSteps variable. It starts at 0.

- **What changes it:**
  Clicking "Click to Start" unlocks the brewing section and leads to the second page of the section, which is the first page for brewing steps 1-3. Clicking the first "Next" button unlocks the next page, which is the page for brewing steps 4-6. Clicking the second "Next" button unlocks the final page, which is the page for brewing step 7. Scrolling alone does not change the state or unlock a new section.

- **What render() draws:**
  The render() function will rebuild the brewing step content using the teaSteps array. It will loop through the six steps and place each step into the correct section. It will also control which sections are visible based on the current state. The seventh step, "Savor the Tea," is currently part of the HTML and will remain in the final section.

- **The if inside the loop:**
  For each step, the if statement will check its group and place it in the correct container: the first section for steps 1–3 or the second section for steps 4–6.

- **What else render() works out:**
  The function will calculate the progress numbers based on the current state, show or hide the sections that have not been unlocked, and display "Enjoy Your Tea!" when the user reaches the final section.

**What changed:**
1.Removed an extra < character from the HTML.
2.Moved the CTA button lower on the landing page and adjusted the position of the Chinese headlines.
3.Updated the CSS and JavaScript to control section visibility. Users now need to click the “Click to Start" or "Next" buttons to unlock the next section instead of simply scrolling down. I also changed the instruction on the first brewing section to "Click to Start" to make the required action clearer and prevent users from skipping the Start button.
4.Added video backgrounds to the three columns on the landing page and added background videos or images to the following sections.
5.Combined the previous renderTeaSteps() function and the page update logic into one render() function.
6.Added a loop inside render() to go through the teaSteps array, with an if statement to check each step and place it in the correct section.
7.Used completedSteps inside render() to control which sections are visible or hidden.
8.Updated all progress numbers to be calculated from the current state instead of using fixed values such as 0 / 7, 3 / 7, and 6 / 7.
9.Changed the Start and Next click handlers so that they only update the state and then call render().
10.Added an initial call to render() when the page loads.

**Patching vs. rendering:**
Before this assignment, I used an updateProgress() function to update individual elements on the page directly. For example, it changed the progress text and showed the completion message when the user reached the end. However, the progress was mostly based on fixed values rather than being fully calculated from the current state. The function did not rebuild the brewing step content.

With the new render() function, the page is updated based on the current value of completedSteps. Instead of changing individual elements separately in the click handlers, the handlers now only update the state and call render(). The render function then decides which steps to display, which sections to show or hide, and what progress numbers and completion messages to display.

I found that rendering makes the code more organized because the page updates are handled in one place. It also makes the relationship between the state and what users see easier to understand.

**What was hard, and what I tried:**
When I added three video backgrounds to the columns on the landing page, I noticed that the video did not appear behind the header at the top. It only became visible after scrolling down a little. At first, I thought the problem was that the header was not transparent or was not layered correctly above the videos. I realized that the actual problem was that the three hero columns on my landing page had previously been moved down by 80px. This caused the video backgrounds to start lower on the page instead of covering the entire area behind the header.

I also wanted to make all the background images and videos darker because their original colors were too saturated. I wanted them to look as if a semi-transparent black layer was placed over them. For images, I could use a gradient overlay in CSS. For videos, it was a little more complicated. I learned that I could use the ::after pseudo-element to create an overlay layer. I also needed to adjust the z-index values to make sure the text stayed above the overlay instead of becoming darker along with the background.

Another challenge was adjusting the positions of different elements in CSS. After adding new backgrounds and making other changes, some of my previous layout adjustments affected the new elements. I had to go back and check the existing CSS to find which styles were causing the layout problems.

**What happened when I tried to break it:**
When I first changed the page update logic to use render(), my Steps 1–3 and Steps 4–6 pages became blank. I realized that changing the function also meant updating all the related click handlers. The buttons could no longer rely on the old updateProgress() function. They needed to update completedSteps and call render() so that the step content could be generated again.

I originally wanted users to click "Click to Start" to enter Steps 1–3, then click Next to move to Steps 4–6. However, during testing, clicking Next on the Steps 1–3 page did not work as expected. I had to click "Click to Start" again before reaching the next section. I realized that I needed to update the click handlers for all the related CTA buttons, and it was easy to miss one when changing the function.

After fixing the navigation, I noticed that "Enjoy Your Tea!" was no longer showing on the final page. I also encountered another issue where the two brewing sections became blank again. At first, I thought it was caused by the order of the code. After checking more carefully, I found that I had placed the progress update code outside the render() function instead of inside its curly braces. I moved it into render() so that the progress numbers and completion message would also update based on the state.

**What I learned or changed my mind about:**
I learned that using one render() function to handle page updates makes the code cleaner and easier to manage. Instead of updating many individual elements separately, I can use the state to control what appears on the page.

I also realized how important it is to check all the related buttons and elements when changing a function. If one button or element still uses the old function, part of the page may not work correctly.

Another thing I noticed is that my CSS can become difficult to manage when I keep adding new styles and making small position adjustments. For example, changing the position of one column, headline, or header element can affect other parts of the layout later. Sometimes, adding a new background or section causes previous elements to move or display incorrectly. I want to find a better way to organize my CSS so that future changes do not affect the existing layout as much.

**Question for Joey:**
Sometimes I have problems organizing my CSS when working on a project with many sections and elements. For example, I may adjust the position of columns, headlines, or elements inside the header. Later, when I add something new or make changes to the JavaScript or CSS, some of the previous layouts suddenly change. This happened when I added the background videos and discovered that my landing page columns had previously been moved down by 80px. I have also had issues with the header font sizes and spacing changing after adding new styles.

Is there a better way to organize CSS and structure styles for different sections so that new changes do not unintentionally affect existing elements? How can I make my code easier to maintain as the project becomes more complex?

Also, I have not received grades for Activity 7: The Structure Audit or Assignment 7: Layout with CSS Grid yet. I wanted to check whether these assignments have been reviewed.

**Next week's goal:**
1.Reduce the spacing between the Chinese number and title in the headline of the final step in the brewing section.
2.Work on the mobile version of the website, which I have not had time to adjust yet.

**AI use:**
1.Used AI to understand and break down the assignment requirements and goals.
2.Asked questions about possible solutions when I had ideas for fixing certain problems but was unsure whether my approach would work.
3.Used AI to identify which files I needed to modify for different changes, such as HTML, CSS, or JavaScript.
4.Used AI to help debug issues and understand why certain elements or sections were not displaying correctly.
5.Used AI to refine my language

# ONELEAF

**Latest mockups:** https://www.figma.com/design/HDBo3dj1CC6MB2I2jE6dej/Yunqi-Zhao_LandingPage?node-id=17-126&t=O2XykBvhoLc2gP3s-1
**Live site:** https://cauti ous-happiness-vprqg9jj67v7hpgv5-5504.app.github.dev/

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
