"use strict";

// 首页输入框搜索
let search = {
	"data": [
		{
			"n": 20119,
			"k": "碧桂园 二手房",
			"t": "",
			"h": [
				{
					"v": "碧桂园"
				}
			]
		},
		{
			"n": 2311,
			"k": "碧桂园翡翠山",
			"t": "",
			"h": [
				{
					"v": "碧桂园"
				}
			]
		},
		{
			"n": 588,
			"k": "碧桂园智慧家",
			"t": "",
			"h": [
				{
					"v": "碧桂园"
				}
			]
		},
		{
			"n": 386,
			"k": "碧桂园天汇",
			"t": "",
			"h": [
				{
					"v": "碧桂园"
				}
			]
		},
		{
			"n": 20119,
			"k": "碧桂园 二手房",
			"t": "",
			"h": [
				{
					"v": "碧桂园"
				}
			]
		},
		{
			"n": 2311,
			"k": "碧桂园翡翠山",
			"t": "",
			"h": [
				{
					"v": "碧桂园"
				}
			]
		},
		{
			"n": 588,
			"k": "碧桂园智慧家",
			"t": "",
			"h": [
				{
					"v": "碧桂园"
				}
			]
		},
		{
			"n": 386,
			"k": "碧桂园天汇",
			"t": "",
			"h": [
				{
					"v": "碧桂园"
				}
			]
		}
	]
};

// 列表页数据
let houseList = [
	{
		"shangquanName": "麻涌",
		"xiaoquName": "信鸿熙岸",
		"phone": "13712240419",
		"picUrl": "http://pic2.58cdn.com.cn/anjuke_58/ad99d450f8745155bba7d9d8322e4bf1",
		"url": "http://jump.jinpai.58.com/service?target=INKicKZPP1W52DKyS1coknVk6MOpffA1VNgjG3_OoGCBBzTsBvpibHSPwy7LRseGb9CCaYrjnI9fy1qdEfFuI8vmieG5mHemrlPwhLnQVY-zfSo9iRDxSYgqh_LVyJTpZU8OpZCiMVnm9syuxhrxHJCsJ-K_g1Ff1A0HYh-VNGiOPAey2Ia37-tkosHdmOasfLU3YP04BNmUXU6cdghPzQ&aoid=1525525954732466115&putid=4803746&apptype=0&from=jglist-right",
		"clickCode": "from=fc_pc_jg_ersf_&model=jglist-right&id=33984258517948-37855926739991-1525525954732466115-480374",
		"id": 33984258517948,
		"area": "88",
		"price": "132",
		"areaName": "东莞周边",
		"userId": 37855926739991,
		"houseType": "3室",
		"userName": "谢小叶",
		"cateId": 12
	},
	{
		"shangquanName": "中堂",
		"xiaoquName": "富盈公馆",
		"phone": "18588220721",
		"picUrl": "http://pic5.58cdn.com.cn/anjuke_58/4d92a1120ec54970428ccf7e40e2e6ad",
		"url": "http://jump.jinpai.58.com/service?target=INKicKZPP1W52DKyS1coknVk6MOpffA1-TWWKJJDKNiB5ef-TLX4R3SPwy7LRseGk-v4vRqh-irEkNYixvuCFXwmowuR79WprlPwhLnQVY96FuY5f9SEcIgqh_LVyJTpZU8OpZCiMVnm9syuxhrxHJCsJ-K_g1FfH86B8I-YbrcMv8Pe8vg_6-tkosHdmOasfLU3YP04BNmQ4j_65JDjFg&aoid=1525307625963370371&putid=4756510&apptype=0&from=jglist-right",
		"clickCode": "from=fc_pc_jg_ersf_&model=jglist-right&id=33953895693387-53999451624985-1525307625963370371-475651",
		"id": 33953895693387,
		"area": "115.0",
		"price": "150",
		"areaName": "东莞周边",
		"userId": 53999451624985,
		"houseType": "3室",
		"userName": "童林兵",
		"cateId": 12
	},
	{
		"shangquanName": "新镇区",
		"xiaoquName": "卓越蔚蓝岸(绿圆峰花园)",
		"phone": "15217087272",
		"picUrl": "http://pic6.58cdn.com.cn/anjuke_58/69b00e2e2784bc0f96f62a730215b6d0",
		"url": "http://jump.jinpai.58.com/service?target=INKicKZPP1W52DKyS1coknVk6MOpffA1KB7uokxfu02CG5uZx_wEA3SPwy7LRseG_jLCCWKv21qnUNAe1VXUETSsnm4fCTCkrlPwhLnQVY-Pc_7zDMbDRIgqh_LVyJTpZU8OpZCiMVnm9syuxhrxHJCsJ-K_g1FfOuCzwipAC5PqgWPEcoEd4utkosHdmOasfLU3YP04BNnU99QXFuh2BQ&aoid=1525398183511170500&putid=4771838&apptype=0&from=jglist-right",
		"clickCode": "from=fc_pc_jg_ersf_&model=jglist-right&id=33959965695158-55245029217293-1525398183511170500-477183",
		"id": 33959965695158,
		"area": "25.0",
		"price": "36",
		"areaName": "塘厦",
		"userId": 55245029217293,
		"houseType": "1室",
		"userName": "谭建林",
		"cateId": 12
	},
	{
		"shangquanName": "东城广场",
		"xiaoquName": "御景花园",
		"phone": "15889498084",
		"picUrl": "http://pic8.58cdn.com.cn/anjuke_58/754bb2e146c27f82f385847492b878fd",
		"url": "http://jump.jinpai.58.com/service?target=INKicKZPP1W52DKyS1coknVk6MOpffA145GxFEY-Qq4jDPFwXUySenSPwy7LRseGPzqLTgrdc41IvZLfnRvYaodmZd7gWOaGrlPwhLnQVY_O083gPF0W_ogqh_LVyJTpZU8OpZCiMVnm9syuxhrxHJCsJ-K_g1FfmZjyd8ku4ghD9YSPNdznkutkosHdmOasfLU3YP04BNmxkqbnvsVVkg&aoid=1524647827562213578&putid=4642881&apptype=0&from=jglist-right",
		"clickCode": "from=fc_pc_jg_ersf_&model=jglist-right&id=33874763949634-49492865149199-1524647827562213578-464288",
		"id": 33874763949634,
		"area": "75",
		"price": "130",
		"areaName": "樟木头",
		"userId": 49492865149199,
		"houseType": "2室",
		"userName": "冯远斌",
		"cateId": 12
	},
	{
		"shangquanName": "",
		"xiaoquName": "天麟天瑞花园",
		"phone": "18802091302",
		"picUrl": "http://pic7.58cdn.com.cn/anjuke_58/b4ca851efbce8c0ae56b6dc45a771ece",
		"url": "http://jump.jinpai.58.com/service?target=INKicKZPP1W52DKyS1coknVk6MOpffA1QTu0JBtU9k2DYznnSqrleXSPwy7LRseGalXlS-R-XckyenQZceKEb8vmieG5mHemyI96VpVUYdBilWIjSJZwuuMxytthrUmoxLKMpEDoSdiJ25zcCtSGzblCNH0OuUuK-gki10viIACEB1Mu69rUt4wEkCPByJzarc-_liaBAulzicmOP6ktKw&aoid=1525333111148193329&putid=4764574&apptype=0&from=jglist-right",
		"clickCode": "from=fc_pc_jg_ersf_&model=jglist-right&id=33893600071224-47636789919501-1525333111148193329-476457",
		"id": 33893600071224,
		"area": "94",
		"price": "209",
		"areaName": "大朗",
		"userId": 47636789919501,
		"houseType": "3室",
		"userName": "姚鹏",
		"cateId": 12
	},
	{
		"shangquanName": "罗沙",
		"xiaoquName": "卓越中寰",
		"phone": "15816834588",
		"picUrl": "http://pic7.58cdn.com.cn/anjuke_58/efa61d1a7005cd84bedf99f698de6452",
		"url": "http://jump.jinpai.58.com/service?target=INKicKZPP1W52DKyS1coknVk6MOpffA1wR3CglTPT_HjrXzfUWBEHnSPwy7LRseGts205ICxZspBUeSYVYY2ddyPvofCsUAsrlPwhLnQVY8Yc7Etip1T-Igqh_LVyJTpZU8OpZCiMVnm9syuxhrxHJCsJ-K_g1FfKcFkfgF5FAM5r_Vm8U4Sz-tkosHdmOasfLU3YP04BNlsZjRJUZu17A&aoid=1525509083919126189&putid=4799268&apptype=0&from=jglist-right",
		"clickCode": "from=fc_pc_jg_ersf_&model=jglist-right&id=33985100019143-49664380045072-1525509083919126189-479926",
		"id": 33985100019143,
		"area": "35.0",
		"price": "65",
		"areaName": "莞城",
		"userId": 49664380045072,
		"houseType": "2室",
		"userName": "黄泽彪",
		"cateId": 12
	},
	{
		"shangquanName": "",
		"xiaoquName": "凯东新城",
		"phone": "18002655853",
		"picUrl": "http://pic6.58cdn.com.cn/anjuke_58/8bc3962b8dbf18a7e3a354dfcba22192",
		"url": "http://jump.jinpai.58.com/service?target=INKicKZPP1W52DKyS1coknVk6MOpffA1ItzEkCM0X2DnVFEet4Y2HnSPwy7LRseG0uiSXZAwENvxgyHLnV3CrK_JqVw48Oln7uXVAF2ETcv5BySc5SVsWOMxytthrUmoxLKMpEDoSdiJ25zcCtSGzblCNH0OuUuKS7klCd4-gqKCvqseqBtJgYwEkCPByJzarc-_liaBAuklM6z7W1ZkhA&aoid=1525480528130900481&putid=4787440&apptype=0&from=jglist-right",
		"clickCode": "from=fc_pc_jg_ersf_&model=jglist-right&id=33949031127211-54761500014094-1525480528130900481-478744",
		"id": 33949031127211,
		"area": "98",
		"price": "140",
		"areaName": "大岭山",
		"userId": 54761500014094,
		"houseType": "3室",
		"userName": "禹晴晴",
		"cateId": 12
	},
	{
		"shangquanName": "清溪",
		"xiaoquName": "清溪碧桂园天誉",
		"phone": "15899637637",
		"picUrl": "http://pic3.58cdn.com.cn/anjuke_58/a921721e03a4ef523e88169f3bb37559",
		"url": "http://jump.jinpai.58.com/service?target=INKicKZPP1W52DKyS1coknVk6MOpffA1_KmpGiJlVbm7PzxylY98_HSPwy7LRseGc4mU4qcaKkUdzZW--dD91a_JqVw48OlnhQld2j8GWtlSPewLgfev7-MxytthrUmoxLKMpEDoSdiJ25zcCtSGzblCNH0OuUuK98fHAJbRvXBL22B9Rvr-dIwEkCPByJzaofdKSmat8S1JpI5HuuObTg&aoid=1525428930044626542&putid=4783856&apptype=0&from=jglist-right",
		"clickCode": "from=fc_pc_jg_ersf_&model=jglist-right&id=33948828152889-54712034729494-1525428930044626542-478385",
		"id": 33948828152889,
		"area": "125",
		"price": "195",
		"areaName": "东莞周边",
		"userId": 54712034729494,
		"houseType": "4室",
		"userName": "张文威",
		"cateId": 12
	},
	{
		"shangquanName": "",
		"xiaoquName": "金地格林上院",
		"phone": "13709640224",
		"picUrl": "http://pic5.58cdn.com.cn/anjuke_58/ecb3f07c18452f636eb039f06cf1f9ee",
		"url": "http://jump.jinpai.58.com/service?target=INKicKZPP1W52DKyS1coknVk6MOpffA12jKCUHd6HG41tIYrbmlITXSPwy7LRseGNXqLHHRFywWSYUakjcNbDtyPvofCsUAs7uXVAF2ETcv5BySc5SVsWOMxytthrUmoxLKMpEDoSdiJ25zcCtSGzblCNH0OuUuKoZzA4itmqGL4BtaApcESkIwEkCPByJzarc-_liaBAuklM6z7W1ZkhA&aoid=1525352022795148987&putid=4768687&apptype=0&from=jglist-right",
		"clickCode": "from=fc_pc_jg_ersf_&model=jglist-right&id=33962202259777-54956124059412-1525352022795148987-476868",
		"id": 33962202259777,
		"area": "92",
		"price": "145",
		"areaName": "大岭山",
		"userId": 54956124059412,
		"houseType": "3室",
		"userName": "何锦霞",
		"cateId": 12
	},
	{
		"shangquanName": "石井区",
		"xiaoquName": "中惠丽阳时代",
		"phone": "13926805894",
		"picUrl": "http://pic4.58cdn.com.cn/anjuke_58/406dd1c4e3914ca09ad31aea8566a61e",
		"url": "http://jump.jinpai.58.com/service?target=INKicKZPP1W52DKyS1coknVk6MOpffA1fhH72PTg9aHxLGExDQAOXHSPwy7LRseG3-gtDNIqMNrdpGWZt5EFP3p1DW9MbiHSrlPwhLnQVY9iLSvOjei-oYgqh_LVyJTpZU8OpZCiMVnm9syuxhrxHJCsJ-K_g1FfvDYim31hOQtEy1-dFeN26utkosHdmOasfLU3YP04BNmB28HyPl8oIA&aoid=1525331626501882686&putid=4767711&apptype=0&from=jglist-right",
		"clickCode": "from=fc_pc_jg_ersf_&model=jglist-right&id=33606023804615-51329785770256-1525331626501882686-476771",
		"id": 33606023804615,
		"area": "40.0",
		"price": "50",
		"areaName": "东城",
		"userId": 51329785770256,
		"houseType": "1室",
		"userName": "罗森平",
		"cateId": 12
	}
];

module.exports = {
	search,
	houseList
};
