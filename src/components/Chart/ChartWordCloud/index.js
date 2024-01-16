import {WordCloud} from "@ant-design/charts";

const data = [{
    "x": "China",
    "value": 1383219999,
    "category": "asia"
}, {
    "x": "India",
    "value": 1315999999,
    "category": "asia"
}, {
    "x": "United States",
    "value": 324981999,
    "category": "america"
}, {
    "x": "Indonesia",
    "value": 263509999,
    "category": "asia"
}, {
    "x": "Brazil",
    "value": 207504999,
    "category": "america"
}, {
    "x": "Pakistan",
    "value": 196458999,
    "category": "asia"
}, {
    "x": "Nigeria",
    "value": 191835999,
    "category": "africa"
}, {
    "x": "Bangladesh",
    "value": 162458999,
    "category": "asia"
}, {
    "x": "Russia",
    "value": 146804371,
    "category": "europe"
}, {
    "x": "Japan",
    "value": 126789999,
    "category": "asia"
}, {
    "x": "Mexico",
    "value": 123517999,
    "category": "america"
}, {
    "x": "Ethiopia",
    "value": 104344999,
    "category": "africa"
}, {
    "x": "Philippines",
    "value": 104036999,
    "category": "asia"
}, {
    "x": "Egypt",
    "value": 93013299,
    "category": "africa"
}, {
    "x": "Vietnam",
    "value": 92699999,
    "category": "asia"
}, {
    "x": "Germany",
    "value": 82799999,
    "category": "europe"
}, {
    "x": "Democratic Republic of the Congo",
    "value": 82242999,
    "category": "africa"
}, {
    "x": "Iran",
    "value": 80135399,
    "category": "asia"
}, {
    "x": "Turkey",
    "value": 79814870,
    "category": "asia"
}, {
    "x": "Thailand",
    "value": 68297999,
    "category": "asia"
}, {
    "x": "France",
    "value": 67012999,
    "category": "europe"
}, {
    "x": "United Kingdom",
    "value": 65109999,
    "category": "europe"
}, {
    "x": "Italy",
    "value": 60599935,
    "category": "europe"
}, {
    "x": "Tanzania",
    "value": 56877999,
    "category": "africa"
}, {
    "x": "South Africa",
    "value": 55907999,
    "category": "africa"
}, {
    "x": "Myanmar",
    "value": 54835999,
    "category": "asia"
}, {
    "x": "South Korea",
    "value": 51446200,
    "category": "asia"
}, {
    "x": "Colombia",
    "value": 49224699,
    "category": "america"
}, {
    "x": "Kenya",
    "value": 48466999,
    "category": "africa"
}, {
    "x": "Spain",
    "value": 46811999,
    "category": "europe"
}, {
    "x": "Argentina",
    "value": 43849999,
    "category": "america"
}, {
    "x": "Ukraine",
    "value": 42541632,
    "category": "europe"
}, {
    "x": "Sudan",
    "value": 42175999,
    "category": "africa"
}, {
    "x": "Uganda",
    "value": 41652999,
    "category": "africa"
}, {
    "x": "Algeria",
    "value": 41063999,
    "category": "africa"
}, {
    "x": "Poland",
    "value": 38423999,
    "category": "europe"
}, {
    "x": "Iraq",
    "value": 37883542,
    "category": "asia"
}, {
    "x": "Canada",
    "value": 36540999,
    "category": "america"
}, {
    "x": "Morocco",
    "value": 34317499,
    "category": "africa"
}, {
    "x": "Saudi Arabia",
    "value": 33710020,
    "category": "asia"
}, {
    "x": "Uzbekistan",
    "value": 32120999,
    "category": "asia"
}, {
    "x": "Malaysia",
    "value": 32063199,
    "category": "asia"
}, {
    "x": "Peru",
    "value": 31826017,
    "category": "america"
}, {
    "x": "Venezuela",
    "value": 31431163,
    "category": "america"
}, {
    "x": "Nepal",
    "value": 28825708,
    "category": "asia"
}, {
    "x": "Angola",
    "value": 28359633,
    "category": "africa"
}, {
    "x": "Ghana",
    "value": 28308300,
    "category": "africa"
}, {
    "x": "Yemen",
    "value": 28119999,
    "category": "asia"
}, {
    "x": "Afghanistan",
    "value": 27657144,
    "category": "asia"
}, {
    "x": "Mozambique",
    "value": 27128529,
    "category": "africa"
}, {
    "x": "Australia",
    "value": 24460899,
    "category": "australia"
}, {
    "x": "North Korea",
    "value": 24213509,
    "category": "asia"
}, {
    "x": "Cameroon",
    "value": 23248043,
    "category": "africa"
}, {
    "x": "Ivory Coast",
    "value": 22671330,
    "category": "africa"
}, {
    "x": "Madagascar",
    "value": 22434362,
    "category": "africa"
}, {
    "x": "Niger",
    "value": 21563999,
    "category": "africa"
}, {
    "x": "Sri Lanka",
    "value": 21202999,
    "category": "asia"
}, {
    "x": "Romania",
    "value": 19759999,
    "category": "europe"
}, {
    "x": "Burkina Faso",
    "value": 19632146,
    "category": "africa"
}, {
    "x": "Syria",
    "value": 18906999,
    "category": "asia"
}, {
    "x": "Mali",
    "value": 18874999,
    "category": "africa"
}, {
    "x": "Malawi",
    "value": 18298999,
    "category": "africa"
}, {
    "x": "Chile",
    "value": 18191899,
    "category": "america"
}, {
    "x": "Kazakhstan",
    "value": 17975799,
    "category": "asia"
}, {
    "x": "Netherlands",
    "value": 17121899,
    "category": "europe"
}, {
    "x": "Ecuador",
    "value": 16737699,
    "category": "america"
}, {
    "x": "Guatemala",
    "value": 16176132,
    "category": "america"
}, {
    "x": "Zambia",
    "value": 15933882,
    "category": "africa"
}, {
    "x": "Cambodia",
    "value": 15626443,
    "category": "asia"
}, {
    "x": "Senegal",
    "value": 15256345,
    "category": "africa"
}, {
    "x": "Chad",
    "value": 14964999,
    "category": "africa"
}, {
    "x": "Zimbabwe",
    "value": 14542234,
    "category": "africa"
}, {
    "x": "Guinea",
    "value": 13290999,
    "category": "africa"
}, {
    "x": "South Sudan",
    "value": 12130999,
    "category": "africa"
}, {
    "x": "Rwanda",
    "value": 11553187,
    "category": "africa"
}, {
    "x": "Belgium",
    "value": 11356190,
    "category": "europe"
}, {
    "x": "Tunisia",
    "value": 11299399,
    "category": "africa"
}, {
    "x": "Cuba",
    "value": 11239003,
    "category": "america"
}, {
    "x": "Bolivia",
    "value": 11145769,
    "category": "america"
}, {
    "x": "Somalia",
    "value": 11078999,
    "category": "africa"
}, {
    "x": "Haiti",
    "value": 11078032,
    "category": "america"
}, {
    "x": "Greece",
    "value": 10783747,
    "category": "europe"
}, {
    "x": "Benin",
    "value": 10653653,
    "category": "africa"
}, {
    "x": "Czech Republic",
    "value": 10578819,
    "category": "europe"
}, {
    "x": "Portugal",
    "value": 10341329,
    "category": "europe"
}, {
    "x": "Burundi",
    "value": 10114504,
    "category": "africa"
}, {
    "x": "Dominican Republic",
    "value": 10075044,
    "category": "america"
}, {
    "x": "Sweden",
    "value": 10054099,
    "category": "europe"
}, {
    "x": "United Arab Emirates",
    "value": 10003222,
    "category": "asia"
}, {
    "x": "Jordan",
    "value": 9889269,
    "category": "asia"
}, {
    "x": "Azerbaijan",
    "value": 9823666,
    "category": "asia"
}, {
    "x": "Hungary",
    "value": 9798999,
    "category": "europe"
}, {
    "x": "Belarus",
    "value": 9498599,
    "category": "europe"
}, {
    "x": "Honduras",
    "value": 8866350,
    "category": "america"
}, {
    "x": "Austria",
    "value": 8773685,
    "category": "europe"
}, {
    "x": "Tajikistan",
    "value": 8741999,
    "category": "asia"
}, {
    "x": "Israel",
    "value": 8690219,
    "category": "asia"
}, {
    "x": "Switzerland",
    "value": 8417699,
    "category": "europe"
}, {
    "x": "Papua New Guinea",
    "value": 8151299,
    "category": "australia"
}]
const config = {
    data,
    wordField: 'x',
    weightField: 'value',
    color: '#121c6a',
    wordStyle: {
        fontFamily: 'Verdana',
        fontSize: [23, 80],
    },
    // 设置交互类型
    interactions: [
        {
            type: 'element-active',
        },
    ],
    state: {
        active: {
            // 这里可以设置 active 时的样式
            style: {
                lineWidth: 2,
            },
        },
    },
};

function ChartWordCloud({todoForInputValues}) {
    return (
        <div style={{height: 388, width: 388}}>
            <WordCloud {...config} />
            <div style={{textAlign: "center"}}>
                搜索用户/房间热门词
            </div>
        </div>
    )
}

export default ChartWordCloud