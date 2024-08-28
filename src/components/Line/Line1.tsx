import react from "react"
import { useEffect, useState } from "react"

interface Station {
    id: string
    name: string
    cx: number
    cy: number
}

const Line1 = () => {

    const [stations, setStations] = useState<Station[]>([])

    useEffect(() => {
        const fetchLine1 = async () => {
            const response = await fetch('/station1Line.json')
            const data = await response.json()
            setStations(data.stations)
        }

        fetchLine1()
    }, [])

    return (
        <div>
            Line1
            <svg width="500" height="500">
                {
                    stations.map((station, index) => {
                        if(index < stations.length -1) {
                            const nextStation = stations[index + 1]

                            return (
                                <line
                                    key={`${station.id}-${nextStation.id}`}
                                    x1={station.cx}
                                    y1={station.cy}
                                    x2={nextStation.cx}
                                    y2={nextStation.cy}
                                    stroke="green"
                                    strokeWidth="2"
                                />
                            )
                        }
                        return null
                    })
                }


                {stations.map((station) => (
                    <g key={station.id}>
                        <circle
                            id={station.id}
                            cx={station.cx}
                            cy={station.cy}
                            r="5"
                            fill="green"
                            onClick={() => alert(`Clicked ${station.name}`)}
                            onMouseOver={(e) => (e.currentTarget.style.fill = "red")}
                            onMouseOut={(e) => (e.currentTarget.style.fill = "green")}
                        />
                        <text
                            x={station.cx}
                            y={station.cy + 30}
                            textAnchor="middle"
                            fontSize="14"
                            fill="black"
                        >{station.name}</text>
                    </g>
                ))}
            </svg>
        </div>
    )
}

export default Line1