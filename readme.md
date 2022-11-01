# What is this?

A way for you to bootstrap an Ecma2020 project for Tabletop Playground within VSCode, as well as let you use ES6 and git more readily

# Requirements

* Node v16 https://nodejs.org/en/download/
* Yarn https://yarnpkg.com/
* Recommended: VSCode https://code.visualstudio.com/

# Starting a new project

* run ``yarn install``
* edit ``config/project.json`` to reflect the values you want. "slug" is just the directory name, and there are two GUIDs - one for development, one for the production bundle (this way you can have them set along side each other).
* run ``yarn setup``
* run ``yarn dev`` (to build the scripts TTPG is looking at) or ``yarn watch`` (live updates on the saving of scripts)
* add and edit your scripts within the ``src/`` directory.

Any dependency you add with ``yarn add {module}`` will be added to your bundles ``node_modules`` directory when you run ``yarn dev``

Dependencies added with ``yarn add -D {module}`` (devDependenices) will ***not*** get bundled or built.

# Collaborating with an existing project.

Assuming someone else has cloned this template, and has set up the project as needed, it's pretty much as above, but you don't need to edi the config/project.json

* run ``yarn install``
* run ``yarn setup``
* run ``yarn dev`` or ``yarn watch``

# Transpiling

by default, transpiling is off. If you would like to have babel transpile your code so that you can use Null Coalescence, Optional Chaining, Import/Export, private class properties, etc. set the "transpile" flag to true within ``config/project.json``

# Bundling

if you run ``yarn bundle`` it will package build your scripts from the ``src/`` folder, build the ``node_modules`` folder that TTPG will need, and take the contents of your ``assets/`` and throw it into a Zip file within ``bundles/``.

you can also run ``yarn build`` to get a Production build of your mod into TTPG for adding to mod.io

# Cleaning

if you run ``yarn clean`` it will remove the ``dev/`` folder, as well as the project folder within your ttpg system and remove and temporary files. You can then run ``yarn setup`` again to get everything re-allocated.

# I have a problem/idea

I'm on the TTPG discord (@ThatRobHuman), and you can hit me up here. I *absolutely* welcome pull requests.
