import Page from "./cms/[...path]/page";

export default function Main(){
    return <Page params={{path: ['login']}} />
}