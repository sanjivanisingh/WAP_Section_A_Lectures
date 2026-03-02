// // fetch the button
const btn = document.querySelector("button");
let currentX = 0;
function move(distance, time, cb){
    setTimeout(() => {
        const btnInfo = btn.getBoundingClientRect();
        const right = btnInfo.right;
        const width = window.innerWidth;
        if(right + distance <= width){
            currentX += distance;
            btn.style.transform = `translateX(${currentX}px)`; 
            if(cb) cb();
        } else {
            alert("stopppppppppp");
        }
    }, time); 
}

move(100, 2000, 
    () => move(50, 1000, 
        () => move(200, 2000, 
            () => move(100, 1000, 
                () => move(200, 1000, 
                    () => move(50, 50,
                        () => move(50, 1000, 
                            () => move(50, 200, 
                                () => move(50, 2000)
                            )
                        )
                    )
                )
            )
        )
    )
);
// // callback hellllllll
// // move(100, 1000).    
// //     then -> move
// //     themn -> move 
// //     otherwise ->alert

// // promises