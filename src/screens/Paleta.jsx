const Paleta = () => {
    const Colors = `
    #FFFFFF
    #F0F0F0
    #D9D9D9
    #BFBFBF
    #A6A6A6
    #8C8C8C
    #737373
    #595959
    #404040
    #262626
    #0D0D0D
    #000000
    
    #FFC0CB
    #FFFACD
    #ADD8E6
`.split('\n').filter(Boolean).map(color => color.trim())

    return (
        <div className='w-[100vw] h-[100vh] bg-stone-950 flex justify-center items-center'>
            <div className="w-3/4 h-5/6 grid grid-cols-8 grid-rows-4 gap-5 relative">
                {
                    Colors.map((color, index) => <div key={index} className={`w-full h-full `} style={{
                        backgroundColor: color
                    }}> 
                        <h1 className="font-extrabold text-lg text-center pt-2 tracking-wide">{color}</h1>
                    </div>)
                }
            </div>
        </div>
    )
}


export default Paleta