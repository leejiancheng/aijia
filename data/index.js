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

let location = [
	{
		name: "不限",
		selected: true,
		wzList: []
	},
	{
		name: "罗湖",
		selected: false,
		wzList: [
			{name: "布心", selected: false},
			{name: "蔡屋围", selected: false},
			{name: "草埔", selected: false},
			{name: "翠竹", selected: false},
			{name: "东湖", selected: false},
			{name: "东门", selected: false},
			{name: "独树村", selected: false},
			{name: "国贸", selected: false},
			{name: "红岗花园", selected: false},
			{name: "洪湖", selected: false},
			{name: "黄贝岭", selected: false},
			{name: "火车站", selected: false},
			{name: "莲塘", selected: false},
			{name: "留医部", selected: false},
			{name: "罗湖区委", selected: false},
			{name: "罗湖周边", selected: false},
			{name: "泥岗", selected: false},
			{name: "清水河", selected: false},
			{name: "人民南", selected: false},
			{name: "水贝", selected: false},
			{name: "水库", selected: false},
			{name: "笋岗", selected: false},
			{name: "田贝", selected: false},
			{name: "文锦渡", selected: false},
			{name: "银湖", selected: false}
		]
	},
	{
		name: "福田",
		selected: false,
		wzList: [
			{name: "八卦岭", selected: false},
			{name: "保税区", selected: false},
			{name: "笔架山", selected: false},
			{name: "彩田村", selected: false},
			{name: "车公庙", selected: false},
			{name: "赤尾", selected: false},
			{name: "福华新村", selected: false},
			{name: "福民新村", selected: false},
			{name: "福田区委", selected: false},
			{name: "福田周边", selected: false},
			{name: "岗厦", selected: false},
			{name: "购物公园", selected: false},
			{name: "皇岗", selected: false},
			{name: "华强北", selected: false},
			{name: "华强南", selected: false},
			{name: "景田", selected: false},
			{name: "莲花北村", selected: false},
			{name: "莲花二村", selected: false},
			{name: "莲花三村", selected: false},
			{name: "莲花一村", selected: false},
			{name: "荔枝公园", selected: false},
			{name: "上步", selected: false},
			{name: "上梅林", selected: false},
			{name: "上沙", selected: false},
			{name: "沙尾", selected: false},
			{name: "沙嘴", selected: false},
			{name: "石厦", selected: false},
			{name: "下梅林", selected: false},
			{name: "香蜜湖", selected: false},
			{name: "下沙", selected: false},
			{name: "新洲", selected: false},
			{name: "益田村", selected: false},
			{name: "圆岭", selected: false},
			{name: "中心区", selected: false},
			{name: "竹子林", selected: false}
		]
	},
	{
		name: "南山",		
		selected: false,
		wzList: [
			{name: "白石洲", selected: false},
			{name: "大冲", selected: false},
			{name: "桂庙路口", selected: false},
			{name: "海上世界", selected: false},
			{name: "海王大厦", selected: false},
			{name: "后海", selected: false},
			{name: "华侨城", selected: false},
			{name: "科技园", selected: false},
			{name: "南山区政府", selected: false},
			{name: "南山医院", selected: false},
			{name: "南山周边", selected: false},
			{name: "南头", selected: false},
			{name: "南新路口", selected: false},
			{name: "南油", selected: false},
			{name: "前海", selected: false},
			{name: "蛇口", selected: false},
			{name: "深大北门", selected: false},
			{name: "深圳湾", selected: false},
			{name: "桃源村", selected: false},
			{name: "西丽", selected: false},
			{name: "中心区", selected: false}
		]
	},
	{
		name: "盐田",
		selected: false,
		wzList: [
			{name: "沙头角", selected: false},
			{name: "盐田", selected: false},
			{name: "大梅沙", selected: false},
			{name: "小梅沙", selected: false},
			{name: "盐田周边", selected: false}
		]
	},
	{
		name: "宝安",
		selected: false,
		wzList: [
			{name: "宝安", selected: false},
			{name: "宝安中心区", selected: false},
			{name: "宝安周边", selected: false},
			{name: "翻身路", selected: false},
			{name: "福永", selected: false},
			{name: "沙井", selected: false},
			{name: "石岩", selected: false},
			{name: "松岗", selected: false},
			{name: "桃源居", selected: false},
			{name: "新安", selected: false},
			{name: "新中心区", selected: false},
			{name: "西乡", selected: false}
		]
	},
	{
		name: "龙岗区",
		selected: false,
		wzList: [
			{name: "横岗", selected: false},
			{name: "龙岗区", selected: false},
			{name: "坂田", selected: false},
			{name: "龙岗中心城", selected: false},
			{name: "平湖", selected: false},
			{name: "坪地", selected: false},
			{name: "大运新城", selected: false},
			{name: "万科城", selected: false},
			{name: "龙岗周边", selected: false}
		]
	},
	{
		name: "布吉",
		selected: false,
		wzList: [
			{name: "百鸽笼", selected: false},
			{name: "布吉关", selected: false},
			{name: "布吉街", selected: false},
			{name: "布吉周边", selected: false},
			{name: "长龙", selected: false},
			{name: "大芬村", selected: false},
			{name: "丹竹头", selected: false},
			{name: "康桥", selected: false},
			{name: "丽湖", selected: false},
			{name: "木棉湾", selected: false},
			{name: "南岭", selected: false},
			{name: "下水径", selected: false},
			{name: "信义", selected: false},
			{name: "又一村", selected: false},
			{name: "中海怡翠", selected: false}
		]
	},
	{
		name: "坪山新区",
		selected: false,
		wzList: [
			{name: "坪山", selected: false},
			{name: "坑梓", selected: false},
			{name: "坪山新区周边", selected: false}
		]
	},
	{
		name: "光明新区",
		selected: false,
		wzList: []
	},
	{
		name: "龙华新区",
		selected: false,
		wzList: [
			{name: "大浪", selected: false},
			{name: "观澜", selected: false},
			{name: "金地梅陇镇", selected: false},
			{name: "锦绣江南", selected: false},
			{name: "莱蒙水榭春天", selected: false},
			{name: "龙华", selected: false},
			{name: "龙华中心区", selected: false},
			{name: "龙华周边", selected: false},
			{name: "美丽365花园", selected: false},
			{name: "梅林关口", selected: false},
			{name: "民治", selected: false},
			{name: "深圳北站", selected: false},
			{name: "世纪春城", selected: false}
		]
	},
	{
		name: "大鹏新区",
		selected: false,
		wzList: [
			{name: "大鹏", selected: false},
			{name: "南澳", selected: false},
			{name: "葵涌", selected: false},
			{name: "大鹏新区周边", selected: false}
		]
	},
	{
		name: "深圳周边",
		selected: false,
		wzList: []
	}
];

let metroLine = [
	{
		name: "不限",
		selected: true,
		wzList: []
	},
	{
		name: "1号线",
		selected: false,
		wzList: [
			{name: "整条线路", selected: false},
			{name: "罗湖", selected: false},
			{name: "国贸", selected: false},
			{name: "老街", selected: false},
			{name: "大剧院", selected: false},
			{name: "科学馆", selected: false},
			{name: "华强路", selected: false},
			{name: "岗厦", selected: false},
			{name: "会展中心", selected: false},
			{name: "购物公园", selected: false},
			{name: "香蜜湖", selected: false},
			{name: "车公庙", selected: false},
			{name: "竹子林", selected: false},
			{name: "侨城东", selected: false},
			{name: "华侨城", selected: false},
			{name: "世界之窗", selected: false},
			{name: "白石洲", selected: false},
			{name: "高新园", selected: false},
			{name: "深大", selected: false},
			{name: "桃园", selected: false},
			{name: "大新", selected: false},
			{name: "鲤鱼门", selected: false},
			{name: "前海湾", selected: false},
			{name: "新安", selected: false},
			{name: "宝安中心", selected: false},
			{name: "宝体", selected: false},
			{name: "坪洲", selected: false},
			{name: "西乡", selected: false},
			{name: "固戍", selected: false},
			{name: "后瑞", selected: false},
			{name: "机场东", selected: false}
		]
	},
	{
		name: "2号线",
		selected: false,
		wzList: [
			{name: "整条线路", selected: false},
			{name: "赤湾", selected: false},
			{name: "蛇口港", selected: false},
			{name: "海上世界", selected: false},
			{name: "水湾", selected: false},
			{name: "东角头", selected: false},
			{name: "湾厦", selected: false},
			{name: "海月", selected: false},
			{name: "登良", selected: false},
			{name: "后海", selected: false},
			{name: "科苑", selected: false},
			{name: "红树湾", selected: false},
			{name: "世界之窗", selected: false},
			{name: "侨城北", selected: false},
			{name: "深康", selected: false},
			{name: "安托山", selected: false},
			{name: "侨香", selected: false},
			{name: "香蜜", selected: false},
			{name: "香梅北", selected: false},
			{name: "景田", selected: false},
			{name: "莲花西", selected: false},
			{name: "福田", selected: false},
			{name: "市民中心", selected: false},
			{name: "岗厦北", selected: false},
			{name: "华强北", selected: false},
			{name: "燕南", selected: false},
			{name: "大剧院", selected: false},
			{name: "湖贝", selected: false},
			{name: "黄贝岭", selected: false},
			{name: "新秀", selected: false}
		]
	},
	{
		name: "3号线",
		selected: false,
		wzList: [
			{name: "整条线路", selected: false},
			{name: "益田", selected: false},
			{name: "石厦", selected: false},
			{name: "购物公园", selected: false},
			{name: "福田", selected: false},
			{name: "少年宫", selected: false},
			{name: "莲花村", selected: false},
			{name: "华新", selected: false},
			{name: "通新岭", selected: false},
			{name: "红岭", selected: false},
			{name: "老街", selected: false},
			{name: "晒布", selected: false},
			{name: "翠竹", selected: false},
			{name: "田贝", selected: false},
			{name: "水贝", selected: false},
			{name: "布吉", selected: false},
			{name: "木棉湾", selected: false},
			{name: "大芬", selected: false},
			{name: "丹竹头", selected: false},
			{name: "六约", selected: false},
			{name: "塘坑", selected: false},
			{name: "横岗", selected: false},
			{name: "永湖", selected: false},
			{name: "荷坳", selected: false},
			{name: "大运", selected: false},
			{name: "爱联", selected: false},
			{name: "吉祥", selected: false},
			{name: "龙城广场", selected: false},
			{name: "南联", selected: false},
			{name: "双龙", selected: false}
		]
	},
	{
		name: "4号线",
		selected: false,
		wzList: [
			{name: "整条线路", selected: false},
			{name: "清湖", selected: false},
			{name: "龙华", selected: false},
			{name: "龙胜", selected: false},
			{name: "上塘", selected: false},
			{name: "红山", selected: false},
			{name: "深圳北站", selected: false},
			{name: "白石龙", selected: false},
			{name: "民乐", selected: false},
			{name: "上梅林", selected: false},
			{name: "莲花北", selected: false},
			{name: "少年宫", selected: false},
			{name: "市民中心", selected: false},
			{name: "会展中心", selected: false},
			{name: "福民", selected: false},
			{name: "福田口岸", selected: false}
		]
	},
	{
		name: "5号线",
		selected: false,
		wzList: [
			{name: "整条线路", selected: false},
			{name: "黄贝岭", selected: false},
			{name: "怡景", selected: false},
			{name: "太安", selected: false},
			{name: "布心", selected: false},
			{name: "百鸽笼", selected: false},
			{name: "布吉", selected: false},
			{name: "长龙", selected: false},
			{name: "下水径", selected: false},
			{name: "上水径", selected: false},
			{name: "杨美", selected: false},
			{name: "坂田", selected: false},
			{name: "五和", selected: false},
			{name: "民治", selected: false},
			{name: "深圳北站", selected: false},
			{name: "长岭陂", selected: false},
			{name: "塘朗", selected: false},
			{name: "大学城", selected: false},
			{name: "西丽", selected: false},
			{name: "留仙洞", selected: false},
			{name: "兴东", selected: false},
			{name: "洪浪北", selected: false},
			{name: "灵芝", selected: false},
			{name: "翻身", selected: false},
			{name: "宝安中心", selected: false},
			{name: "宝华", selected: false},
			{name: "临海", selected: false},
			{name: "前海湾", selected: false}
		]
	},
	{
		name: "7号线",
		selected: false,
		wzList: [
			{name: "整条线路", selected: false},
			{name: "太安", selected: false},
			{name: "田贝", selected: false},
			{name: "洪湖", selected: false},
			{name: "笋岗", selected: false},
			{name: "红岭北", selected: false},
			{name: "八卦岭", selected: false},
			{name: "黄木岗", selected: false},
			{name: "华新", selected: false},
			{name: "华强北", selected: false},
			{name: "华强南", selected: false},
			{name: "赤尾", selected: false},
			{name: "福邻", selected: false},
			{name: "皇岗口岸", selected: false},
			{name: "福民", selected: false},
			{name: "皇岗村", selected: false},
			{name: "石厦", selected: false},
			{name: "沙尾", selected: false},
			{name: "上沙", selected: false},
			{name: "车公庙", selected: false},
			{name: "农林", selected: false},
			{name: "安托山", selected: false},
			{name: "深云", selected: false},
			{name: "桃源村", selected: false},
			{name: "龙井", selected: false},
			{name: "珠光", selected: false},
			{name: "茶光", selected: false},
			{name: "西丽", selected: false},
			{name: "西丽湖", selected: false}
		]
	},
	{
		name: "9号线",
		selected: false,
		wzList: [
			{name: "整条线路", selected: false},
			{name: "文锦", selected: false},
			{name: "向西村", selected: false},
			{name: "人民南", selected: false},
			{name: "鹿丹村", selected: false},
			{name: "红岭南", selected: false},
			{name: "红岭", selected: false},
			{name: "园岭", selected: false},
			{name: "红岭北", selected: false},
			{name: "泥岗", selected: false},
			{name: "银湖", selected: false},
			{name: "孖岭", selected: false},
			{name: "上梅林", selected: false},
			{name: "梅村", selected: false},
			{name: "下梅林", selected: false},
			{name: "梅景", selected: false},
			{name: "景田", selected: false},
			{name: "香梅", selected: false},
			{name: "车公庙", selected: false},
			{name: "下沙", selected: false},
			{name: "深圳湾公园", selected: false},
			{name: "深湾", selected: false},
			{name: "红树湾南", selected: false}
		]
	},
	{
		name: "11号线",
		selected: false,
		wzList: [
			{name: "整条线路", selected: false},
			{name: "福田", selected: false},
			{name: "车公庙", selected: false},
			{name: "红树湾南", selected: false},
			{name: "后海", selected: false},
			{name: "南山", selected: false},
			{name: "前海湾", selected: false},
			{name: "宝安", selected: false},
			{name: "碧海湾", selected: false},
			{name: "机场", selected: false},
			{name: "机场北", selected: false},
			{name: "福永", selected: false},
			{name: "桥头", selected: false},
			{name: "塘尾", selected: false},
			{name: "沙井", selected: false},
			{name: "后亭", selected: false},
			{name: "松岗", selected: false},
			{name: "碧头", selected: false}
		]
	}
];

// 总价
let sumPrice = [
	{name: "不限", selected: true},
	{name: "100万以下", selected: false},
	{name: "100-150万", selected: false},
	{name: "150万-200万", selected: false},
	{name: "200万-300万", selected: false},
	{name: "300万-400万", selected: false},
	{name: "400万-550万", selected: false},
	{name: "550万-700万", selected: false},
	{name: "700万-900万", selected: false},
	{name: "900万以上", selected: false}
];

// 面积
let sumAcreage = [
	{name: "不限", selected: true},
	{name: "50㎡以下", selected: false},
	{name: "50-70㎡", selected: false},
	{name: "70-90㎡", selected: false},
	{name: "90-110㎡", selected: false},
	{name: "110-130㎡", selected: false},
	{name: "130-150㎡", selected: false},
	{name: "150-200㎡", selected: false},
	{name: "200-300㎡", selected: false},
	{name: "300-500㎡", selected: false},
	{name: "500㎡以上", selected: false}
];

// 室厅
let sumRoom = [
	{name: "不限", selected: true},
	{name: "一室", selected: false},
	{name: "二室", selected: false},
	{name: "三室", selected: false},
	{name: "四室", selected: false},
	{name: "四室以上", selected: false}
];

// 列表页数据
let houseList = [
    {
        "infoId": 34004316774095,
        "title": "龙岗中心城碧桂园项目 旧改回迁指标房 赔偿红本",
        "url": "http://sz.58.com/ershoufang/34004316774095x.shtml",
        "picUrl": "http://pic5.58cdn.com.cn/anjuke_58/72e096330e70c1160bcb2f1c6be06c79",
        "price": "684",
        "area": "150",
        "danjia": "45600",
        "shi": "3",
        "ting": "2",
        "wei": "2",
        "suoZaiLouCeng": "1",
        "zongLouCeng": "30",
        "fittype": "精装修",
        "cityname": "深圳",
        "areaName": "坪山新区",
        "xiaoquName": "东环花园",
        "xiaoquUrl": "http://sz.58.com/xiaoqu/donghuanhuayuan",
        "toward": "南北",
        "shangQuan": "龙华",
        "huxing": "2室2厅1卫",
        "userName": "叶乃填",
        "floorMH": "低层"
    },
    {
        "infoId": 34005280195659,
        "title": "林源阁 一房一厅 高租金2000一月 业主急售换至新房",
        "url": "http://sz.58.com/ershoufang/34005280195659x.shtml",
        "picUrl": "http://pic7.58cdn.com.cn/anjuke_58/4dfbca5178b3da251fa2a23656a5d117",
        "price": "46.8",
        "area": "43.3",
        "danjia": "6315",
        "shi": "1",
        "ting": "1",
        "wei": "1",
        "suoZaiLouCeng": "2",
        "zongLouCeng": "10",
        "fittype": "精装修",
        "cityname": "深圳",
        "areaName": "布吉",
        "xiaoquName": "长发新村",
        "xiaoquUrl": "http://sz.58.com/xiaoqu/changfaxincun",
        "toward": "东",
        "shangQuan": "坂田",
        "huxing": "1室1厅1卫",
        "userName": "邵长华",
        "floorMH": "低层"
    },
    {
        "infoId": 34005266686531,
        "title": "华侨新苑  龙华民治地铁口 村委统建楼带学位 绿本在手可过户",
        "url": "http://sz.58.com/ershoufang/34005266686531x.shtml",
        "picUrl": "http://pic7.58cdn.com.cn/anjuke_58/5b80cd7b1ade351e97ff4b661d8da768",
        "price": "115",
        "area": "68",
        "danjia": "10294",
        "shi": "2",
        "ting": "2",
        "wei": "1",
        "suoZaiLouCeng": "9",
        "zongLouCeng": "24",
        "fittype": "精装修",
        "cityname": "深圳",
        "areaName": "深圳周边",
        "xiaoquName": "华侨新苑",
        "xiaoquUrl": "http://sz.58.com/xiaoqu/huaqiaoxinyuansz",
        "toward": "南北",
        "shangQuan": "民治",
        "huxing": "2室2厅1卫",
        "userName": "熊卓宇",
        "floorMH": "中层"
    },
    {
        "infoId": 34005252408374,
        "title": "华侨新苑 住家装修精致3房 拎包入住 齐全可过户",
        "url": "http://sz.58.com/ershoufang/34005252408374x.shtml",
        "picUrl": "http://pic7.58cdn.com.cn/anjuke_58/bf61a73ea8bcce4ca81b26e869d429c0",
        "price": "75",
        "area": "88",
        "danjia": "98873",
        "shi": "3",
        "ting": "2",
        "wei": "1",
        "suoZaiLouCeng": "6",
        "zongLouCeng": "12",
        "fittype": "精装修",
        "cityname": "深圳",
        "areaName": "龙华新区",
        "xiaoquName": "华侨新苑",
        "xiaoquUrl": "http://sz.58.com/xiaoqu/huaqiaoxinyuansz",
        "toward": "西南",
        "shangQuan": "民治",
        "huxing": "3室2厅1卫",
        "userName": "叶俊锋",
        "floorMH": "中层"
    },
    {
        "infoId": 34005242787516,
        "title": "笋盘急售龙华华侨新苑，首付15万，朝南向精装两房，带家私电",
        "url": "http://sz.58.com/ershoufang/34005242787516x.shtml",
        "picUrl": "http://pic7.58cdn.com.cn/anjuke_58/7a9bcecde126ff6347957c3bdfcb6f7e",
        "price": "62",
        "area": "73",
        "danjia": "17101",
        "shi": "2",
        "ting": "2",
        "wei": "1",
        "suoZaiLouCeng": "9",
        "zongLouCeng": "24",
        "fittype": "精装修",
        "cityname": "深圳",
        "areaName": "深圳周边",
        "xiaoquName": "华侨新苑",
        "xiaoquUrl": "http://sz.58.com/xiaoqu/huaqiaoxinyuansz",
        "toward": "南",
        "shangQuan": "民治",
        "huxing": "2室2厅1卫",
        "userName": "熊卓宇",
        "floorMH": "中层"
    },
    {
        "infoId": 34005236527409,
        "title": "龙华华侨新苑 统建楼 拆迁有赔偿 首付30万买大三房 可过户",
        "url": "http://sz.58.com/ershoufang/34005236527409x.shtml",
        "picUrl": "http://pic5.58cdn.com.cn/anjuke_58/b5bd7a9f671c3aba0221afeedfc3a189",
        "price": "116",
        "area": "83",
        "danjia": "11029",
        "shi": "3",
        "ting": "2",
        "wei": "1",
        "suoZaiLouCeng": "16",
        "zongLouCeng": "20",
        "fittype": "精装修",
        "cityname": "深圳",
        "areaName": "深圳周边",
        "xiaoquName": "华侨新苑",
        "xiaoquUrl": "http://sz.58.com/xiaoqu/huaqiaoxinyuansz",
        "toward": "南",
        "shangQuan": "民治",
        "huxing": "3室2厅1卫",
        "userName": "漆文武",
        "floorMH": "高层"
    },
    {
        "infoId": 34005228400060,
        "title": "民治 华侨新苑首付40万 业主诚心急售 近地铁物业",
        "url": "http://sz.58.com/ershoufang/34005228400060x.shtml",
        "picUrl": "http://pic4.58cdn.com.cn/anjuke_58/acd532bddc3248459d3097a92c7709d0",
        "price": "110",
        "area": "62",
        "danjia": "31000",
        "shi": "2",
        "ting": "2",
        "wei": "2",
        "suoZaiLouCeng": "9",
        "zongLouCeng": "21",
        "fittype": "毛坯",
        "cityname": "深圳",
        "areaName": "宝安",
        "xiaoquName": "华侨新苑",
        "xiaoquUrl": "http://sz.58.com/xiaoqu/huaqiaoxinyuansz",
        "toward": "南",
        "shangQuan": "民治",
        "huxing": "2室2厅2卫",
        "userName": "朱国洪",
        "floorMH": "中层"
    }
];

module.exports = {
	search,
	houseList,
	location,
	metroLine,
	sumAcreage,
	sumRoom,
	sumPrice
};
