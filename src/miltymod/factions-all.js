// Factions could all be in one giant file.  Splitting them up makes it easier
// to fix specific factions and add scripted unit modifiers.

// injecting the basic nsidToTemplateId
world.TI4.homebrew.inject({
    nsidToTemplateId:
    {
        "card.faction_reference:homebrew.miltymod/0": "2F70A9B54BF0527F382F70812900F66E",
        "card.action:homebrew.miltymod/0": "878731F242B5CA6FD0D89CB86CCFA7CE",
        "card.action:homebrew.miltymod/1": "35BA7B80493D1C3BBB83DDA8DED896C2",
        "card.action:homebrew.miltymod/2": "76D23FE746A91AC8227923BC1E76BC12",
        "card.agenda:homebrew.miltymod/0": "9892C72A46F454B0DC93EEB78A3D32CF",
        "card.agenda:homebrew.miltymod/1": "3A5A08EE4A4B5F3ABE29B99B8079F5E2",
        "card.agenda:homebrew.miltymod/2": "382A70DD42E49F27387509A1D6F7376F",
        "card.objective.public_1:homebrew.miltymod/0": "46861A47466086241C96319270BDB366",
        "card.objective.public_2:homebrew.miltymod/0": "DC0AF7254730A7181B110894E4E10BF7",
        "card.objective.secret:homebrew.miltymod/0": "C4DCE39745D64EAF449970AFA2AE7DFE",
        "card.promissory:homebrew.miltymod/0": "1CAAFC56490272F09423D99CDEDE5445",
        "card.promissory:homebrew.miltymod/1": "9387CDBF46A30C38D60B6480B64489F4",
        "card.technology.blue:homebrew.miltymod/0": "9E325A5040A6BC6D4EA7F6B06906444D",
        "card.technology.green:homebrew.miltymod/0": "BCA6BD1F423CD6AA487A57922D16377D",
        "card.technology.green:homebrew.miltymod/1": "E476715A4921E26316398CBE11AE42D7",
        "card.technology.red:homebrew.miltymod/0": "7731E0E44EE0BABF78670097690E4C97",
        "card.technology.red:homebrew.miltymod/1": "4C9B66F64AFB6AFDDDE93FB3D2015685",
        "card.technology.yellow:homebrew.miltymod/0": "BE15F7214B9E7B6B73AA45AEFB564C2D",
        "card.technology.yellow:homebrew.miltymod/1": "E49655E84CE484775F2EF8941F41DE0C",
        "card.technology.unit_upgrade:homebrew.miltymod/0": "C14887A644F2DC65576E269839EE6320",
        "card.technology.unit_upgrade:homebrew.miltymod/1": "62758D0C4A97F23757AC6E810CF2A200",
        "card.technology.unit_upgrade:homebrew.miltymod/2": "B38E6FF44BD9A7FF26A7A4B2ECBDA50D"
    },
  });

console.log("MILTYMOD ADDING FACTIONS");

require("./factions/arborec");
