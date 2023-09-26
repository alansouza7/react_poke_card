import { Link } from "react-router-dom"
import PageHero from "../components/PageHero"
import SetList from "../components/SetList"
import { useGlobalContext } from "../context/context"


const SetsPage = () => {
  const {serieName} = useGlobalContext()
  return (<>
 
    <PageHero title="Series" serie={serieName} />
   <SetList />
   </>
  )
}

export default SetsPage