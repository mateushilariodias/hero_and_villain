const { createApp } = Vue;
createApp({
    data() {
        return {
            hero: { health: 100 },
            villain: { health: 100 }
        }
    },
    methods: {
        attack(isHero) {
            if (isHero) {
                this.villain.health -= 15; // Villain takes 15% damage
                if (this.hero.health > 20) {
                    this.hero.health -= 5; // Hero takes 5% damage
                } else {
                    this.hero.health -= 10; // Hero takes 10% damage if health is below 20%
                }
                this.checkHealth();
                this.villainAction();
            }
        },
        defend(isHero) {
            if (isHero) {
                this.villain.health -= 15; // Villain takes 15% damage
                this.hero.health -= 5; // Hero takes 5% damage
                this.checkHealth();
                this.villainAction();
            }
        },
        usePotion(isHero) {
            if (isHero) {
                this.hero.health += 40; // Hero gains 40% health
                if (this.hero.health > 100) {
                    this.hero.health = 100; // Health cannot exceed 100%
                }
                this.villainAction();
            }
        },
        run(isHero) {
            if (isHero) {
                if (this.hero.health <= 20) {
                    this.hero.health -= 5; // Hero loses 5% health per run
                    this.checkHealth();
                }
                this.villainAction();
            }
        },
        villainAction() {
            const actions = ['attack', 'defend', 'usePotion', 'run'];
            const randomAction = actions[Math.floor(Math.random() * actions.length)];
            this[randomAction](false);
        },
        checkHealth() {
            if (this.hero.health > 100) {
                this.hero.health = 100; // Hero health cannot exceed 100%
            } else if (this.hero.health < 0) {
                this.hero.health = 0; // Hero health cannot be less than 0%
            }
            if (this.villain.health > 100) {
                this.villain.health = 100; // Villain health cannot exceed 100%
            } else if (this.villain.health < 0) {
                this.villain.health = 0; // Villain health cannot be less than 0%
            }
        }
    }
}).mount("#app");