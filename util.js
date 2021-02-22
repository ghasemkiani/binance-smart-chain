//	@ghasemkiani/binance-smart-chain/util

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {Base} = require("@ghasemkiani/commonbase/base");
const {Util: EthUtil} = require("@ghasemkiani/ethereum/util");

class Util extends EthUtil {
}
cutil.extend(Util.prototype, {
	tok: "BNB",
	DEFAULT_URL: "https://bsc-dataseed1.binance.org:443",
	NODE_KEY: "BSC_NODE",
	contracts: {
		"WBNB": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
		"USDT": "0x55d398326f99059fF775485246999027B3197955",
		"BUSD": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
		"BTCB": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
		"ETH": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
		"EOS": "0x56b6fb708fc5732dec1afc8d8556423a2edccbd6",
		"BCH": "0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf",
		"LTC": "0x4338665CBB7B2485A8855A139b75D5e34AB0DB94",
		"CAKE": "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
		"DRUGS": "0xfD26889cd6454D8751562f1c0FcF88b18B46F7B7",
		"SYRUP": "0x009cf7bc57584b7998236eff51b98a168dcea9b0",
		"SWAP": "0x83034714666B0EB2209Aafc1B1CBB2AB9c6100Db",
		"SWAP": "0x095418A82BC2439703b69fbE1210824F2247D77c",
		"ANY": "0xF68C9Df95a18B2A5a5fa1124d79EEEffBaD0B6Fa",
		"BLP": "0xc2Eed0F5a0dc28cfa895084bC0a9B8B8279aE492",
		"DOT": "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
		"LINK": "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD",
		"BURGER": "0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f",
		"BAKE": "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
		"CREAM": "0xd4CB328A82bDf5f03eB737f37Fa6B370aef3e888",
		"FOR": "0x658A109C5900BC6d2357c87549B651670E5b0539",
		"TUNA": "0x40929FB2008c830731A3d972950bC13f70161c75",
		"SPARTA": "0xE4Ae305ebE1AbE663f261Bc00534067C80ad677C",
		"ANKR": "0xf307910A4c7bbc79691fD374889b36d8531B08e3",
		"XVS": "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63",
		"FREE": "0x12e34cdf6a031a10fe241864c32fb03a4fdad739",
		"BEER": "0xbB8DB5e17BBe9c90Da8E3445E335b82d7cc53575",
		"INNBC": "0xdF1F0026374d4BCc490BE5E316963Cf6Df2FfF19",
		"STORM": "0xc0E7Ba97E9C802656C2B3eA8f27FAD6E60f0a795",
		"ALPHA": "0xa1faa113cbE53436Df28FF0aEe54275c13B40975",
		"XRP": "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE",
		"ATOM": "0x0Eb3a705fc54725037CC9e008bDede697f62F335",
		"YFI": "0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e",
		"UNI": "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
		"FIL": "0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153",
		"INJ": "0xa2b726b1145a4773f68593cf171187d8ebe4d495",
		"USDC": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
		"SXP": "0x47bead2563dcbf3bf2c9407fea4dc236faba485a",
		"CTK": "0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929",
		"YFII": "0x7F70642d88cf1C4a3a7abb072B53B929b653edA5",
		"DAI": "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
		"XTZ": "0x16939ef78684453bfDFb47825F8a5F714f12623a",
		"METH": "0xfcb5DF42e06A39E233dc707bb3a80311eFD11576",
		"JNTR/b": "0x78e1936f065Fd4082387622878C7d11c9f05ECF4",
		"BAMBOO": "0x6a1CD7377C7b2FD42151C93206AF5089b4658372",
		"FROG": "0xC808592e5b4585F982bc728d63b227634bc007a4",
		"STAX": "0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4",
		"KP3RB": "0x5EA29eEe799aA7cC379FdE5cf370BC24f2Ea7c81",
		"COMP": "0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8",
		"PSG": "0xBc5609612b7C44BEf426De600B5fd1379DB2EcF1",
		"PIZZA": "0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB",
		
		"PEACH": "0xaCd6b5f76Db153FB45EAE6D5be5BDbd45d1b2A8C",
		"MILK": "0x8E9f5173e16Ff93F81579d73A7f9723324d6B6aF",
		"crXRP": "0xAa46e2c21B7763a73DB48e9b318899253E66e20C",
		"PROM": "0xaF53d56ff99f1322515E54FdDE93FF8b3b7DAFd5",
		"BFI": "0xAFa4f3D72f0803B50C99663B3E90806d9D290770",
		"BKIT": "0x17d68Ba1cA7E903cdb17A4a4EA5BDC475a0A1466",
		"RBASE": "0xbFE7e0e61c4AC4dF7C92349DEF0C1148d3f9e360",
		// "CAKE": "0x7d813C828b0d1083Bb08b38841C45304A920060b",
		"JULb": "0x32dFFc3fE8E3EF3571bF8a72c0d0015C5373f41D",
		"BNX": "0xF7682a5d3e587652ab770e8c98eB2Fd786022b7B",
		"THUGS": "0xE10e9822A5de22F8761919310DDA35CD997d63c0",
		"DEGEN": "0xb37B51C5C4C934468B49b55FeC15e76c9b538fF3",
		"TWT": "0x4B0F1812e5Df2A09796481Ff14017e6005508003",
		// "USDT": "0x097E428494F5373F22679E68D1a1e50d0A507966",
		// "BTCB": "0x9621579a532C9052B1F3CE8e3022716120Ba4187",
		"KIWI": "0x28db020a1c976167cDe0d2B78221ED4659d9ec0a",
		"ADA": "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47",
		"Saturn": "0xDB0DEc74E23394D1883E2Ee859dB98D6fE357695",
		"LFI": "0x2282d18c5232Ac20A41c0a0709367BecaDe2F751",
		"STR": "0x17028c42a8BB4011f28e975c520A72A0e939Eee1",
		"PHO": "0xb9784C1633ef3b839563B988c323798634714368",
		"DEGO": "0x3FdA9383A84C05eC8f7630Fe10AdF1fAC13241CC",
		"NN": "0x897fE07d613037c206429628611A2665E18C657d",
		"MARS": "0x7e440598f8f63FCCd9B12A606263A02A06cFb16a",
		"YFMR": "0x9B3Ed616c4FF49023A89f4dA8B85CcE22C0f8Cb3",
		"anyLINK": "0x3af577F9D8c86ae8DBCBF51FE9836c9DF825759d",
		"anyDAI": "0x1dC56F2705Ff2983f31fb5964CC3E19749A7CBA7",
		"anyYFI": "0x9883Ae441105f815b472517389B979F031B5c87e",
		"anyOMG": "0xe6358c1D7A91915abBa46D9855Bd6418898fc091",
		"anyCOMP": "0x2EDe13880e11B19B7D6113a86Ac7aC84aC651042",
		"anyETH": "0x6F817a0cE8F7640Add3bC0c1C2298635043c2423",
		"anyUSDT": "0xB46d67fB63770052A07d5b7C14Ed858A8c90f825",
		"anyFSN": "0x4f6318e97011fE21fDfce3fFCf868d44e5f6994A",
		"BBTC": "0x43E428c2420202c86213AeF77cA1F7f144E0AAE7",
		"BZAR": "0x3791cC676C34F82e9438Ed9752eC5dBC983a0BBc",
		// "LFI": "0x7661C7714A2AE18Bd224d2bFa7619d6aB7b8f640",
		// "DEGEN": "0xc410b2C84ff954b5eE3dd1b0a0d3B4A8436E6E55",
		"JNTR": "0x5f2Caa99Fc378248Ac02CbbAaC27e3Fa155Ed2C4",
		"BSC": "0x17bc015607Fdf93e7C949e9Ca22f96907cFBeF88",
		
		"XMPT": "0x20118F8e38494EF7aEAd4B1095Fb0f1F309A4A70",
		"KIT1": "0x595b9C47F795CF996D10baAfADA94E51375e5e11",
		"BFMOON": "0x0eb13e07161F846F1B1c3443C3Be32297cC10703",
		"anyUNI": "0x99C5A2Fcc97b59FE6D0B56e21e72B002F644123F",
		"RUG_OCT01": "0x7fC1236aBfb10d5325eFc513128023EB83306642",
		"IOTX": "0x9678E42ceBEb63F23197D726B29b1CB20d0064E5",
		"anyBTC": "0x54261774905f3e6E9718f2ABb10ed6555cae308a",
		"YFN": "0x185dF0EFfA412C4a4Ac0ea6831aAdEAC614613cC",
		"FCBTA": "0x0bED697011c89E6fB2E7156FF7e606B080bA1E3b",
		"CLT": "0xE35Ac677fAa9f0A712EFa5b7d3053246F02669F0",
		
		"ht": "0xD5ee7aB08487031127d9dABa64AD7eaF8945a1C6",
		"Rocket": "0xcc30F06AD0544B070083c46032E9aFbD8386D5d1",
		"UUU": "0x027Bb276B75FC39E4f81478f4Ac3ee689BeF7202",
		
		"mTSLA": "0xF215A127A196e3988C09d052e16BcFD365Cd7AA3",
		"mAMZN": "0x3947B992DC0147D2D89dF0392213781b04B25075",
		"mNFLX": "0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc",
		"mGOOGL": "0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f",
		"UST": "0x23396cF899Ca06c4472205fC903bDB4de249D6fC",	},
});

const util = new Util();

module.exports = {Util, util};
