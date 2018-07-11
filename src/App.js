import React, { Component } from 'react';
import './App.css';
import heros from './heros.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
import Title from './components/Title'
import HeroCard from './components/HeroCard'

class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        heros: heros,
        unselectedHeros: heros
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectHero = hero => {
        const findHero = this.state.unselectedHeros.find(item => item.hero === hero);

        if(findHero === undefined) {

            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                heros: heros,
                unselectedHeros: heros
            });
        }
        else {
      
            const newHeros = this.state.unselectedHeros.filter(item => item.hero !== hero);
            
            this.setState({ 
                message: "You guessed correctly!",
                curScore: this.state.curScore + 1,
                heros: heros,
                unselectedHeros: newHeros
            });
        }

        this.shuffleArray(heros);
    };

    render() {
        return (
            <Wrapper>
                <Navpills
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.heros.map(hero => (
                        <HeroCard
                            hero={hero.hero}
                            image={hero.image}
                            selectHero={this.selectHero} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;

