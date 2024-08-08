import Head from 'next/head'
import LineList from '../components/Line/LineList'

export default function Home() {

    return (
        <div>
            <Head>
                <title>Seoul Metro</title>
                <meta name="description" content="Seoul Metro Subway Lines Information" />
            </Head>
            <div>
                <h1 className='text-2xl font-bold mb-4'>수도권 지하철 노선도</h1>
                <LineList />
            </div>
        </div>
    )
}