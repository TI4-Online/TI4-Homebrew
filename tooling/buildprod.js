const fs = require("fs-extra");
const chalk = require("colorette");
const spawn = require("cross-spawn");

console.log(chalk.yellow("Good Morning, Captain"));

const setupWorkspace = (config) => {
  console.log("setting up production build...");

  return fs.readJson("./config/local.json").then((localConfig) => {
    const manifest = {
      Name: `${config.name}`,
      Version: config.version,
      GUID: config.guid.prd,
      ModID: config.modId.prd,
    };

    console.log("building 'prd' folder");
    return Promise.all([
      fs.remove(`${localConfig.ttpg_folder}/${config.slug}`),
      fs.remove(`./prd/${config.slug}`),
    ]).then(() => {
      return fs
        .ensureDir(`./prd/${config.slug}`)
        .then(() => {
          return fs
            .ensureFile(`./prd/${config.slug}/Manifest.json`)
            .then(() => {
              fs.writeJson(`./prd/${config.slug}/Manifest.json`, manifest).then(
                () => {
                  console.log("'prd' folder built");
                }
              );
            });
        })
        .then(() => {
          console.log("copying assets to prd folder");
          const copy = [
            "Fonts",
            "Models",
            "Sounds",
            "States",
            "Templates",
            "Thumbnails",
            "Textures",
          ];
          return Promise.all(
            copy.map((dirName) => {
              console.log(
                `./assets/${dirName}`,
                "->",
                `./prd/${config.slug}/${dirName}`
              );
              return fs.copy(
                `./assets/${dirName}`,
                `./prd/${config.slug}/${dirName}`
              );
            })
          );
        })
        .then(() => {
          return fs.ensureDir(`./prd/${config.slug}/Scripts/node_modules`);
        })
        .then(() => {
          console.log("Copying Thumbnail");
          return Promise.all([
            fs.pathExists(`./config/Thumbnail.png`),
            fs.pathExists(`./config/Thumbnail.jpg`),
          ]).then(([png, jpg]) => {
            const ext = png ? "png" : jpg ? "jpg" : false;
            if (ext) {
              return fs.copy(
                `./config/Thumbnail.${ext}`,
                `./prd/${config.slug}/Thumbnail.${ext}`
              );
            } else {
              console.log("No thumbnail found. skipping");
              return Promise.resolve();
            }
          });
        })
        .then(() => {
          console.log("symlinking to Tabletop Playground");
          return fs
            .createSymlink(
              `./prd/${config.slug}`,
              `${localConfig.ttpg_folder}/${config.slug}`,
              "junction"
            )
            .then(() => {
              console.log(
                "Tabletop Playground is now aware of this production bundle. Huzzah."
              );
            });
        });
    });
  });
};

const spawnDependencyDeploy = (config) => {
  return new Promise((resolve, reject) => {
    const child = spawn.spawn(
      "yarn",
      [
        "install",
        "--modules-folder",
        `prd/${config.slug}/Scripts/node_modules`,
        "--prod",
      ],
      { stdio: "pipe" }
    );
    child.on("close", (code) => (code > 0 ? reject(code) : resolve()));
  });
};

const spawnBuilder = (config) => {
  if (config.transpile) {
    return new Promise((resolve, reject) => {
      const child = spawn.spawn(
        "babel",
        ["src", "-d", `prd/${config.slug}/Scripts`],
        { stdio: "pipe" }
      );
      child.on("close", (code) => (code > 0 ? reject(code) : resolve()));
    });
  } else {
    return fs.copy("./src", `prd/${config.slug}/Scripts`);
  }
};

fs.readJson("./config/project.json")
  .then((config) => {
    return setupWorkspace(config).then(() => {
      return spawnBuilder(config).then(() => {
        return spawnDependencyDeploy(config).then(() => {
          console.log(chalk.white(`Done building: ${config.name}`));
        });
      });
    });
  })
  .then(() => {
    console.log(chalk.green("Good Hunting"));
  })
  .catch((e) => {
    console.log(chalk.red("Something went wrong"));
    console.error(e);
  });
