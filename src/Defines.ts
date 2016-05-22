export var canvas = <HTMLCanvasElement> document.getElementById('canvas');
export var ctx: CanvasRenderingContext2D = canvas.getContext('2d');

export var BACKGROUND_SPEED = 5; 

export enum Animation_State {
    ANIM_IDLE,
    ANIM_RUN,
    ANIM_JUMP
}

export enum Input_State {
    INPUT_NONE,
    INPUT_TOUCH,
    INPUT_CLICK
}

export enum Click_Position {
    POS_LEFT,
    POS_RIGHT
}

export enum Lane {
    LANE_LEFT = 0,
    LANE_MIDDLE,
    LANE_RIGHT
}

export var Lane_Position = [
    510,
    639,
    760
];

export var enemiesAmount = 2;
export enum Enemies {
    ENEMY_HAMBURGER = 1,
    ENEMY_PIZZA
}

export var fruitAmount = 2;
export enum Fruits {
    FRUIT_BANANA = 1,
    FRUIT_APPLE
}

// export var Fruits_Info = {
//     banana: {
//         points: 5,
//         sprite: 'images/banana.jpeg'
//     },
//   
//     apple: {
//         points: 10,
//         sprite: 'images/apple.jpg'
//     }
// };