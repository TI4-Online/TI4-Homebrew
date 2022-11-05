# Homebrew

This is a collection of homebrew content for Twilight Imperium 4th Edition.

Every player should subscribe to this TI4 Homebrew mod.  If a player is not, they will be prompted to download it when first used.

How to add a homebrew object:

1. Start a game of Twilight Imperium 4th Edition.
2. Right click the table, open "Object Library".
3. Click "Add Packages" at the bottom.
4. Select "TI4 Homebrew".
5. Click "Add selected package" at the bottom left.
6. Click "Return to library" at the bottom right.

You now have "TI4 Homebrew" as a source, poke around to find goodies.

# Setup

* run ``yarn install``
* run ``yarn setup``
* run ``yarn dev`` or ``yarn watch``

# Bundling

if you run ``yarn bundle`` it will package build your scripts from the ``src/`` folder, build the ``node_modules`` folder that TTPG will need, and take the contents of your ``assets/`` and throw it into a Zip file within ``bundles/``.

you can also run ``yarn build`` to get a Production build of your mod into TTPG for adding to mod.io

# Cleaning

if you run ``yarn clean`` it will remove the ``dev/`` folder, as well as the project folder within your ttpg system and remove and temporary files. You can then run ``yarn setup`` again to get everything re-allocated.
