# THINGS TO FIX IN THIS PROJECT

## Copy Paste

- Tourvisto

Additonal requirement/Guidelines

- Use all informatin from the uploaded theme/global.css
- since I only have info about the screen size 1440px but you shuld make things responsive for all screen sizes (fonts sizes are already responsive make other things respponsive as well like margins, papdding spacing and layout)
- Create components using React 19 approach because it uses a bit diffirent approach when we need to pass props(when required) (keep that in mind don't use React 17 syntax )

```tsx
// where the syntax
const Sidebar: React.FC<SidebarProps> = ({ role, onNavigate }) => {};
// is not valid for the components accepting props instead, we this syntax
const Sidebar = ({ role, onNavigate }: SidebarProps) => {};
```

## Things to Use/Build/Enable Later on

- Focus on the dark mode at the end
- Impliment the 404 and Forbidden page later (if not using redirect logic)
- Find a better way for storing types (in types folder)
- Find better way to organize API and features (like Gpt was giving an example)
- Improve the importss
- Enable the protectd routes functionality so that only
- Use the consistent naming conventions (for files)
- Build the utility classes to enhance resuseability
- Customize the ShadCn theme later on to mae things even more beautiful
- Since copy pasting the exact values we are not recieving the exact values to compare the result with design once again (First of all we will build with tailwind and pure jsx and after that we'll impliment Shadcn inshaAllah by matching each and every thing)
- We will build utility and component classes as well to enable the code reuseability
- We will compare our project with Adrian's project too
- Focus on the state (what happens on hover, foucs etc)

## Besides project thing

- Learn how to use Figma as a developer from ChatGpt (Your probably need to watch a video where someone converts the figma file into code e.g. kevein powel and bobz roll (or you might not want to do that))
- Learn TypeScript (before starting next project )
- Learn Shadcn before starting next project (This will be done greatly in the same project)

## Naming Conventions

- Check the routes names both front end and backend and rename them to meet the requirements
- Check the file and folder naming conventions

## Responsiveness

- Just like we have created responsive utilities for fonts
- Create utilites for margins and paddings
- Spacing
- Responsive layout

## Currently work items

- use diffirent padding based on role for outlet and navbar

## Things to fix/enhace

- Somewhere code classes are repeating so I might as well create the utility classes for them

### Overall/entire site

- Make it fully responsive
- Remove the var(--anyvar) from the entire project and replace them with actual content
- unintall unused node modules e.g. react-icons, shadcn unused packages, unused assets
- Remove useless comments
- Put the routing paths in constants (being used in App.tsx)
- How can I avoid using ! sign to override the utility sytles (its okay for Shadcn but I want to avoid this for tailwind utility classes)
- is it a good practice to overried shadn component in the source
- Figure out a way to display handpicks and the features trips as well
- Replace the user watch image with user avatar by making some logic
- Remove the duplicated pagination logic for the pagination (if doesn't make the system to complex)
- Make the pageHeader component in global components
- Replace all the text with the typography component
- Make resuseable components for your your new form elements like inputs and the selects
- impliment loaders, impliment modal popups for confirmations actions, impliment alerts or toastify
- Build a cascading drop down list for country state and city
- Modulize, DestinationCard, Destination, User

### Admin Area / Dashboard

- Max the % color dynamic based on the increment or decrement
- white creating a new trip check that the trip title is not max than 20 chars
- Modify both charts / apply the theme utility classes to theme
- Impliment logic while working with charts
  - impporve tooltips
  - In trip trends charts you might have noticed the higligted bars what is the reason behind them
- Box shadown is not working any where and fix this eveywhere
- Fix the chart responsiveness issue
- Make a component for trips as its same for every one

### Trip Detail page

- Figure out what should you dispaly as for the popular trips on trip detail ppage

### AddTrip

- Extract components to make things dry

### Destination, Destinations page

### Types

- Figure out whether you are storing your types logically well structured

Start here

- Add rest of the pages (including the optional ones)
- Make things reuseable
- Clean everything

  - Dry
  - Missing Icons
  - General Utilities
  - Proper folder structure

- Make a backend plan
- Start building backend from the backed

### Hey please help me to fix my issues in my project

User Profile page
User Profile detail page
Not found page design according to tailwind

User Profile card

- impliment the wishlist and the share functionaltity
