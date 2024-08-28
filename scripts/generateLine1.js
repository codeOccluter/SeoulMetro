const fs = require("fs")
const path = require("path")

const stations = [
    { id: '1', name: "강남", cx: 100, cy: 200 },
    { id: '2', name: "역삼", cx: 110, cy: 200 },
    { id: '3', name: "선릉", cx: 120, cy: 200 },
    { id: '4', name: "삼성", cx: 130, cy: 200 },
]

const connections = stations.map((station, index) => {
    if(index < stations.length - 1) {
        return { start: station.id, end: stations[index + 1].id }
    }
    return null
}).filter(connetion => connetion !== null)

const data = { stations, connections }

const outputPath = path.join(__dirname, '..', 'public', 'station1Line.json')
fs.writeFileSync(outputPath, JSON.stringify(data, null, 2))

console.log(`JSON 파일이 ${outputPath}에 성공적으로 생성되었습니다.`)