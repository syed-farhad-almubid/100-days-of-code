function Random(){
    let randNum = Math.floor(Math.random() * 10) + 1;
    return(
        <div>
            <p>Random number is {randNum}</p>
        </div>
    )
}

export default Random;