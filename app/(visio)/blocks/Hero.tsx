import { Block } from "visio-cms-lib/types";
import Text from 'visio-cms-lib/Text'

interface HeroProps {
    title: string, 
    pageBlockId?: string
}
const Hero:Block<HeroProps> = ({title, pageBlockId=''})=>{
    return (
        <div><Text pageBlockId={pageBlockId} propName="title" defaultValue={title}/></div>
    )
}

Hero.Schema = {
    name: 'Hero',
    id: 'hero',
    defaultPropValues: {
        title: "This is a hero block"
    },
    sideEditingProps: []
}

export default Hero