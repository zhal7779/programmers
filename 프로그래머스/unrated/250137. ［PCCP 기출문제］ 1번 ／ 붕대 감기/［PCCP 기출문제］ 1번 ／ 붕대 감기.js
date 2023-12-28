function solution(bandage, health, attacks) {
    const maxHealth = health;
    const [t, x, y] = bandage;
    
    let lastAttackTime = 0;
    
    for (const [attackTime, damage] of attacks) {
        const timeDiff = attackTime - lastAttackTime - 1;
        const heal = timeDiff * x + Math.floor(timeDiff / t) * y;
        health = Math.min(health + heal, maxHealth);
        
        health -= damage;
        
        if (health <= 0) return -1;
        
        lastAttackTime = attackTime;
    }
    
    return health;
}

// function solution(bandage, health, attacks) {
//     let life = health;
//     const time = attacks[(attacks.length)-1][0];
//     let count = 0; 
    
//     for(let i = 1;i <= time; i++){
//         let isAttack = false;
//         count++; 
//         for(let j = 0;j< attacks.length; j++){
//             if (i === attacks[j][0]) {
//                 count = 0;
//                 isAttack = true;
//                 life -= attacks[j][1];
//             } 
//          }
//         if(health > life && isAttack === false){
//             life +=bandage[1];
//             if(life <health){
//                 health = life;
//             }
//         }
        
//         if( count=== bandage[0]) {
//             life += bandage[2];
//             count = 0;
//         }
        
//         if(life <=0) return -1;
//     }
    
//     return life;
// }