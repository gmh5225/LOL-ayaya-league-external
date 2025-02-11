export const version = 12.16;

export const OFFSET = {

    oGameVersion: 0x58D820,	//8B 44 24 04 BA ? ? ? ? 2B D0

    oGameTime: 0x3111E68, //F3 0F 11 05 ? ? ? ? 8B 49

    oRenderer: 0x314B90C, //A1 ?? ?? ?? ?? 56 57 BF ?? ?? ?? ?? 8B
    oGameWindowWidth: 0x8,
    oGameWindowHeight: 0xc,
    oViewProjMatrix: 0x31479B8, //B9 ? ? ? ? E8 ? ? ? ? B9 ? ? ? ? E9 ? ? ? ? CC CC CC CC CC CC CC CC // 83 C4 04 5F 8B 8C 24 ? ? ? ?  -> vai sopra, sotto al loc, primo unk_offset

    oHeroManager: 0x187BF54, //8B 15 ? ? ? ? 0F 44 C1
    oMinionManager: 0x24C9788, //A3 ?? ?? ?? ?? E8 ?? ?? ?? ?? 83 C4 04 85 C0 74 32
    oTurretManager: 0x3110C94, //8B 35 ? ? ? ? 8B 76 18
    oMissileManager: 0x3118E34, //8B 0D ?? ?? ?? ?? E8 ?? ?? ?? ?? 8B 30 8B 36
    oInhibitorManager: 0x3118F30, //A1 ?? ?? ?? ?? 53 55 56 8B 70 04 8B 40 08

    oUnderMouse: 0x24c1a24, //! AddressToChange 89 0D ? ? ? ? C7 41 ? ? ? ? ? C7 41 ? ? ? ? ? C7 01 ? ? ? ?

    oShopsList: 0x24CA708,	//8B 0D ?? ?? ?? ?? E8 ?? ?? ?? ?? 84 C0 75 11 8B 4F 04

    oLocalPlayer: 0x3118DDC, //57 8B 3D ? ? ? ? 3B F7 75
    oObjectManager: 0x187BEC0, //89 ? ? ? ? ? 57 C7 06 ? ? ? ? 66 C7 46 04 ? ?
    oMinimapObject: 0x310F83C,	// 74 22 8B 0D ? ? ? ? 85 C9 74 18 80 79 38 00
    oMinimapObjectHud: 0x120,
    oMinimapHudPos: 0x44,
    oMinimapHudSize: 0x4C,

    oHud: 0x187BF80,	//8B 0D ? ? ? ? 6A 00 8B 49 34 E8 ? ? ? ? B0
    oZoom: 0x31104FC,
    oMaxZoom: 0x20,

    oObjIndex: 0x0008,
    oObjTeam: 0x0034,

    oObjNetId: 0xB4,


    oObjRecallState: 0xD90,
    oObjPlayerName: 0x54 + 30,
    oObjName: 0x2BA4 + 30,
    oObjLevel: 0x3384,
    oObjPosition: 0x01DC,
    oObjAttackRange: 0x1394,
    oObjVisible: 0x0274,
    oObjTargetable: 0xD04,
    oObjVulnerable: 0x3D4,

    oObjHealth: 0x0E74,
    oObjMaxHealth: 0x0E84,
    oObjMana: 0x029C,
    oObjMaxMana: 0x02AC,
    oObjAD: 0x134C,
    oObjBonusAD: 0x12C4,
    oObjMovSpeed: 0x138C,

    oObjAbilityHaste: 0x1690,
    oObjLethality: 0x11A8,
    oObjArmorPen: 0x126C + 0x4,
    oObjArmor: 0x1374,
    oObjBonusArmor: 0x1374,
    oObjMagicRes: 0x137C,
    oObjBonusMagicRes: 0x1380,
    oObjTransformation: 0x3040,
    oObjExpiry: 0x298,
    oObjCrit: 0x12C8,
    oObjCritMulti: 0x12B8,
    oObjAbilityPower: 0x1740,
    oObjAtkSpeedMulti: 0x1348,
    oObjItemList: 0x33E8,
    oObjExpierience: 0x337C,
    oObjMagicPen: 0x126C,
    oObjMagicPenMulti: 0x126C + 0x8,
    oObjAdditionalApMulti: 0x1248,
    oObjManaRegen: 0x11E0,
    oObjHealthRegen: 0x1388,



    oObjAiManager: 0x2C7C, //0F B6 83 ?? ?? ?? ?? 33 C9
    oAiManagerTargetPos: 0x10,
    oAiManagerStartPath: 0x1CC,
    oAiManagerEndPath: 0x1D8,
    oAiManagerIsMoving: 0x1C0,
    oAiManagerIsDashing: 0x214,
    oAiManagerCurrentSegment: 0x1C4,
    oAiManagerDashSpeed: 0x1F8,


    // --- MISSILES ---
    oMissileObjectEntry: 0x14,
    oMissileSpellInfo: 0x0260,
    oMissileSrcIdx: 0x2DC,
    oMissileDestIdx: 0x330,
    oMissileStartPos: 0x02DC,
    oMissileEndPos: 0x02E8,


    oSpellBook: 0x2330,

    oSpellBookActiveSpellEntry: 0x20,

    oActiveSpellEntryIsBasic: 0xC4,
    oActiveSpellEntryStartPos: 0x84,
    oActiveSpellEntryEndPos: 0x90,

    oBuffManager: 0x21A8, //8B 81 ?? ?? ?? ?? 81 C1 ?? ?? ?? ?? 8B ?? ?? FF E0
    oBuffArray: 0x10,
    oBuffArrayLength: 0x14,
    oBuffSize: 0x8,

    oBuffName: 0x4,
    oBuffStartTime: 0xC,
    oBuffEndTime: 0x10,
    oBuffCount: 0x24,
    oBuffCount2: 0x74,


    oSpellSlots: 0x27E8, // 8B 84 83 ? ? ? ? EB 06 8B 83 ? ? ? ? 85 C0 0F 84 ? ? ? ? 53 8B CF E8 ? ? ? ? 8B C8 8B 10 FF 52 18 8B F0
    oSpellReadyAt: 0x24,
    oSpellLevel: 0x1C,
    oSpellDamage: 0x94,
    oSpellManaCost: 0x52C,
    oSpellInfo: 0x120,
    oSpellName: 0x18,

    oSpellInfoSlot: 0x4,
    oSpellInfoData: 0x40,
    oSpellInfoStartTime: 0x8,
    oSpellInfoIndex: 0xC,
    oSpellInfoLevel: 0x58,
    oSpellInfoName: 0x104,

    oSpellInfoDataMissileName: 0x78,
    oSpellInfoDataName: 0x6C,
    oSpellInfoDataCooldownTime: 0x0288,

    oChat: 0x3118E90,// 8B 0D ? ? ? ? 83 78 44 00
    oChatIsOpen: 0x75C,


    oMapCount: 44,
    oMapRoot: 40,
    oMapNodeObject: 20,
    oMapNetId: 16,

}


// ADDRESS, oGameTime, "F3 0F 11 05 ? ? ? ? 8B 49", 4
// ADDRESS, oRenderer, "A1 ?? ?? ?? ?? 56 57 BF ?? ?? ?? ?? 8B", 1
// ADDRESS, oViewProjMatrix, "68 ?? ?? ?? ?? 51 8B 00", 1
// ADDRESS, oAttackableUnitList, "A1 ?? ?? ?? ?? 8B 50 04", 1
// ADDRESS, oHeroManager,  "8B 15 ? ? ? ? 0F 44 C1", 2
// ADDRESS, oMinionManager, "A3 ?? ?? ?? ?? E8 ?? ?? ?? ?? 83 C4 04 85 C0 74 32", 1
// ADDRESS, oTurretManager, "8B 35 ? ? ? ? 8B 76 18", 2
// ADDRESS, oInhibitorManager, "A1 ?? ?? ?? ?? 53 55 56 8B 70 04 8B 40 08", 1
// ADDRESS, oMissileManager, "8B 0D ?? ?? ?? ?? E8 ?? ?? ?? ?? 8B 30 8B 36", 2
// ADDRESS, oUnderMouseObject, "89 0D ? ? ? ? C7 41 ? ? ? ? ? C7 41 ? ? ? ? ? C7 01 ? ? ? ?", 2
// ADDRESS, oLocalPlayer, "57 8B 3D ? ? ? ? 3B F7 75", 3
// ADDRESS, oObjectManager, "89 ? ? ? ? ? 57 C7 06 ? ? ? ? 66 C7 46 04 ? ?", 2
// ADDRESS, oNetClient, "C7 05 ? ? ? ? ? ? ? ? 85 C9 74 06 8B 01 6A 01 FF 10 C3", 2
// ADDRESS, oChatInstance,  "8B 0D ? ? ? ? 83 78 44 00", 2
// OFFSET, oBuffManager, "8B 81 ?? ?? ?? ?? 81 C1 ?? ?? ?? ?? 8B ?? ?? FF E0", 2
// OFFSET, oSpellBook, "8B 84 83 ? ? ? ? EB 06 8B 83 ? ? ? ? 85 C0 0F 84 ? ? ? ? 53 8B CF E8 ? ? ? ? 8B C8 8B 10 FF 52 18 8B F0", 3
// OFFSET, oObjAiManager, "0F B6 83 ?? ?? ?? ?? 33 C9", 3
// Extras not used by this cheat:
// Code:
// ADDRESS, MinimapObject, "74 22 8B 0D ? ? ? ? 85 C9 74 18 80 79 38 00", 4
// ADDRESS, oShopsList, "8B 0D ?? ?? ?? ?? E8 ?? ?? ?? ?? 84 C0 75 11 8B 4F 04", 2
// ADDRESS, oGameInfo, "A1 ? ? ? ? 83 78 08 02 0F 94 C0", 1
// ADDRESS, oHudInstance, "8B 0D ? ? ? ? 6A 00 8B 49 34 E8 ? ? ? ? B0", 2
// This is not used, and points to 5 different addresses, don't know which one is the right one and don't have time to test:
// ADDRESS, BuildingList, "8B 15 ?? ?? ?? ?? 8B 7A 04 8B 42 08 8D 0C 87 3B F9 73", 2