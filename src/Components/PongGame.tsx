import React, { useEffect, useRef, useCallback } from 'react'
import "../css/Components/PongGame.css"

export default function PongGame({width, height} : {width: number, height: number}) {
    
    const canvasRef = useRef<HTMLCanvasElement>(null)

    interface playerProps {
        x: number,
        y: number,
        height: number,
        width: number,
        score: number,
        color: string,
        speed: number
    }

    const user1 =
    {
        x: 15,
        y: height / 2 - 60 / 2,
        height: 60,
        width: 10,
        score: 0,
        color: "WHITE", 
        speed: 20
    }

    const user2 =
    {
        x: width - 25,
        y: height/2 - 60/2,
        height: 60,
        width: 10,
        score: 0,
        color: "WHITE",
        speed: 10
    }

    const midLine = 
    {
        width: 10,
        height: 10,
        x: width / 2 - 2 / 2,
        y: 0,
        color: "WHITE"
    }

    const terrain = 
    {
        width: width,
        height: height,
        x: 0,
        y: 0,
        color: "BLACK"
    }

    const ball = 
    {
        x: width / 2,
        y: height / 2,
        r: 10,
        color: "RED",
        speed: 10,
        velocityX: 5,
        velocityY: 5
    } 

    function drawMidLine(context: CanvasRenderingContext2D)
    {
        for (let index = 0; index <= height; index += 10) 
        {
            if (index % 3)
                drawRect(context, midLine.x, midLine.y + index, midLine.width, midLine.height, midLine.color)
        }
    }

    function resetTerrain()
    {
        ball.x = width / 2
        ball.y = height / 2
        if (Math.round(Math.random()))
        {
            ball.velocityX = 5
            ball.velocityY = 5
        }
        else
        {
            ball.velocityX = -5
            ball.velocityY = 5
        }
        ball.speed = 10;
    }

    function createTerrin(context: CanvasRenderingContext2D)
    {
        drawRect(context, terrain.x, terrain.y, terrain.width, terrain.height, terrain.color)
        drawMidLine(context)
        drawtText(context, user1.score.toString(), width/4*1.4, height/5, "WHITE")
        drawtText(context, user2.score.toString(), width/4*2.4, height/5, "WHITE")
        drawRect(context, user1.x, user1.y, user1.width, user1.height, user1.color)
        drawRect(context, user2.x, user2.y, user2.width, user2.height, user2.color)
        drawCircle(context, ball.x, ball.y, ball.r, ball.color)
    }

    function drawRect(context: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string)
    {
        context.fillStyle = color
        context.fillRect(x, y, w, h)
    }

    function drawCircle(context: CanvasRenderingContext2D, x: number, y: number, r: number, color: string)
    {
        context.fillStyle = color
        context.beginPath()
        context.arc(x, y, r, 0, Math.PI*2, false)
        context.closePath()
        context.fill()
    }

    function drawtText(context: CanvasRenderingContext2D, text: string, x: number, y: number, color: string)
    {
        context.fillStyle = color
        context.font = "75px Orbitron"
        context.fillText(text, x, y)
    }

    function player_collision(player : playerProps) : boolean
    {
        const p_top = player.y
        const p_botton = player.y + player.height
        const p_left = player.x;
        const p_right = player.x + player.width

        const b_top = ball.y - ball.r
        const b_bottom = ball.y + ball.r
        const b_right = ball.x + ball.r
        const b_left = ball.x - ball.r
        
        return (b_right > p_left && b_left < p_right && b_top < p_botton && b_bottom > p_top)
    }

    function updateGame ()
    {
        let colidePoint = 0;
        let angleCollision = 0;
        const computer_level = 0.25
        let botMove = (ball.y - (user2.y + user2.height / 2)) * computer_level

        if (botMove - user2.height < height && botMove + user2.height > 0)
            user2.y += botMove
        
        ball.x += ball.velocityX
        ball.y += ball.velocityY
        if (ball.y + ball.r >= height || ball.y - ball.r <= 0)
            ball.velocityY = -ball.velocityY;
        else if (player_collision(user1))
        {
            colidePoint = (ball.y - (user1.y + (user1.height / 2))) / (user1.height /2)
            angleCollision = colidePoint * (Math.PI / 4)
            ball.velocityX = ball.speed * Math.cos(angleCollision)
            ball.velocityY = ball.speed * Math.sin(angleCollision)
            ball.speed += 0.5
        }
        else if (player_collision(user2))
        {
            colidePoint = (ball.y - (user2.y + (user2.height / 2))) / (user2.height /2)
            angleCollision = colidePoint * (Math.PI / 4)
            ball.velocityX = -ball.speed * Math.cos(angleCollision)
            ball.velocityY = ball.speed * Math.sin(angleCollision)
            ball.speed += 0.5
        }
        else if (ball.x + ball.r >= width || ball.x - ball.r <= 0)
        {
            if (ball.x + ball.r >= width)
            {
                user1.score += 1
                resetTerrain()
                return ;
            }
            user2.score += 1
            resetTerrain()
            return ;
        }
    }

    function game (context: CanvasRenderingContext2D)
    {
        updateGame()
        createTerrin(context)
    }

    const mouseMouveEvent = useCallback((e : MouseEvent) => 
    {
        if (canvasRef.current)
        { 
            let userRect = canvasRef.current.getBoundingClientRect() 
            if (e.clientY - userRect.top - user1.height / 2 > 10 && e.clientY - userRect.top + user1.height / 2 < height - 10)  
                user1.y = e.clientY - userRect.top - (user1.height / 2)
            else if (e.clientY - userRect.top - user1.height / 2 > 10)
                user1.y = height - user1.height - 10
            else 
                user1.y = 10
        }
    }, []);


    // const handleUserKeyPress = useCallback((e : KeyEvent) => 
    // {

    //     if (e.key == "ArrowUp")
    //     {
    //         if (user1.y > 0)
    //             user1.y -= user1.speed; 
    //     }
    //     else if (e.key == "ArrowDown")
    //     {
    //         if (user1.y + user1.height < height) 
    //             user1.y += user1.speed; 
    //     }
    // }, []);

    useEffect(()=>{
        if (canvasRef.current)
        {
            const canvas = canvasRef.current
            const context = canvas.getContext('2d')
            window.addEventListener("mousemove", mouseMouveEvent);
            if (context)
            {
                const frame = 50;
                const interval = setInterval(() => {
                    game(context) 
                }, 1000 / frame)

                return () => 
                {
                    clearInterval(interval)  
                    window.removeEventListener("mousemove", mouseMouveEvent);
                }
            }
        }
    }, [])

  return (
        <canvas ref={canvasRef} width={width} height={height}/>
        )
}