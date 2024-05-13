type PropsType = {
    h1Title: string,
    h2Title: string,
    onBtnClick: (value: number) => void

}


function AppTitle({ h1Title, h2Title, onBtnClick }: PropsType) {
    return <>
        <h1>{h1Title}</h1>
        <h2>{h2Title}</h2>
        <button onClick={()=>onBtnClick(10)}> Set to 10</button>
    </>

}

export default AppTitle