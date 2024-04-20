// JavaScript
const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            hero: { health: 100 },
            villain: { health: 100 },
            gameOver: false,
            winner: ''
        }
    },
    methods: {
        attack(isHero) {
            if (!this.gameOver) {
                if (isHero) {
                    this.villain.health -= 10; // Villain takes 10% damage
                    if (this.hero.health > 20) {
                        this.hero.health -= 7; // Hero takes 7% damage
                    } else {
                        this.hero.health -= 15; // Hero takes 15% damage if health is below 20%
                    }
                    this.checkHealth();
                    this.villainAction();
                }
            }
        },
        defend(isHero) {
            if (!this.gameOver) {
                if (isHero) {
                    this.villain.health -= 10; // Villain takes 10% damage
                    this.hero.health -= 7; // Hero takes 7% damage
                    this.checkHealth();
                    this.villainAction();
                }
            }
        },
        usePotion(isHero) {
            if (!this.gameOver) {
                if (isHero) {
                    this.hero.health += 20; // Hero gains 20% health
                    if (this.hero.health > 100) {
                        this.hero.health = 100; // Health cannot exceed 100%
                    }
                    this.villainAction();
                }
            }
        },
        run(isHero) {
            if (!this.gameOver) {
                if (isHero) {
                    if (this.hero.health <= 50) {
                        this.hero.health -= 10; // Hero loses 10% health per run
                        this.checkHealth();
                    }
                    this.villainAction();
                }
            }
        },
        villainAction() {
            if (!this.gameOver) {
                const actions = ['attack', 'defend', 'usePotion', 'run'];
                const randomAction = actions[Math.floor(Math.random() * actions.length)];
                this[randomAction](false);
            }
        },
        checkHealth() {
            if (this.hero.health <= 0) {
                this.gameOver = true;
                this.winner = 'Villain';
                this.hero.health = 100;
                this.villain.health = 100;
            }
            if (this.villain.health <= 0) {
                this.gameOver = true;
                this.winner = 'Hero';
                this.hero.health = 100;
                this.villain.health = 100;
            }
        }
    }
});

app.mount("#app");
