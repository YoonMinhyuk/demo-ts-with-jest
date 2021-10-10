import {GG} from './sound.player'

export default class SoundPlayerConsumer {
    soundPlayer: GG.SoundPlayer

    constructor() {
        this.soundPlayer = new GG.SoundPlayer()
    }

    play() {
        console.log(this.soundPlayer.getName())
    }
}