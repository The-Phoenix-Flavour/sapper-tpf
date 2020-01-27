import { writable } from 'svelte/store';

export const categories = [
  "quests",
  "visual"
]

export const instructionList = [
  "download",
  "fomod"
]

export const modList = [
  {
    id: "ebqo",
    name: "Even Better Quest Objectives SE",
    url: "https://www.nexusmods.com/skyrimspecialedition/mods/159",
    category: "quests",
    download: "Main Files – Even Better Quest Objectives SE v1.8.3a",
    fomod: [
      "Optional Files: do not select this, it’s covered by MQM",
      "Mod Patches: Alternate Start – Live Another Life by Arthmoor",
      "Mod Patches: Book Covers Skyrim unselect this patch (covered by TPF CR patch)",
      "Mod Patches: Cutting Room Floor by Arthmoor",
      "Mod Patches: The Paarthurnax Dilemma by Arthmoor"
    ]
  },
  {
    id: "noble",
    name: "Noble Skyrim Mod HD-2K",
    url: "https://www.nexusmods.com/skyrimspecialedition/mods/21423",
    category: "visual",
    download: [
      "Main Files – A. Noble Skyrim – FULL PACK_2K",
      "Update Files – NSM – SMIM Patch"
    ]
  }
]