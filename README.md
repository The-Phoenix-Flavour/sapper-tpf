# Demo

View a [live demo](https://nervous-leavitt-3faf57.netlify.com/mod%20installation/getting%20started/) for the new website

# Docs

Note that in most cases further documentation and details are provided in the individual files

## Settings

The sites base settings are stored in `settings.js`
Here you can define author, title, icon, social links (icons),
and (for dev reasons) the content settings

## File Structure

All Markdown should go into the `content/pages` directory

Folders create subroutes and Markdown files create pages. So if you want to nest a Markdown page
just put it into a folder. All navigation is also dynamically derived from these pages.

## Styling

Global styles are currently accessible under `src/styles` written in SCSS, an extension of CSS
for simplicity.

`global.scss` is a resetter and shouldn't be modified

`common.scss` similarly has classes designed to reset and shouldn't be modified

`theme.scss` contains CSS variables that extend out access to colors, etc. and is meant
to be modified to the authors liking.

`markdown.scss` this file contains styles applied to everything in Markdown files it
can be edited or expanded. **Make sure to nest everything inside the `.content` class**

## Data

Mod Data is stored in `content/mod_lists.js`

Mods are listed in order first by category or step, then by each mod in a category.
Each mod is comprised of it's name, url link, and a set of instructions, where
a mod can have one or more download and FOMOD instructions.

### Credits

All content including the mod guide is possible thanks to the work of the founder [Phoenix](https://github.com/foreverphoenix),
her team, and/or it's generous community!

Based on [Sapper Dynamic Template](https://github.com/marcebdev/sapper-dynamic-template) which was developed
for this project, and extended by MarcebDev and it's [contributors](https://github.com/The-Phoenix-Flavour/sapper-tpf/graphs/contributors).
