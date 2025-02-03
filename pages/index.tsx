import type { NextPage } from 'next'
import Header from '../components/Header'
import Splash from '../components/Splash'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <div
            className="
    relative
    w-full
    h-screen
    font-serif
    "
        >
            <Splash />
            <div
                className="
        absolute
        inset-0
        flex
        flex-col
        overflow-y-auto
      "
            >
                <Header />

                <p
                    className="
              font-serif
              text-lg
              text-blue-100
              mx-2 md:mx-0
              mb-5 md:mb-10
              p-10
              text-center md:text-left
              bg-gray-800
              bg-opacity-50
              md:w-2/3
              rounded-lg md:rounded-r-full
            "
                >
                    A curious and innovative researcher with 5 years of experience in high quality quantitative and qualitative demographic analysis. Proven ability in project management and utilization of spatial analysis technical software. Exceptional communication and presentation skills with a natural ability to build relationships. An independent problem solver who thrives as a team player in a diverse organization delivering customized solutions to clients.
                </p>

                <p
                    className="
            text-lg
            text-blue-100
            font-serif
            self-end
            mx-2 md:mx-0
            p-10
            text-center md:text-right
            bg-gray-800
            bg-opacity-50
            md:w-2/3
            rounded-lg md:rounded-l-full
              "
                >
                   Experienced with ArcGIS Pro, ArcGIS Online, and QGIS for spatial analysis and data visualization. Data Visualization & Analysis. Proficient in SPSS, Microsoft Excel, and Power Point for presenting complex data. Project & Data Management. Proficient in SQL, NVivo, Qualtrics, Microsoft Forms and Survey Monkey for data collection and analysis.
                </p>
            </div>
        </div>
    )
}

export default Home
