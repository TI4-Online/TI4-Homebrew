// Factions could all be in one giant file.  Splitting them up makes it easier
// to fix specific factions and add scripted unit modifiers.

// injecting the basic nsidToTemplateId
world.TI4.homebrew.inject({
    nsidToTemplateId:
    {
        "card.faction_reference:homebrew.discordant_stars/0": "4F22FB07F07E6459B4FCE6D78FC1CBC7",
        "card.leader:homebrew.discordant_stars/0": "8936B49627881B8C765E675D2250AB61",
        "card.leader:homebrew.discordant_stars/1": "E34668B87CBFACBD71B7A0780F47C9CE",
        "card.leader:homebrew.discordant_stars/2": "DAA68E944054C0EC6FE8B79844699A5F",
        "card.planet:homebrew.discordant_stars/0": "F08EE692CC4397E98DA0FCC9D95250D8",
        "card.planet:homebrew.discordant_stars/1": "992B9253D95387168DE44CA28E840043",
        "card.planet:homebrew.discordant_stars/2": "F070B846D649615314D5BF1BB4A727F4",
        "card.planet:homebrew.discordant_stars/3": "B2F40CA93740A58609979F9F29F2B67B",
        "card.planet:homebrew.discordant_stars/4": "4247DBC0E9772B2245CAA106E42CBE15",
        "card.planet:homebrew.discordant_stars/5": "A4921F608196B66A9391B662C5D5A48D",
        "card.planet:homebrew.discordant_stars/6": "28D7B55501A75E6DAB7F225A72A3071E",
        "card.planet:homebrew.discordant_stars/7": "7D21F071427F9B4BB2BDC183FD4E2BD0",
        "card.promissory:homebrew.discordant_stars/0": "8A1A369D814751CB4173B18300170079",
        "card.promissory:homebrew.discordant_stars/1": "99D275DD4C39AE8D6108F6A8A47EE42A",
        "card.starting_technology:discordant_stars/0": "6A138A5647A921A06E22E79899D49BCD",
        "card.technology.blue:homebrew.discordant_stars/0": "94057D09CAC45C93C2E4D0202B253EC6",
        "card.technology.green:homebrew.discordant_stars/0": "AB665B9F7B0857DAF6194A51F6021322",
        "card.technology.red:homebrew.discordant_stars/0": "2712AC45E5CB3EEEE52260DB4A331251",
        "card.technology.yellow:homebrew.discordant_stars/0": "79AE03AF50430FBF22765C6CBC33A2B7",
        "card.technology.unit_upgrade:homebrew.discordant_stars/0": "ABE7C9BE9813C516BA8CBFC436278C51",
        "card.technology.more:homebrew.discordant_stars/0": "D422E59545732C3E22A6E58833B82273",
    },
  });

require("./factions/augers");
require("./factions/axis");
require("./factions/blex");
require("./factions/bentor");
require("./factions/celdauri");
require("./factions/cheiran");
require("./factions/cymiae");
require("./factions/dihmohn");
require("./factions/edyn");
require("./factions/florzen");
require("./factions/free_systems");
require("./factions/ghemina");
require("./factions/ghoti");
require("./factions/gledge");
require("./factions/lanefir");
require("./factions/khrask");
require("./factions/kjalengard");
require("./factions/kollecc");
require("./factions/kolume");
require("./factions/kortali");
require("./factions/lizho");
require("./factions/mirveda");
require("./factions/mortheus");
require("./factions/mykomentori");
require("./factions/nokar");
require("./factions/nivyn");
require("./factions/olradin");
require("./factions/rohdhna");
require("./factions/tnelis");
require("./factions/vaden");
require("./factions/vaylerian");
require("./factions/veldyr");
require("./factions/zealots");
require("./factions/zelian");
